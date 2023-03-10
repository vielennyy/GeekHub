import express, { NextFunction, Response, Request } from "express"
import { userService, postService } from "../services";

export class UserController {
    router = express.Router();

    constructor() {
        this.router.post('/register', this.register);
        this.router.post('/login', this.login);
        this.router.post('/:userId/posts', this.createPost);
        this.router.get('/:userId/posts', this.getPosts);
    }

    register = async (req:Request, res:Response, next:NextFunction) => {

        try {
            const {login, password} = req.body;
            const user = await userService.addUser(login, password);
            res.send(user);
        } catch (e: any) {
            console.log("error throwed", e.message)
            next(e);
        }

    }

    login = async (req:Request, res:Response, next:NextFunction) => {

        try {
            const {login, password} = req.body;
            const user = await userService.login(login, password);
            res.send(user);
        } catch (e: any) {
            console.log("error throwed", e.message)
            next(e);
        }
        
    }

    createPost = async (req:Request, res:Response, next:NextFunction) => {

        try {
            const userId = req.params.userId;
            const {theme, text} = req.body;
            const post = await postService.addPost(userId, theme, text);
            res.send(post);
        } catch (e: any) {
            console.log("error throwed", e.message)
            next(e);
        }
        
    }
    
    getPosts = async(req:Request, res:Response, next:NextFunction) => {

        try {
            const userId = req.params.userId;
            const { take, skip } = req.query;
            console.log(take, skip);
            const userPosts = await postService.getUserPosts(userId);
            res.send(userPosts);
        } catch (e: any) {
            console.log("error throwed", e.message)
            next(e);
        }
        
    }

}

export const userController = new UserController();