/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("budget").del();
  await knex("budget").insert([
    { expense: "Electricity Bill", category: "Utilities", amount: 120.0 },
    {
      expense: "Groceries - Vegetables",
      category: "Groceries",
      amount: 25.0,
    },
    {
      expense: "Netflix Subscription",
      category: "Subscriptions",
      amount: 15.0,
    },
    {
      expense: "Gas",
      category: "Transportation",
      amount: 40.0,
    },
    { expense: "Loan Repayment", category: "Loans", amount: 200.0 },
    {
      expense: "Credit Card Payment",
      category: "Credit Card",
      amount: 150.0,
    },
    {
      expense: "House Maintenance",
      category: "Maintenance & Repair",
      amount: 100.0,
    },
    { expense: "Health Insurance", category: "Health", amount: 180.0 },
    {
      expense: "Children's School Supplies",
      category: "Children",
      amount: 60.0,
    },
    {
      expense: "Gifts",
      category: "Miscellaneous",
      amount: 30.0,
    },
    { expense: "Water Bill", category: "Utilities", amount: 45.0 },
    { expense: "Meat", category: "Groceries", amount: 35.0 },
    { expense: "Public Transport", category: "Transportation", amount: 50.0 },
    { expense: "Loan Interest", category: "Loans", amount: 25.0 },
    {
      expense: "Gym Membership",
      category: "Subscriptions",
      amount: 50.0,
    },
    ,
  ]);
}
