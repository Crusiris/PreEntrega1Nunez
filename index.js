const fs = require("fs").promises;

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, stock) {
    if (
      title == " " ||
      description == " " ||
      price == " " ||
      thumbnail == " " ||
      stock == " "
    ) {
      console.log("Todos los campos son obligatorios");
    } else {
      const id = this.products.length + 1;

      const productExist = this.products.find((element) => {
        return element.id === id;
      });

      if (!productExist) {
        const product = {
          id,
          title,
          description,
          price,
          thumbnail,
          stock,
        };
        this.products.push(product);
        this.writeFile(this.products);
      } else {
        console.log("El producto ya existe");
      }
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.filter((product) => product.id === id);
    return product;
  }

  async writeFile(products) {
    try {
      await fs.writeFile("products.json", JSON.stringify(products));
      console.log("Creado con exito");
    } catch (error) {
      console.log("Error al escribir el archivo", error);
    }
  }
}

const product1 = new ProductManager();
const product2 = new ProductManager();

product1.addProduct(
  "Jeans",
  "Soy el mejor Jeans que has visto",
  200,
  "img.png",
  20
);

// product2.addProduct(
//   "shirt",
//   "Soy la mejor shirt que has visto",
//   500,
//   "img.png",
//   2
// );

// const products = product1.getProducts();
// console.log(products);

// const productbyid = product1.getProductById(1);
// console.log(productbyid);
