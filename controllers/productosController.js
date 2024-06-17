// productosController.js

let productos = [
    { id: 0, texto: 'Works with GmailiCloud & IMAP' },
    { id: 1, texto: 'All processing happens on device' },
    { id: 2, texto: 'Your data is yours to stay' },
    { id: 4, texto: 'Supports dark mode' },
    { id: 5, texto: 'Free to use. Or pay for more features' },
    { id: 6, texto: 'Built & maintained by indie developers' },
    { 
      id: 7, 
      texto: 'New Product', 
      imagenes: [
        'url_de_imagen_1.jpg',
        'url_de_imagen_2.jpg',
        'url_de_imagen_3.jpg'
      ]
    }
  ];
  
  const productosController = {
    read(req, res) {
      res.json(productos);
    },
  
    getById(req, res) {
      let id = req.params.id;
      let productoEncontrado = productos.find(producto => producto.id == id);
      if (productoEncontrado) {
        res.json(productoEncontrado);
      } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
      }
    }
  };
  
  module.exports = productosController;
  