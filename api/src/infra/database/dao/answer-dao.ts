import DAO from "@domain/dao/dao";
import {Answer} from "@domain/model";
import {KnexTypeAdapter, DatabaseTableNames } from "../knex-adapter";


export default class AnswerDAO implements DAO<Answer.Model>{
    private readonly tableName: string = DatabaseTableNames.ANSWERS
    constructor(private readonly connection: KnexTypeAdapter){}

    async create(data: Answer.Model): Promise<Answer.Model> {
        const [answer] = await this.connection<Answer.Model>(this.tableName)
        .insert(data).returning('*')
        return answer
    }
    async findById(answerId: string): Promise<Answer.Model | null> {
        const data = await this.connection<Answer.Model>(this.tableName)
        .where({answerId}).first()

        if(!data) return null
        return data
    }

}