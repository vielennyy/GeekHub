import express from 'express'
import { userController, postController } from './controllers'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors-ts'
import helmet from 'helmet'
import mongoose from 'mongoose'

export class App {

    app = express();
    port = 8000;

    useRoutes() {
        this.app.use('/users', userController.router);
        this.app.use('/posts', postController.router);
    }

    useMiddlewares() {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(
            morgan(
                ':date[iso] ":method :url" :status :res[content-length]'
            )
        )
        this.app.use(bodyParser.urlencoded({extended:true}));
    }

    async initDB(){
        await mongoose.connect('mongodb://localhost:27017/homework17');
        console.log('Database connection established successfully');
    }

    async init(){
        this.useMiddlewares();
        this.useRoutes();
        await this.initDB();
        this.app.listen(this.port, () => {
            console.log(`Server is listening on http://localhost:${this.port}`);
        });
    }
}

(async () => {
    const app = new App();
    await app.init();
})();
