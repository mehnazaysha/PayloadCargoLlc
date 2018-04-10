<?php
// Check for empty fields

$post_data = file_get_contents("php://input");
$data = json_decode($post_data);

$name = $data->name;
$email_address = $data->email;
$phone = $data->phone;
$message = $data->message;

// Check for empty fields
if(empty($name)      ||
   empty($email_address)||
   empty($phone)     ||
   empty($message)   ||
   !filter_var($email_address,FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
// Create the email and send the message
$to = 'mehnaz.aysha@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@payloadcargo.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);

return true;         
?>
