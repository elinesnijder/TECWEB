<?php
// Verifica se o método de requisição é POST para evitar que o cookie seja definido em cada solicitação
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define o nome, valor e expiração do cookie
    $cookie_name = "LESTI";
    $cookie_value = "John Doe";
    $cookie_expire = time() + (86400 * 30); // Expira em 30 dias

    // Define o cookie apenas se ele não estiver já definido
    if (!isset($_COOKIE[$cookie_name])) {
        setcookie($cookie_name, $cookie_value, $cookie_expire, "/");

        // Verifica se o cookie foi definido corretamente
        if (isset($_COOKIE[$cookie_name])) {
            echo "Cookie '$cookie_name' definido com sucesso!";
        } else {
            echo "Erro ao definir o cookie '$cookie_name'.";
        }
    } else {
        echo "O cookie '$cookie_name' já está definido.";
    }
} else {
    echo "Este script só deve ser acessado via requisição POST.";
}
?>
