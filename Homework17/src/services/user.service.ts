import { ObjectId, PipelineStage, Types } from 'mongoose';
import { UserModel, PostModel, User, Post } from '../models';
import { HttpError } from '../common/errors';

export class UserService {

    async addUser(
        login:string, 
        password:string, 
        isAdmin:boolean = false
        ): Promise<User> {

            const user = await UserModel.findOne({login, password});
            if (user) {
                throw new HttpError(409, "This user is already exist");
            } else {
                console.log(`User ${login} registered`);
                return UserModel.create({ login, password, isAdmin });
            }
    }

    async login(
        login: string,
        password:string, 
        isAdmin:boolean = false,
    ): Promise<User> {

        const user: User | null = await UserModel.findOne({login, password});
        if(user){
            console.log("Log in. Success!")
            return user;
        } else {
            throw new HttpError(404, "Incorrect login or password");
        }
    }

}

export const userService = new UserService();