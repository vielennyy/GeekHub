import { User, Post } from '../common/types-and-interfaces'

export class UserService {
    private db: User[] = [];
    private idCounter: number = 1;

    async addUser(
        login:string, 
        password:string, 
        isAdmin:boolean = false
        ): Promise<User> {
            const user: User = {
                id: this.idCounter,
                login,
                password,
                isAdmin,
            }
            this.db.push(user);
            this.idCounter++;
            console.log(`Our database = ${JSON.stringify(this.db)}`)
            return user
    }

    async isAuthorithed(
        id:number, 
        ): Promise<boolean>  {
            const user: User|undefined = this.db.find((user) => user.id === id)
            if (user === undefined) return false;
            return true;
    }

    async findUser(
        login:string, 
        password:string, 
        ): Promise<User | undefined>  {
            const user: User|undefined = this.db.find((user) => user.login === login && user.password === password)
            console.log(`Our database = ${JSON.stringify(this.db)}`)
            console.log(`Our user: ${JSON.stringify(user)}`)
            return user
    }
}

export const userService = new UserService();