// import { Pagination } from '../common/types-and-interfaces'
import { ObjectId } from 'mongoose';
import { PostModel, Post, User, UserModel } from '../models';


export class PostService {
    
    async addPost(
        userId: string,
        theme: string, 
        text: string, 
        ): Promise<Post | null> {
            const user: User | null = await UserModel.findById(userId);
            if(user === null){
                return user;
            }
            else {
                return PostModel.create({ userId, theme, text });
            }
        }

    async deletePost(
        postId: string,
    ): Promise<void | null> {
        const post: Post | null = await PostModel.findById(postId);
        if (post === null){
            return post;
        }
        else {
            await PostModel.findByIdAndDelete(postId)
        }
    }

    async editPost(postId: string, theme: string, text: string): Promise<Post | null> {
    const post: Post | null = await PostModel.findById(postId);
    if (post === null){
        return post;
    }
    else {
        const updatedPost: Post | null = await PostModel.findByIdAndUpdate(postId,
            { theme, text },
            { new: true } // returns the updated document
        );
        return updatedPost;
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