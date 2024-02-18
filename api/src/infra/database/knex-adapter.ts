import knex, { Knex as knexType } from 'knex'
import { Answer, Question, User } from '@domain/model'}
import DatabaseConnection from './database-connection'


interface DatabaseTables {
    user: User.Model
    answer: Answer.Model
    question: Question.Model
}

export enum DatabaseTableNames {
    USERS = 'users',
    ANSWERS = 'answers',
    QUESTIONS = 'questions',
}

type KnexTypeAdapter = knexType<DatabaseTables>



export default class KnexAdapter implements DatabaseConnection {
    private connection: KnexTypeAdapter
    constructor(){
        this.connection = {} as KnexTypeAdapter
    }

    connect(): Promise<void> {
        try {
            this.connection = knex({
                client: 'pg',
                connection: {
                    host: process.env.DB_HOSTNAME,
                    user: process.env.DB_USERNAME,
                    password:process.env.DB_PASSWORD,
                    database:process.env.DB_NAME,
                    port: 5432
                }
            })
            return Promise.resolve()

        } catch (error) {
            throw new Error('Error connecting to database')
        }
    }
    disconnect(): Promise<void> {
        return this.connection.destroy()
    }
    get instance(): KnexTypeAdapter {
        return this.connection
    }

}
