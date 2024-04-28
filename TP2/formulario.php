<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos necessários foram enviados
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        // Sanitize inputs
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        // Dados para envio via POST
        $data = [
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'accessKey' => '042be0d3-84fa-4ae8-aaed-2434cda72cac',
            'redirectTo' => 'Obrigado.html'
        ];

        // Inicia a sessão CURL
        $ch = curl_init('https://api.staticforms.xyz/submit');

        // Configuração do CURL para enviar POST
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        // Executa a requisição
        $response = curl_exec($ch);

        // Fecha a sessão CURL
        curl_close($ch);

        // Exibe a resposta do servidor
        echo $response;
    } else {
        // Se algum campo estiver faltando, retorna uma mensagem de erro
        echo "Todos os campos são obrigatórios.";
    }
} else {
    // Se o método de requisição não for POST, redireciona para uma página de erro
    header("Location: erro.html");
}
?>
