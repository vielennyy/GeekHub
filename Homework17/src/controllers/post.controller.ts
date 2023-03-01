import express, { NextFunction, Response, Request } from "express"
import { postService } from "../services";

export class PostController {
    router = express.Router();

    constructor() {
        this.router.delete('/:postId', this.deletePost);
        this.router.patch('/:postId', this.editPost);
    }
    
    deletePost = async (req:Request, res:Response, next:NextFunction) => {
//         const postId = +req.params.postId;
//         const isCreated = await postService.isCreated(postId);
//         if(isCreated) {
//             const posts = await postService.deletePost(postId);
//             console.log(`Post ${postId} is deleted`)
//             console.log(posts)
//             res.send(posts);
//         }
//         else {
//             console.log(`Post ${postId} is not exist`);
//             res.status(404);
//             res.send(`Post ${postId} is not exist`)
//         }
    }

    editPost = async (req:Request, res:Response, next:NextFunction) => {
//         const postId = +req.params.postId;
//         const {theme, text} = req.body;

//         const isCreated = await postService.isCreated(postId);
//         if(isCreated){
//             const post = await postService.editPost(postId, theme, text);
//             res.send(post);
//         }
//         else {
//             res.status(404).send('Not found');
//         }
    }
}

export const postController = new PostController();