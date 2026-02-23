<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "twojemail@gmail.com";   // ← wpisz swój email
    $subject = "Nowe zgłoszenie Golden Gym";

    $body = "Imię: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n\n";
    $body .= "Wiadomość:\n$message";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana!";
    } else {
        echo "Błąd wysyłania.";
    }
}

?>