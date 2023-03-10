import express, { NextFunction, Response, Request } from "express"
import { BaseController } from "../common/abstract/base.controller";
import { userService, postService } from "../services";
import Joi from "joi";

const registerBodySchema = Joi.object({
        login: Joi.string().min(3).max(254).required(),
        password: Joi.string().min(3).max(254).required(),
    });


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
                    query: registerBodySchema,
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

    
    // const result = registerBodySchema.validate(
    //     {login: "Sasha", text1: 1},
    //     {abortEarly: false, allowUnknown: true, stripUnknown: true});
    // this.logger.error(result);

    register = async (req:Request, res:Response, next:NextFunction) => {
            
            const {login, password} = req.body;
            const user = await userService.addUser(login, password);
            res.send(user);

    }

    login = async (req:Request, res:Response, next:NextFunction) => {

            const {login, password} = req.body;
            const user = await userService.login(login, password);
            res.send(user);
        
    }

    createPost = async (req:Request, res:Response, next:NextFunction) => {

            const userId = req.params.userId;
            const {theme, text} = req.body;
            const post = await postService.addPost(userId, theme, text);
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