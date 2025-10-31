<?php

namespace Aula14;

class ProdutoDAO { // DAO = "Data Access Object" - Padrão de projeto para acesso a dados

    private $Produto = []; // Array para armazenar temporariamente os objetos

    private $arquivo = "Produto.json"; // Nome do arquivo para persistência

        // Construtor: carrega os dados do arquivo JSON ao iniciar a aplicação
    public function __construct() { 
        if (file_exists($this->arquivo)) {
            $conteudo = file_get_contents($this->arquivo);  
            $dados = json_decode($conteudo, true); // Converte JSON em array associativo

            if ($dados) {
                foreach ($dados as $Codigo => $info) {
                    $this->Produto[$Codigo] = new Produto(
                        $info['Codigo'],
                        $info['Nome'],
                        $info['Preco']
                    );
                }
            }
        }
    }

        // Função privada para salvar os dados no arquivo JSON
    private function salvarEmArquivo() {
        $dados = [];

        foreach ($this->Produto as $Codigo => $Produto) {
            $dados[$Codigo] = [
                'Codigo' => $Produto->getCodigo(),
                'Nome' => $Produto->getNome(),
                'Preco' => $Produto->getPreco()
            ];
        }

        file_put_contents($this->arquivo, json_encode($dados, JSON_PRETTY_PRINT));
    }

    // CREATE: Adiciona um novo Produto ao sistema
    public function criarProduto(Produto $Produto) {
        $this->Produto[$Produto->getCodigo()] = $Produto;
        $this->salvarEmArquivo(); // Persiste a alteração no arquivo
    }

    // READ: Retorna todos os Produto
    public function lerProduto() {
        return $this->Produto;
    }

    // UPDATE:
    public function atualizarProduto($Codigo, $novoNome, int $novoPreco) {
        if (isset($this->Produto[$Codigo])) {
            $this->Produto[$Codigo]->setNome($novoNome);
            $this->Produto[$Codigo]->setPreco($novoPreco);
            $this->salvarEmArquivo(); // Persiste a alteração no arquivo
        }
    }

    // DELETE:
    public function excluirProduto(int $Codigo) {
        if (isset($this->Produto[$Codigo])) {
            unset($this->Produto[$Codigo]);
            $this->salvarEmArquivo(); // Persiste a alteração no arquivo
        }
    }
}

?>