import express from 'express';
import indexRoutes from '../v1/routes/indexRoutes.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.apiPaths = {
            users: '/api/v1/users'
        }
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use( express.json() );
    }

    routes() {
        this.app.use( this.apiPaths.users, indexRoutes );
    }

    listen() {
        this.app.listen( this.port , () => {
            console.log('🚀 Server listening on port', this.port)
        });
    }
}

export default Server;