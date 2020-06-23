<?php
if(!isset($_REQUEST['name']) || (trim($_REQUEST['name'])=='')) {
    header('HTTP/1.1 400 Form data error');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(array('message' => 'Name are required'));
    exit;
}

if(!isset($_REQUEST['email']) || (trim($_REQUEST['email'])=='')) {    
    header('HTTP/1.1 400 Form data error');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(array('message' => 'Email are required'));
    exit;
}

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;             // Enable verbose debug output
    $mail->isSMTP();                                   // Send using SMTP
    $mail->Host       = 'qwavee.com';                  // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                          // Enable SMTP authentication
    $mail->Username   = 'diego@qwavee.com';            // SMTP username
    $mail->Password   = 'D13g0221!';                   // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                           // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    $mail->SMTPDebug = 0;

    //Recipients
    $mail->setFrom('diego@qwavee.com', 'Lumedic Contact Form');
    $mail->addAddress('communications@bluetreenetwork.com', 'Communications Blue Tree Network');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Lumedic Contact Form';
    $mail->Body    = 'Lumedic Contact Form information: <br>'
        .(isset($_REQUEST['name'])?"Contact Name: <b>{$_REQUEST['name']}</b><br>":"No name completed<br>")
        .(isset($_REQUEST['email'])?"Email Name: <b>{$_REQUEST['email']}</b><br>":"No email completed<br>")
        .(isset($_REQUEST['organization'])?"Organization Name: <b>{$_REQUEST['organization']}</b><br>":"No Organization completed<br>")
        .(isset($_REQUEST['title'])?"Title: <b>{$_REQUEST['title']}</b><br>":"No Title completed<br>")
    ;

    $mail->AltBody = 'Lumedic Contact Form information: '
        .(isset($_REQUEST['name'])?"Contact Name: {$_REQUEST['name']} - ":"No name completed -")
        .(isset($_REQUEST['email'])?"Email Name: {$_REQUEST['email']} -":"No email completed -")
        .(isset($_REQUEST['organization'])?"Organization Name: {$_REQUEST['organization']} - ":"No Organization completed -")
        .(isset($_REQUEST['title'])?"Title: {$_REQUEST['title']} - ":"No Title completed")
    ;

    $mail->send();
    
    header('Content-Type: application/json');
    echo json_encode([
        'message' => "Message send it Successfully"
    ]);
} catch (Exception $e) {
    header('HTTP/1.1 500 Form data send error');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}")));
}