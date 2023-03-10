import express, {Request, Response, NextFunction} from 'express'
import { userController, postController } from './controllers'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors-ts'
import helmet from 'helmet'
import mongoose from 'mongoose'
import { HttpError } from './common/errors'
import { ExeptionFilter, exeptionFilter } from './common/errors/exeption.filter'

export class App {

    app = express();
    port = 8000;

    useRoutes() {
        this.app.use('/users', userController.router);
        this.app.use('/posts', postController.router);
    }

    useMiddlewares() {
        // this.app.use((req: Request, res: Response, next: NextFunction) => {
        //     try {
        //         throw new HttpError(500, "Custom error");
        //     } catch (e: any) {
        //         console.log("error throwed", e.message)
        //         next(e);
        //     }
        // })
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(
            morgan(
                ':date[iso] ":method :url" :status :res[content-length]'
            )
        )
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.log('Error in middleware', err.message);
        })
    }

    async initDB(){
        await mongoose.connect('mongodb://localhost:27017/homework17');
        console.log('Database connection established successfully');
    }

    // thowError() {
    //     throw new HttpError(500, "Custom error");
    // }

    async init(){
        this.useMiddlewares();
        this.useRoutes();
        await this.initDB();

        this.app.use(exeptionFilter.catch.bind(exeptionFilter));
        this.app.listen(this.port, () => {
            console.log(`Server is listening on http://localhost:${this.port}`);
        });
        process.on('uncaughtException', (err:Error) => {
            console.log('Uncaught error', err.message);
        })
        process.on('unhandledRejection', (err:Error) => {
            console.log('Uncaught ASYNC error', err.message);
        })
        // this.thowError();
    }
}

(async () => {
    const app = new App();
    await app.init();
})();
