import Knex from "knex";

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.table("budget", (table) => {
    table.string("month").nullable();
  });
}

export async function down(knex) {
  await knex.schema.table("budget", (table) => {
    table.dropColumn("month");
  });
}
