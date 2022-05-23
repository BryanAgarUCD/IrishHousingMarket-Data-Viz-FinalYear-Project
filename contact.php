<?php
/* server login details */ 
//$servername = "mysql4416int.cp.blacknight.com";
//$username = "u1202082_bac";
//$password = "685J2vHN";
//$dbname = "db1202082_bac";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contacts";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$dbname);

// Check connection
if (!$conn) {
  echo "Connection failed: " .mysqli_connect_error();
}
//echo $_POST["firstname"];



//process.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {  //Check it is comming from a form

	$u_name = filter_var($_POST["firstname"], FILTER_SANITIZE_STRING); //set PHP variables like this so we can use them anywhere in code below
	$u_email = filter_var($_POST["emailaddress"], FILTER_SANITIZE_EMAIL);
	$u_text = filter_var($_POST["lastname"], FILTER_SANITIZE_STRING);
    $u_job = filter_var($_POST["jobtitle"], FILTER_SANITIZE_STRING);
    $u_interest = filter_var($_POST["storytype"], FILTER_SANITIZE_STRING);
    $u_feedback = filter_var($_POST["storytext"], FILTER_SANITIZE_STRING);
/* if statements setup */ 

	if (empty($u_name)){
		die("Please enter your name");
	}
	if (empty($u_email) || !filter_var($u_email, FILTER_VALIDATE_EMAIL)){
		die("Please enter valid email address");
	}
		
	if (empty($u_text)){
		die("Please enter text");
	}
    if (empty($u_job)){
		die("Please enter text");
	}
    if (empty($u_interest)){
		die("Please enter text");
	}
    if (empty($u_feedback)){
		die("Please enter text");
	}
    /* SQL insert code, Into table contactsweb*/ 

     $sql = "INSERT INTO contactsweb (firstname,emailaddress,lastname,jobtitle,storytype,storytext)
     VALUES ('$u_name','$u_email','$u_text','$u_job','$u_interest','$u_feedback')";
	//print output text
/* Checks if connection to database  */ 
 
    if (mysqli_query($conn, $sql)) {
  echo "New record created successfully    ";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
/* closes connection */ 

mysqli_close($conn);
/* print's text once conntection is closed */ 

	print "Hello " . $u_name . "!, we have received your message and email   ". $u_email;
    
	print "  We will contact you very soon! ";
}

   
?>
