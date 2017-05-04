<?php
	header("content-type","text/html;charset=utf-8");
	$useid=$_POST['useid'];
	$usepass=$_POST['usepass'];
	$con=mysql_connect("localhost","root","1");
	mysql_select_db("leshi",$con);
	$sql="insert into users(useid,usepass) 
	value('".$useid."','".$usepass."')";
	mysql_query($sql);
	mysql_close($con);
?>