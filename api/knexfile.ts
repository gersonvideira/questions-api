import type { Knex } from "knex"

const config: { [key:string]:Knex.Config } = {
    development : {
        client: 'pg',
        connection:{
            host: process.env.DB_HOSTNAME,
            user: process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            // database:process.env.DB_NAME,
        },
        migrations: {
            directory: './migrations'
        }
    },
    production: {
        client: 'pg',
        connection:{
            host: process.env.DB_HOSTNAME,
            user: process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            // database:process.env.DB_NAME,
        },
        migrations: {
            directory: './migration'
        }
    }
}

export default config