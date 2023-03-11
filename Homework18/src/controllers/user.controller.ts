import express, { NextFunction, Response, Request } from "express"
import { BaseController } from "../common/abstract/base.controller";
import { userService, postService } from "../services";
import { registerBodySchema } from "../common/validation.shemmas";

export class UserController extends BaseController {

    constructor() {
        super();
        this.bindRoutes([
            {
                path: "/register",
                method: "post",
                handler: this.register,
                validators: {
                    body: registerBodySchema,
                }
            },
            {
                path: "/login",
                method: "post",
                handler: this.login,

            },
            {
                path: "/:userId/posts",
                method: "post",
                handler: this.createPost,

            },
            {
                path: "/:userId/posts",
                method: "get",
                handler: this.getPosts,
            },
        ])
    }

    register = async (req:Request, res:Response, next:NextFunction) => {
            
            const {login, password} = req.body;
            const user = await userService.addUser(req.body);
            res.send(user);

    }

    login = async (req:Request, res:Response, next:NextFunction) => {

            const user = await userService.login(req.body);
            res.send(user);
        
    }

    createPost = async (req:Request, res:Response, next:NextFunction) => {

            const post = await postService.addPost(req.body);
            res.send(post);
        
    }
    
    getPosts = async(req:Request, res:Response, next:NextFunction) => {

            const userId = req.params.userId;
            const { take, skip } = req.query;
            console.log(take, skip);
            const userPosts = await postService.getUserPosts(userId);
            res.send(userPosts);
        
    }

}

export const userController = new UserController();