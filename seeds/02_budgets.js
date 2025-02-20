/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("budget").del();
  await knex("budget").insert([
    { expense: "Fruits and vegetables", category: "Groceries", amount: 80.0 },
    { expense: "Movies", category: "Entertainment", amount: 70.0 },
    { expense: "Netflix", category: "Subscriptions", amount: 30.0 },
    { expense: "Gym Membership", category: "Subscriptions", amount: 75.0 },
    { expense: "Rent", category: "Housing", amount: 300.0 },
  ]);
}
