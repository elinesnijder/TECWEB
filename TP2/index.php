<?php
// Define o cookie no servidor
$cookie_name = "user";
$cookie_value = "John Doe";
$cookie_expire = time() + (86400 * 30); // Expira em 30 dias
setcookie($cookie_name, $cookie_value, $cookie_expire, "/"); // Define o cookie
?>
