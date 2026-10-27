const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true
    },
    marca: {
      type: String,
      required: true,
      trim: true
    },
    categoria: {
      type: String,
      trim: true,
      default: ""
    },
    preco: {
      type: Number,
      required: true,
      min: 0
    },
    descricao: {
      type: String,
      trim: true,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Produto", produtoSchema);
