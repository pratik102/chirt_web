<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Send email without attachment
  $to = "chitdesigninfo@gmail.com";
  $subject = "Chit Design";

  $email_message = "
        <html>
        <head>
        <title>HTML email</title>
        </head>
        <body>
        <table border='1' >
        <tr>
        <th style='padding:10px;'>First Name:</th>
        <td style='padding:10px;'>$firstname</td>
        </tr>
        <tr>
        <th style='padding:10px;'>Last Name:</th>
        <td style='padding:10px;'>$lastname</td>
        </tr>
        <tr>
        <th style='padding:10px;'>Email:</th>
        <td style='padding:10px;'>$email</td>
        </tr>
        <tr>
        <th style='padding:10px;'>Phone:</th>
        <td style='padding:10px;'>$phone</td>
        </tr>
        <tr>
        <th style='padding:10px;'>Subject:</th>
        <td style='padding:10px;'>$subject</td>
        </tr>
        <tr>
        <th style='padding:10px;'>Message:</th>
        <td style='padding:10px;'>$message</td>
        </tr>
        </table>
        </body>
        </html>
    ";

  $headers = "From: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  // Try to send the email
  $success = mail($to, $subject, $email_message, $headers);

  echo json_encode(array("message" => $success ? "Form submitted successfully!" : "Failed to send email."));
} else {
  echo json_encode(array("message" => "Invalid request method."));
}