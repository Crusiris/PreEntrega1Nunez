const productsJson = require("../products.json");
//const { urlencoded } = require("body-parser");

const express = require("express");
const app = express();
const port = 8080; // El puerto en el que deseas que se ejecute el servidor

// Endpoint para /products
app.get("/products", (req, res) => {
  const products = productsJson;
  const limit = req.query.limit;

  if (limit) {
    const limitedProducts = products.slice(0, parseInt(limit));
    res.json(limitedProducts);
  } else {
    res.json(products);
  }
});

app.get("/products/:id", (req, res) => {
  const products = productsJson;
  const productId = req.params.id;

  const product = products.find((e) => {
    return e.id == productId ? e : null;
  });
  res.json(product);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
