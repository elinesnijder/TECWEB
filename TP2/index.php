<?php
// Define o cookie no servidor
$cookie_name = "LESTI";
$cookie_value = "John Doe";
$cookie_expire = time() + (86400 * 30); // Expira em 30 dias
setcookie($cookie_name, $cookie_value, $cookie_expire, "/"); // Define o cookie
?>


<?php
        if(isset($_COOKIE)) {
            echo "console.log(" . json_encode($_COOKIE) . ");";
        } else {
            echo "console.log('Nenhum cookie do PHP definido.');";
        }
        ?>
