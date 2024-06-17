const express = require('express');
const bunyan = require('bunyan');
const cors = require('cors');
const productosRouter = require('./routes/productosRouter'); // Importa el router de productos

const PORT = process.env.PORT || 3000;

const log = bunyan.createLogger({ name: 'mi pagina' });
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res,next)=>{

    try {
        res.status(200).json('Haciendo Get en /')
    } catch (error) {
        next(error)
        
    }
})

app.use((err,re,res,next)=>{
    
    res.status(500).json('Error en la api')
})

app.use('/productos', productosRouter); // Usa el router de productos

app.listen(PORT, () => console.log(`Iniciando API en el puerto ${PORT}`));
