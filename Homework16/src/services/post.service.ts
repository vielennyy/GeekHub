import { Post, Pagination } from '../common/types-and-interfaces'

export class PostService {
    private db: Post[] = [];
    private idCounter: number = 1;

    async addPost(
        userId:number,
        theme:string, 
        text:string, 
        ): Promise<Post> {
            const post: Post = {
                id: this.idCounter,
                userId,
                theme,
                text,
            }
            this.db.push(post);
            
            this.idCounter++;
            console.log(`Our database = ${JSON.stringify(this.db)}`)
            console.log(`Post = ${JSON.stringify(post)}`)

            return post
    }

    async isCreated (id:number):Promise<boolean>{
        const post: Post|undefined = this.db.find((post) => post.id === id)
        if (post === undefined) return false;
        return true;
    }

    async deletePost(id:number): Promise<Post[]>{
        const filterredPosts = this.db.filter((post) => {
            post.id !== id
        })
        this.db = filterredPosts;
        return filterredPosts;
    }

    async getPosts(userId:number): Promise<Post[]>{
        const userPosts = this.db.filter((post) => post.userId === userId);
        return userPosts;
    }

    pagination (take:number, skip:number, array:Post[]):Pagination {
        const userPosts = array;

        const showCurrentPage = userPosts.slice(skip, skip+take);

        return {
            total: array.length,
            data: showCurrentPage,
        }  
    }

    async editPost(id: number, theme: string, text: string): Promise<Post | undefined> {
        const post = this.db.find((post) => post.id === id);
      
        if (!post) {
          return undefined;
        }
      
        if (theme !== null && theme !== undefined && theme !== post.theme) {
          post.theme = theme;
        }
        if (text !== null && text !== undefined && text !== post.text) {
          post.text = text;
        }
      
        return post;
      }

}

export const postService = new PostService();