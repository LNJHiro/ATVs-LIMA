<?php 
        namespace Aula14;

        require_once "Produto.php";
        require_once "ProdutoDAO.php";
    // Objeto da classe 
    
    $dao = new ProdutoDAO();

    $dao -> criarProduto(new Produto(1,"Tomate", 20));

    $dao -> criarProduto(new Produto(2,"Maçã", 20));

    $dao -> criarProduto(new Produto(3,"queijo brie", 20));

    $dao -> criarProduto(new Produto(4,"iorgute grego", 20));

    $dao -> criarProduto(new Produto(5,"Guaraná Jesus", 20));

    $dao -> criarProduto(new Produto(6,"Bolacha Bono", 20));

    $dao -> criarProduto(new Produto(7,"Desinfetante Urca", 20));

    $dao -> criarProduto(new Produto(8,"Prestobarba Bic", 20));

            echo "\nListagem inicial:\n";
    foreach($dao -> lerProduto() as $produto){
        echo "{$produto -> getCodigo()} - {$produto -> getNome()} - {$produto -> getPreco()}\n";
    }
    //  Update
    $dao -> atualizarProduto(7, "Desinfetante Barbarex", 15);

    // $dao -> atualizarProduto(7, "Desinfetante Barbarex", 15);

    $dao -> atualizarProduto(8,"Prestobarba Bic", 15);

        echo "\nListagem após atualização:\n";
    foreach($dao -> lerProduto() as $produto){
        echo "{$produto -> getCodigo()} - {$produto -> getNome()} - {$produto -> getPreco()}\n";
    }
    //  Delete

    $dao -> excluirProduto(1);

    $dao -> excluirProduto(2);

            echo "\nListagem após exclusão:\n";
    foreach($dao -> lerProduto() as $produto){
        echo "{$produto -> getCodigo()} - {$produto -> getNome()} - {$produto -> getPreco()}\n";
    }
    ?>