 <?php

    require('connect.php');

    $term = mysqli_real_escape_string($link, $_REQUEST['term']);

     

    if(isset($term)){

        $query = "SELECT * FROM tbl_movies WHERE movies_title LIKE '" . $term . "%'";

        if($result = mysqli_query($link, $query)){

            if(mysqli_num_rows($result) > 0){

                while($row = mysqli_fetch_array($result)){
					
				echo "<div class=\"small-12 columns\">";
                echo "<p>{$row['movies_title']}</p>";
				echo "<a href=\"#\" class=\"detailsbut\" id=\"{$row['movies_id']}\">Details</a>";
				echo "</div>";

				}
            } else{

                echo "<p>No results to display.</p>";

            }

        } else{

           		echo "ERROR: Could not execute query. Please contact web admin.";

        }

    }
	
    mysqli_close($link);

 ?>

