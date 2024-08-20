<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "adresa_ta_de_email@exemplu.com";
    $subject = "Formular Cere Ofertă";
    $body = "Nume, Prenume: $name\nEmail: $email\nTelefon: $phone\nMesaj: $message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // Redirecționează către pagina principală după trimitere
        header('Location: index.html');  // sau adresa paginii tale principale
        exit();
    } else {
        echo "Eroare la trimiterea mesajului.";
    }
}
?>
