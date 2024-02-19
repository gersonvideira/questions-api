import DAO from "@domain/dao/dao";
import { User } from "@domain/model";
import { KnexTypeAdapter, DatabaseTableNames } from "../knex-adapter";


export default class UserDAO implements DAO<User.Model>{
    private readonly tableName: string = DatabaseTableNames.USERS

    constructor(private readonly connection: KnexTypeAdapter){}

    async create(data: User.Model): Promise<User.Model> {
        const [user] = await this.connection<User.Model>(this.tableName)
        .insert(data).returning('*')
        return user
    }
    async findById(userId: string): Promise<User.Model | null> {
        const data =  await this.connection<User.Model>(this.tableName)
        .where({userId}).first()

        if(!data) return null
        return data
    }
}