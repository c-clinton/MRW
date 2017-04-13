<?php

  require('connect.php');
  include('read.php');
     

    $term = mysqli_real_escape_string($link, $_REQUEST['term']);
 

    if(isset($term)){


        $query = "SELECT * FROM tbl_movies WHERE movies_id = '" . $term . "%'";

        if($result = mysqli_query($link, $query)){

            if(mysqli_num_rows($result) > 0){

                while($row = mysqli_fetch_array($result)){
					
					echo "<div class=\"small-12 columns\">";
                    echo "<p id=\"movtitle\">{$row['movies_title']}</p>";
					echo "<p><img src=\"images/{$row['movies_fimg']}\" alt=\"{$row['movies_title']}\"></p>";
					echo "<p>{$row['movies_year']}</p>";
					echo "<p>{$row['movies_storyline']}</p>";
					echo "<p>{$row['movies_runtime']}</p>";
					echo "<h2>Trailer:</h2>"; 
					echo "<video width=\"600\" controls class=\"img-responsive\"> <source src=\"trailers/{$row['movies_trailer']}\"   type=\"video/mp4\" alt=\"{$row['movies_title']}\"></video>";
					
					echo "<div id=\"commentform\"> <form method='post' action=\"\" onsubmit=\"return sendPost();\">
<textarea id=\"comment\" name=\"comment\" placeholder=\"Write Your Comment Here.....\"></textarea>
<br>
<input type=\"text\" id=\"username\" name=\"name\" placeholder=\"Your Name\">

<input type=\"text\" class=\"hidden\" id=\"movie\" name=\"movie\" value={$row['movies_title']}>
<br>
<input type=\"submit\" name=\"submit\" value=\"Submit\">
</form></div>";

					echo "<h2>Comments</h2>";
					echo "<div align=\"center\" id=\"comments\">";
					$comm = mysqli_query($link, "select comment_username,comment_text,comment_timestamp from tbl_comments where comment_movie = '{$row['movies_title']}' order by comment_timestamp desc");
					while($row = mysqli_fetch_array($comm))
					{

					echo "<p>{$row['comment_username']}</p>";
					echo "<p>{$row['comment_text']}</p>";
					echo "<p>{$row['comment_timestamp']}</p>";
				
}
	echo "</div>";
	echo "</div>";


                }

            } else

            echo "ERROR: Could not execute query. Please contact web admin.";

        }

    }


    mysqli_close($link);

    ?>

