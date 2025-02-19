/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("budget").del();
  await knex("budget").insert([
    { category: "Groceries", amount: 500.0 },
    { category: "Entertainment", amount: 300.0 },
  ]);
}
