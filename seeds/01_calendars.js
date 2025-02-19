/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("calendar").del();
  await knex("calendar").insert([
    { name: "Electric Bill", due_date: "2025-02-15", category: "Utilities" },
    { name: "Rent Payment", due_date: "2025-02-28", category: "Housing" },
  ]);
}
