<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $number = htmlspecialchars($_POST['number']);
    $message = htmlspecialchars($_POST['message']);

    $to = "tech@jitc.co.za";  

    $subject = "New Contact Form Submission";
    $email_content = "First Name: $firstName\n";
    $email_content = "Last Name: $lastName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Number: $number\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $email_headers = "From: $firstName $lastName <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $email_headers)) {
        echo "Thank you for your message, $firstName. We will get back to you shortly.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
