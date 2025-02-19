/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("calendar").del();
  await knex("calendar").insert([
    { name: "Electric Bill", due_date: "2025-02-15", category: "Utilities" },
    { name: "Water Bill", due_date: "2025-02-14", category: "Utilities" },

    { name: "Rent Payment", due_date: "2025-02-25", category: "Housing" },

    { name: "Netflix", due_date: "2025-02-03", category: "Subscriptions" },
    {
      name: "Gym Membership",
      due_date: "2025-02-01",
      category: "Subscriptions",
    },
    { name: "Amazon Prime", due_date: "2025-02-06", category: "Subscriptions" },
    { name: "Hello Fresh", due_date: "2025-02-27", category: "Subscriptions" },
  ]);
}
