<?php

    $name=$_POST['Name'];
    $phonenumber = $_POST['Number'];

    //Server validation
    if (!empty($name) || !empty($phonenumber)){
        $host = 'localhost';
        $username = 'root';
        $password = '';
        $db = 'chancejj';

        $conn = new mysqli($host, $username, $password, $db);
        if (mysqli_connect_error()) {
            die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
           } else {
            $SELECT = "SELECT Name From Response Where Number = 123 Limit 1";
            $INSERT = "INSERT Into Response values(?, ?)";
            //Prepare statement
            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($email);
            $stmt->store_result();
            $rnum = $stmt->num_rows;
            if ($rnum==0) {
             $stmt->close();
             $stmt = $conn->prepare($INSERT);
             $stmt->bind_param("ssssii", $name, $phonenumber);
             $stmt->execute();
             echo "New record inserted sucessfully";
            } else {
             echo "Someone already register using this email";
            }
            $stmt->close();
            $conn->close();
           }
       } else {
        echo "All field are required";
        die();
       }
?>


