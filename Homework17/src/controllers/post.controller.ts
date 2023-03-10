import express, { NextFunction, Response, Request } from "express"
import { postService } from "../services";

export class PostController {
    router = express.Router();

    constructor() {
        this.router.delete('/:postId', this.deletePost);
        this.router.patch('/:postId', this.editPost);
    }

    deletePost = async (req:Request, res:Response, next:NextFunction) => {

        try {
            const postId = req.params.postId;
            const post = await postService.deletePost(postId);
            res.send(`Post ${postId} is deleted`);
        } catch (e: any) {
            console.log("error throwed", e.message)
            next(e);
        }
        
    }

    editPost = async (req:Request, res:Response, next:NextFunction) => {
        try {
            const postId = req.params.postId;
            const {theme, text} = req.body;
            const post = await postService.editPost(postId, theme, text);
            res.send(post);
        } catch (e: any) {
            console.log("error throwed", e.message)
            next(e);
        }
        
    }
    
}

export const postController = new PostController();