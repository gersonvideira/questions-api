import DAO from "@domain/dao/dao";
import { Question } from "@domain/model";
import { KnexTypeAdapter, DatabaseTableNames } from "../knex-adapter";


export default class QuestionDAO implements DAO<Question.Model>{
  private readonly tableName: string = DatabaseTableNames.QUESTIONS
  constructor(private readonly connection: KnexTypeAdapter){}

  async create(data: Question.Model): Promise<Question.Model> {
    const [question] = await this.connection<Question.Model>(this.tableName)
    .insert(data).returning('*')

    return question
  }
  async findById(questionId: string): Promise<Question.Model | null> {
    const data = await this.connection<Question.Model>(this.tableName)
    .where({questionId}).first()

    if(!data) return null
    return data
  }
  async list(userId: string): Promise<Question.Model[]> {
    const data = await this.connection<Question.Model>(this.tableName)
    .where({userId}).select('*')
    return data
  }
  async delete(questionId: string): Promise<void> {
    await this.connection<Question.Model>(this.tableName)
    .where({questionId}).delete()
  }

}