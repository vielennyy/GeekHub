import { HttpError } from "./errors";
import { NextFunction, Request, Response, Router } from "express";

export interface IExeptionFilter {
    catch(
        err: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction
    ): void;
}

export interface IControllerRoute {
    path: string;
    method: keyof Pick<Router, "get" | "post" | "delete" | "patch" | "put">;
    handler: (req: Request, res: Response, next: NextFunction) => void;
}
// export type User = {
//     id:number,
//     login:string,
//     password:string,
//     isAdmin:boolean,
// }

// export type Post = {
//     id:number,
//     userId:number,
//     theme:string,
//     text:string,
// }

// export type Pagination = {
//     total:number,
//     data:Post[],
// }

// export type PostDB = {
//     userId:number,
//     posts: Post[],
// }