<?php
	$useid=$_POST['useid'];
	$usepass=$_POST['usepass'];
	$con=mysql_connect("localhost","root","1");
	mysql_select_db("leshi",$con);
	$sql="select * from users where useid='".$useid."' and 
	usepass='".$usepass."'";
	$result=mysql_query($sql,$con);
	$rows=mysql_num_rows($result);
	echo $rows;
?>