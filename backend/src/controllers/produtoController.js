const Produto = require("../models/Produto");

async function listarProdutos(req, res) {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarProduto(req, res) {
  try {
    const produto = await Produto.findById(req.params.id);

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarProduto(req, res) {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarProduto(req, res) {
  try {
    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirProduto(req, res) {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  excluirProduto
};
