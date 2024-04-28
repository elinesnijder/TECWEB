<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Configurações de e-mail
    $to = "seuemail@example.com"; // Altere para o e-mail desejado
    $subject = "Novo formulário submetido";
    $body = "Nome: $name\nEmail: $email\nMensagem:\n$message";

    // Enviar e-mail
    if (mail($to, $subject, $body)) {
        // Redirecionar para a página de obrigado após o envio bem-sucedido
        header("Location: http://10.4.0.180/~a84785/TP2/obrigado.html");
        exit();
    } else {
        // Se houver algum erro ao enviar o e-mail, exibir uma mensagem de erro
        echo "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.";
    }
} else {
    // Se o método de requisição não for POST, redirecionar para uma página de erro
    header("Location: erro.html");
    exit();
}
?>
