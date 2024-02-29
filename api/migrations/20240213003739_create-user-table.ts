import { type Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users',(table) => {
        table.uuid('userId').primary().notNullable().unique();
        table.string('name').nullable();
        table.string('email').notNullable().unique();
        table.text('password').notNullable();
        table.string('pictureUrl',255).nullable()
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').nullable()

    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

