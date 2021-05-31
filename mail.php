<?php
$name =  $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "geraldencabo@gmail.com";
$subject = "Mail from My Portfolio page";
$txt = "Name = " . $name. "\r\n Email = " . $email . "\r\n Message = " . $message;

$headers = "From: " . $email;
if($email != NULL){
    mail($to, $subject, $txt, $headers);
}

header("Location:index.html");