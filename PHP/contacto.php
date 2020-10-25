<?php
// LLAMANDO A LOS CAMPOS
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

// DATOS PARA EL CORREO
$destinatario = "TarotNaomiEgipcio@gmail.com";
$asunto = "Me interesa el servicio";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// ENVIANDO MENSAJE
mail($destinatario, $asunto, $carta);
echo "<script>alert(Correo enviado exitosamente')</script>";
echo "<script> seTimeout(\"location.href='index.html'\", 1000)</script>";
?>