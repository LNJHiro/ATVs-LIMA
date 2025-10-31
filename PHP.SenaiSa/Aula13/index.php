<?php 
        require_once "CRUD.php";
        require_once "AlunoDAO.php";
    // Objeto da classe 
    $dao = new AlunoDAO();

    // Create
    $dao -> criarAluno( new Aluno(1, "Eduardo", "TADS"));

    $dao -> criarAluno( new Aluno(2, "Marcelo", "Medicina"));

    $dao -> criarAluno( new Aluno(3, "Gabriel", "Engenharia"));


    //Crie mais 6 objetos obedescendo a seguinte lista:
    // Id - Nome - Curso
    //   4 - Aurora - Arquitetura
    //   5 - Oliver - Director
    //   6 - Amanda - Lutadora
    //   7 - Gleyse - Engenharia
    //   8 - Jao - Professor
    //   9 - Bernardo - Streamer

    $dao -> criarAluno( new Aluno(4, "Aurora", "Arquitetura"));

    $dao -> criarAluno( new Aluno(5, "Oliver", "Director"));

    $dao -> criarAluno( new Aluno(6, "Amanda", "Lutadora"));

    $dao -> criarAluno( new Aluno(7, "Gleyse", "Engenharia"));

    $dao -> criarAluno( new Aluno(8, "Jao", "Professor"));

    $dao -> criarAluno( new Aluno(9, "Bernardo", "Streamer"));


    //READ
    echo "Listagem inicial:\n   ";
    foreach($dao -> lerAluno() as $aluno){
        echo "{$aluno -> getId()} - {$aluno -> getNome()} - {$aluno -> getCurso()}\n";
    }


    // Update   
    $dao -> atualizarAluno(1, "Mariana", "Design");
    //Faça as seguintes atualizações:
    //  - Alterar nome da Gleyse para Clotilde
    $dao -> atualizarAluno(7, "Clotilde", "Engenharia");

    //  - Alterar nome do Jao para Joana
    $dao -> atualizarAluno(8, "Joana", "Professor");

    //  - Alterar nome do Bernardo para Dev
    $dao -> atualizarAluno(9, "Bernardo", "Dev");

    //  - Alterar curso da Amanda para Logistica
    $dao -> atualizarAluno(6, "Amanda", "Logistica");

    //  - Alterar curso do Oliver para Eletria
    $dao -> atualizarAluno(5, "Oliver", "Eletria");



    echo "\nListagem após atualização:\n";
    foreach($dao -> lerAluno() as $aluno){
        echo "{$aluno -> getId()} - {$aluno -> getNome()} - {$aluno -> getCurso()}\n";
    }




    //DELETE
    $dao -> excluirAluno(2);

    echo "\nListagem após exclusão:\n";
    foreach($dao -> lerAluno() as $aluno){
        echo "{$aluno -> getId()} - {$aluno -> getNome()} - {$aluno -> getCurso()}\n";
    }