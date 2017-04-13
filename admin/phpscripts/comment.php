<?php

include_once('connect.php');
include('read.php');		
		
if(isset($_POST['comment_text']) && isset($_POST['comment_username']) && isset($_POST['comment_movie']))
{
$comment=$_POST['comment_text'];
$name=$_POST['comment_username'];
$movie=$_POST['comment_movie'];
$insert= "insert into tbl_comments values(NULL,'$name', CURRENT_TIMESTAMP, '$comment', '$movie')";
mysqli_query($link, $insert);

$select= "select comment_username, comment_timestamp, comment_text from tbl_comments where comment_username='$name' and comment_text='$comment'";
$display = mysqli_query($link, $select);

if($row = mysqli_fetch_array($display))
{
echo "<div class=\"comment_div\">
<p class=\"name\">Posted By:{$row['comment_username']}</p>
<p class=\"comment\">{$row['comment_text']}</p>
<p class=\"time\">{$row['comment_timestamp']}</p>
</div>";

}

exit;
}
else{
echo "No Data Is set";
}

?>