import knex, { Knex as knexType } from 'knex'
import { Answer, Question, User } from '@domain/model'}
import DatabaseConnection from './database-connection'


export default class KnexAdapter implements DatabaseConnection {
   private connection: knexType
    constructor(){
        this.connection = {} as knexType
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

        } catch (error) {

            throw new Error('Error connecting to database')

        }
    }
    disconnect(): Promise<void> {

    }

}
