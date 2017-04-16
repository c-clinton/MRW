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
echo "<div class=\"comment-div userinfo row\">
<p class=\"name small-3 small-push-3 columns\">{$row['comment_username']}</p>
<p class=\"time small-4 small-pull-2 columns\">{$row['comment_timestamp']}</p></div>
<p class=\"comment commenttext text-center\">{$row['comment_text']}</p>
</div>";

}

exit;
}
else{
echo "No Data Is set";
}

?>