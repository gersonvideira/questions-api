import type { Knex } from "knex"

const config: { [key:string]:Knex.Config } = {
    development : {
        client: 'pg',
        connection:{
            host: 'localhost',
            user: 'postgres',
            password:'postgres',
            database:'mysecret',
        },
        migrations: {
            directory: './migrations'
        }
    },
    production: {
        client: 'pg',
        connection:{
            host: 'localhost',
            user: 'postgres',
            password:'postgres',
            database:'mysecret',

        },
        migrations: {
            directory: './migration'
        }
    }
}

export default config