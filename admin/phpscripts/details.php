<?php

  require('connect.php');
  include('read.php');
     

    $term = mysqli_real_escape_string($link, $_REQUEST['term']);
 

    if(isset($term)){


        $query = "SELECT * FROM tbl_movies WHERE movies_id = '" . $term . "%'";

        if($result = mysqli_query($link, $query)){

            if(mysqli_num_rows($result) > 0){

                while($row = mysqli_fetch_array($result)){
					
					echo "<div id=\"movieinfo\" class=\"small-12 columns\">";
                    echo "<h2 id=\"movtitle\">{$row['movies_title']} ({$row['movies_year']})</h2>";
					echo "<p>{$row['movies_runtime']}</p>";
					echo "<div class=\"row\">";
					echo "<img src=\"images/{$row['movies_fimg']}\" alt=\"{$row['movies_title']}\" class=\"small-12 medium-4 columns\">";
					echo "<p class=\"small-12 medium-8 columns\">{$row['movies_storyline']}</p>";
					echo "</div>";
					echo "</div>";
					echo "<div class=\"row\">";
					echo "<h2 class=\"columns\">Trailer:</h2>"; 
					echo "<div id=\"vidcon\" class=\"columns\">";
					echo "<div class=\"small-12 medium-6 row\">";
					echo "<div class=\"flex-video\">";
					echo "<video id=\"vid\"> <source src=\"trailers/{$row['movies_trailer']}\"   type=\"video/mp4\" alt=\"{$row['movies_title']}\"></video></div></div><div class=\"video-controls medium-6 row\">  <input type=\"range\" class=\"seek small-12 medium-12 columns\" value=\"0\">
    <button type=\"button\" class=\"play-pause small-3 medium-3 columns\"><img src=\"images/icons/play.png\" alt=\"play\"></button>
    <button type=\"button\" class=\"mute small-3 medium-3 columns\"><img src=\"images/icons/volume.png\" alt=\"mute\"></button>
    <input type=\"range\" class=\"volume small-3 medium-2 large-3  large-push-3 columns\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">
    <button type=\"button\" class=\"fullscreen small-3 medium-3  columns\"><img src=\"images/icons/fullscreen.png\" alt=\"fullscreen\"></button>
  </div></div></div>";
					echo "<div id=\"commentform\"> <h2>Write A Review</h2><form method='post' action=\"\" onsubmit=\"return sendpost();\">
					<input type=\"text\" id=\"username\" name=\"name\" placeholder=\"Your Name\">
<br>
					<textarea id=\"comment\" name=\"comment\" placeholder=\"Write Your Comment Here.....\"></textarea>

					<input type=\"text\" class=\"hidden\" id=\"movie\" name=\"movie\" value={$row['movies_title']}>
<br>
					<input type=\"submit\" name=\"submit\" id=\"submitbut\" value=\"Submit\">
</form></div>";

					echo "<h2>Comments</h2>";
					echo "<div class=\"small-centered columns\" id=\"comments\">";
					
					
					$commquery = "select comment_username,comment_text,comment_timestamp from tbl_comments where comment_movie = '{$row['movies_title']}' order by comment_timestamp desc";
					
					$comm = mysqli_query($link, $commquery);
					
					while($row = mysqli_fetch_array($comm))
					{

					echo "<div class=\"userinfo row\"><p class=\"small-3 small-push-3 columns\">{$row['comment_username']}</p>";
					echo "<p class=\"small-4 small-pull-2 columns\">{$row['comment_timestamp']}</p></div>";
					echo "<p class=\"commenttext text-center\">{$row['comment_text']}</p>";
				
}
					echo "</div>";
					echo "</div>";
					echo "</div>";


                }

            } else

            echo "ERROR: Could not execute query. Please contact web admin.";

        }

    }


    mysqli_close($link);

    ?>

