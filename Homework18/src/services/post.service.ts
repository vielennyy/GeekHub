// import { Pagination } from '../common/types-and-interfaces'
import { Types } from 'mongoose';
import { PostModel, Post, User, UserModel } from '../models';
import { HttpError } from '../common/errors';


export class PostService {
    
    async addPost(
        params: object,
        ): Promise<Post> {
            const user: User | null = await UserModel.findOne(params);
            if(user){
                return PostModel.create(params);
            } else {
                throw new HttpError(404, "User with this id was not found");
            }
        }

        async getUserPosts(
            id: string,
        ): Promise<Post[]> {
            const user: User | null = await UserModel.findById(id); 
            const posts: Post[] | null = await PostModel.find({ userId: new Types.ObjectId(id) });
            if (posts) {
                return posts;
            } else if (user) {
                throw new HttpError(200, "User has no posts");
            } else {
                throw new HttpError(404, "User with this id was not found");
            }
        }

    async deletePost(
        postId: string,
    ): Promise<void | null> {
        const post: Post | null = await PostModel.findById(postId);
        if (post){
            await PostModel.findByIdAndDelete(postId)
        }
        else {
            throw new HttpError(404, "Post is not found");
        }
    }

    async editPost(postId: string, theme: string, text: string): Promise<Post | null> {
        const post: Post | null = await PostModel.findById(postId);
        if (post){
            const updatedPost: Post | null= await PostModel.findByIdAndUpdate(postId,
                { theme, text },
                { new: true } // returns the updated document
            );
            return updatedPost;
        }
        else {
            throw new HttpError(404, "Post is not found");
        } 
    }
}

export const postService = new PostService();