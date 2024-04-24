<?php
// Função para criar a imagem com texto
function createImageWithText($selectedOption, $newSliderText) {
    // Lógica para criar a imagem com o texto inserido
    // Por exemplo, você pode usar a biblioteca GD para criar a imagem
    $image = imagecreate(400, 200); // Largura e altura da imagem
    $background_color = imagecolorallocate($image, 255, 255, 255); // Cor de fundo branca
    $text_color = imagecolorallocate($image, 0, 0, 0); // Cor do texto preto
    imagestring($image, 5, 10, 80, $newSliderText, $text_color); // Desenha o texto na imagem
    // Substitua este exemplo com sua lógica de geração de imagem

    // Salva a imagem em um arquivo temporário
    $temp_file = tempnam(sys_get_temp_dir(), 'image_with_text');
    imagepng($image, $temp_file);

    // Retorna o caminho completo para a imagem gerada
    return $temp_file;
}

// Verifica se os dados do formulário foram enviados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os dados do formulário
    $selectedOption = $_POST['selectedOption'];
    $newSliderText = $_POST['newSliderText'];

    // Cria a imagem com o texto inserido
    $imageUrl = createImageWithText($selectedOption, $newSliderText);

    // Define o cabeçalho de resposta para iniciar o download
    header('Content-Type: image/png');
    header('Content-Disposition: attachment; filename="image_with_text.png"');

    // Lê o conteúdo da imagem e envia para o navegador
    readfile($imageUrl);

    // Remove o arquivo temporário da imagem
    unlink($imageUrl);
} else {
    // Se os dados do formulário não foram enviados, redireciona de volta para a página anterior
    header('Location: index1.html'); // Substitua "index.html" pelo nome da sua página HTML
    exit;
}
?>
