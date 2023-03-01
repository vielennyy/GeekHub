import express, { NextFunction, Response, Request } from "express"
import { userService, postService } from "../services";
import { customError } from "../error";

export class UserController {
    router = express.Router();

    constructor() {
        this.router.post('/register', this.register);
        this.router.post('/login', this.login);
        this.router.post('/:userId', this.createPost);
        // this.router.delete('/:postId', this.deletePost);
        // this.router.get('/:userId/:page', this.getPosts);
        // this.router.patch('/:postId', this.editPost);
    }

    register = async (req:Request, res:Response, next:NextFunction) => {
        const {login, password} = req.body;

        let user = await userService.login(login, password);
        if (user === null){
            let user = await userService.addUser(login, password);
            console.log(`User ${login} registered`);
            res.send(user);
        } 
        else {
            console.log(`User ${login} is already registered`);
            const error = customError.errorHandler(409, "This user is already exist", res);
            // res.status(409).send(user);
        }
        // const user = await userService.addUser(login, password);
    }
    login = async (req:Request, res:Response, next:NextFunction) => {
        const {login, password} = req.body;
        let user = await userService.login(login, password);
        if (user === null) {
            const error = customError.errorHandler(404, "This user is not found", res);
        }
        else {
            res.send(user);
        }
    }

    createPost = async (req:Request, res:Response, next:NextFunction) => {
        // const userId = req.params.userId;
        // const {theme, text} = req.body;
        const post = await postService.addPost(req, res, theme, text);
        // // console.log(userId)
        // const isAuthorithed = await userService.isAuthorithed(userId)
        // console.log("isAythorithed"+isAuthorithed);
        // if (isAuthorithed) {
        //     const {theme, text} = req.body;

        //     const post = await postService.addPost(userId, theme, text);
        //     res.send(post);
        // }
        // else {
        //     console.log("User is not exist")
        //     res.status(401);
        //     res.send("User is not exist")
        // }
    }
    deletePost = async (req:Request, res:Response, next:NextFunction) => {
        // const postId = +req.params.postId;
        // const isCreated = await postService.isCreated(postId);
        // if(isCreated) {
        //     const posts = await postService.deletePost(postId);
        //     console.log(`Post ${postId} is deleted`)
        //     console.log(posts)
        //     // res.send(posts);
        // }
        // else {
        //     console.log(`Post ${postId} is not exist`);
        //     res.status(404);
        //     res.send(`Post ${postId} is not exist`)
        // }
    }
    editPost = async (req:Request, res:Response, next:NextFunction) => {
        // const postId = +req.params.postId;
        // const {theme, text} = req.body;

        // const isCreated = await postService.isCreated(postId);
        // if(isCreated){
        //     const post = await postService.editPost(postId, theme, text);
        //     res.send(post);
        // }
        // else {
        //     res.status(404).send('Not found');
        // }
    }

    getPosts = async (req:Request, res:Response, next:NextFunction) => {
        // const userId = +req.params.userId;
        // const page = +req.params.page;
        // const isAuthorithed = await userService.isAuthorithed(userId)

        // if(!isAuthorithed){
        //     return res.status(404).send('User not found');
        // }
        // const posts = await postService.getPosts(userId);

        // const postPerPage:number = 3;

        // const currentPosts = postService.pagination(postPerPage, postPerPage*(page-1), posts);

        // res.send(currentPosts);
        // console.log(currentPosts);
    }
}

export const userController = new UserController();