import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('answers',(table) => {
        table.uuid('answersId').primary().notNullable().unique();
        table.string('answers').notNullable();
        table.uuid('userId').notNullable().references('userId').inTable('users')
        table.uuid('questionId').notNullable().references('questionId').inTable('questions')
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').nullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('answers')
}



