<?php
/* abre o ficheiro e coloca-o no fluxo */
if (!file_exists("índex.html")) {
    print("Impossível abrir índex.html\n");
} else {
    if ($texto = file("índex.html")) {
        for ($i = 0; $i < count($texto); $i++) {
            print("$texto[$i] <br>");
        }
    }
}
?>

<?php
// Recebe o valor do cookie enviado pelo cliente
$cookieValue = $_COOKIE['cookieConsent'];

// Registra o valor do cookie em um arquivo de log ou no banco de dados
file_put_contents('cookie_log.txt', $cookieValue . PHP_EOL, FILE_APPEND);

// Resposta opcional ao cliente
echo "Cookie registrado com sucesso no servidor.";
?>


<?php
// Verifica se o formulário foi enviado e se um arquivo foi selecionado
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["image"])) {
    // Diretório onde as imagens serão armazenadas
    $target_dir = "uploads/";

    // Nome do arquivo de imagem no servidor
    $target_file = $target_dir . basename($_FILES["image"]["name"]);

    // Move o arquivo carregado para o diretório de destino
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        // Retorna a URL da imagem para exibição no banner
        echo json_encode(array("success" => true, "url" => $target_file));
    } else {
        // Retorna uma mensagem de erro se o upload falhar
        echo json_encode(array("success" => false, "message" => "Erro ao fazer upload do arquivo."));
    }
} else {
    // Retorna uma mensagem de erro se o formulário não foi enviado corretamente
    echo json_encode(array("success" => false, "message" => "Formulário inválido."));
}
?>

