<?php
	header("content-type","text/html;charset=utf-8");
	$useid=$_GET['textid'];
	$con=mysql_connect("localhost","root","1");
	mysql_select_db("leshi",$con);
	$sql="select * from users where useid='".$useid."'";
	$result=mysql_query($sql,$con);
	$rows=mysql_num_rows($result);
	mysql_close($con);
	echo $rows;
?>