import { ObjectId, PipelineStage, Types } from 'mongoose';
import { UserModel, PostModel, User, Post } from '../models';
import { HttpError } from '../common/errors';

export class UserService {

    async addUser(
        params: object,
        ): Promise<User> {

            const user = await UserModel.findOne(params);

            if (user) {
                throw new HttpError(409, "This user is already exist");
            } else {
                console.log(`User registered`);
                return UserModel.create(params);
            }
    }

    async login(
        params: object,
    ): Promise<User> {

        const user: User | null = await UserModel.findOne(params);
        if(user){
            console.log("Log in. Success!")
            return user;
        } else {
            throw new HttpError(404, "Incorrect login or password");
        }
    }

}

export const userService = new UserService();