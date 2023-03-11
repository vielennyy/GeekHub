import { IExeptionFilter } from "../types-and-interfaces";
import { HttpError } from "./http.error";
import { NextFunction, Request, Response } from "express";
import { ValidationError } from "./validation.error";
import { Logger } from 'tslog'

export class ExeptionFilter implements IExeptionFilter {
    readonly logger = new Logger();

    catch (err: Error | HttpError | ValidationError,
           req: Request,
           res: Response,
           next: NextFunction ): void {
        if(err instanceof HttpError) {
            console.log(`[${err.context}] Error ${err.statusCode} : ${err.message}`)
            res.status(err.statusCode).send({error: err.message})
        } else if (err instanceof ValidationError) {
            this.logger.warn(`[Validation] Error`);
            res.status(422).send({ error: [...err.validationErrors]})
        } else {
            res.status(500).send({error: err.message});
        }
    }
}

export const exeptionFilter = new ExeptionFilter();