// import { Pagination } from '../common/types-and-interfaces'
import { Types } from 'mongoose';
import { PostModel, Post, User, UserModel } from '../models';
import { HttpError } from '../common/errors';


export class PostService {
    
    async addPost(
        userId: string,
        theme: string, 
        text: string, 
        ): Promise<Post> {
            const user: User | null = await UserModel.findById(userId);
            if(user){
                return PostModel.create({ userId: new Types.ObjectId(userId), theme, text });
            } else {
                throw new HttpError(404, "User with this id was not found");
            }
        }

        async getUserPosts(
            // login: string,
            // password:string, 
            // isAdmin:boolean = false,
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

    // async isCreated (id:number):Promise<boolean>{
    //     const post: Post|undefined = this.db.find((post) => post.id === id)
    //     if (post === undefined) return false;
    //     return true;
    // }

    // async deletePost(id:number): Promise<Post[]>{
    //     const filterredPosts = this.db.filter(post => post.id !== id)
    //     this.db = filterredPosts;
    //     // console.log(this.db)
    //     return filterredPosts;
    // }

    // async getPosts(userId:number): Promise<Post[]>{
    //     const userPosts = this.db.filter((post) => post.userId === userId);
    //     return userPosts;
    // }

    // pagination (take:number, skip:number, array:Post[]):Pagination {
    //     const userPosts = array;

    //     const showCurrentPage = userPosts.slice(skip, skip+take);

    //     return {
    //         total: array.length,
    //         data: showCurrentPage,
    //     }  
    // }

    // async editPost(id: number, theme: string, text: string): Promise<Post | undefined> {
    //     const post = this.db.find((post) => post.id === id);
      
    //     if (!post) {
    //       return undefined;
    //     }
      
    //     if (theme !== null && theme !== undefined && theme !== post.theme) {
    //       post.theme = theme;
    //     }
    //     if (text !== null && text !== undefined && text !== post.text) {
    //       post.text = text;
    //     }
      
    //     return post;
    //   }

// }

export const postService = new PostService();