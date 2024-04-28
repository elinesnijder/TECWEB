<?php
if (isset($_POST["nome"]) && isset($_POST["numero_de_aluno"]) && isset($_POST["disciplina"])) {
    $nome = $_POST["nome"];
    $numero = $_POST["numero_de_aluno"];
    $disciplina = $_POST["disciplina"];

    echo "<p>Olá, " . $nome . "</p>";
    echo "<p>O seu número de aluno é " . $numero . "</p>";
    echo "<p>O seu trabalho de " . $disciplina . " foi entregue com sucesso</p>";
}
?>