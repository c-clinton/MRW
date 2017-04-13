

    <?php

   require('connect.php');

    $term = mysqli_real_escape_string($link, $_REQUEST['term']);

     

    if(isset($term)){

        $query = "SELECT * FROM tbl_movies, tbl_cat, tbl_l_mc WHERE tbl_movies.movies_id = tbl_l_mc.movies_id AND tbl_cat.cat_id = tbl_l_mc.cat_id AND tbl_cat.cat_name LIKE '" . $term . "%'";
		
        if($result = mysqli_query($link, $query)){

            if(mysqli_num_rows($result) > 0){

                while($row = mysqli_fetch_array($result)){

					echo "<div class=\"small-12 medium-4 columns\">";
					echo "<img src=\"images/{$row['movies_thumb']}\" alt=\"{$row['movies_title']}\"></p>";
                    echo "<p>{$row['movies_title']}</p>";
					echo "<a href=\"#\" class=\"detailsbut\" id=\"{$row['movies_id']}\">Details</a>";
					echo "</div>";

                }
            } else{

                echo "<p>No movies in this category. Please try another.</p>";

            }

        } else{

             echo "ERROR: Could not execute query. Please contact web admin.";

        }

    }

    mysqli_close($link);

    ?>

