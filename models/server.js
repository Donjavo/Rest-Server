const express = require('express');
const cors= require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port=process.env.PORT;
        this.usuariosRoutePath='/api/usuarios'
        //* middlewares
        this.middlewares();
        //*rutas de mi aplicación
        this.routes();
    }
    //* middlewares controla los methods post
    middlewares(){
        //cors
        this.app.use(cors());
        // Parseo y lectura del body
        this.app.use(express.json());
        // Directorio público
        this.app.use(express.static('public')); 
    }
    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }
}

module.exports = Server;