import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('answers',(table) => {
    table.string('answer').nullable().alter().
})
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('answers', (table) => {
    table.dropColumn('answer')
})
}

