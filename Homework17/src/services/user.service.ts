import { UserModel, User } from '../models';

export class UserService {
    async addUser(
        login:string, 
        password:string, 
        isAdmin:boolean = false
        ): Promise<User> {
            return UserModel.create({ login, password, isAdmin });
    }

    async login(
        login: string,
        password:string, 
        isAdmin:boolean = false,
        // id: string,
    ): Promise<User[] | null> {
        const user: User[] = await UserModel.find({login});
        if(user.length === 0){
            return null;
        }
        return user;
    }

    // async isAuthorithed(
    //     id:number, 
    //     ): Promise<boolean>  {
    //         const user: User|undefined = this.db.find((user) => user.id === id)
    //         if (user === undefined) return false;
    //         return true;
    // }

    // async findUser(
    //     login:string, 
    //     password:string, 
    //     ): Promise<User | undefined>  {
    //         const user: User|undefined = this.db.find((user) => user.login === login && user.password === password)
    //         console.log(`Our database = ${JSON.stringify(this.db)}`)
    //         console.log(`Our user: ${JSON.stringify(user)}`)
    //         return user
    // }
}

export const userService = new UserService();