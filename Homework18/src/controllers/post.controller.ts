import express, { NextFunction, Response, Request } from "express"
import { BaseController } from "../common/abstract/base.controller";
import { postService } from "../services";

export class PostController extends BaseController {

    constructor() {
        super();
        this.bindRoutes([
            {
                path: "/:postId",
                method: "delete",
                handler: this.deletePost,
            },
            {
                path: "/:postId",
                method: "patch",
                handler: this.editPost,
            },
        ])
    }

    deletePost = async (req:Request, res:Response, next:NextFunction) => {

            const postId = req.params.postId;
            const post = await postService.deletePost(postId);
            res.send(`Post ${postId} is deleted`);
        
    }

    editPost = async (req:Request, res:Response, next:NextFunction) => {
            const postId = req.params.postId;
            const {theme, text} = req.body;
            const post = await postService.editPost(postId, theme, text);
            res.send(post);
        
    }
    
}

export const postController = new PostController();