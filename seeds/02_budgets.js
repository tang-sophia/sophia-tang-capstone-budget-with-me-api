/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("budget").del();

  await knex("budget").insert([
    {
      expense: "Electricity Bill",
      category: "Utilities",
      amount: 120.0,
      month: "February",
    },
    {
      expense: "Groceries - Vegetables",
      category: "Groceries",
      amount: 25.0,
      month: "March",
    },
    {
      expense: "Netflix Subscription",
      category: "Subscriptions",
      amount: 15.0,
      month: "January",
    },
    { expense: "Gas", category: "Transportation", amount: 40.0, month: "May" },
    {
      expense: "Loan Repayment",
      category: "Loans",
      amount: 200.0,
      month: "November",
    },
    {
      expense: "Credit Card Payment",
      category: "Credit Card",
      amount: 150.0,
      month: "April",
    },
    {
      expense: "House Maintenance",
      category: "Maintenance & Repair",
      amount: 100.0,
      month: "October",
    },
    {
      expense: "Health Insurance",
      category: "Health",
      amount: 180.0,
      month: "September",
    },
    {
      expense: "Children's School Supplies",
      category: "Children",
      amount: 60.0,
      month: "August",
    },
    {
      expense: "Gifts",
      category: "Miscellaneous",
      amount: 30.0,
      month: "December",
    },
    {
      expense: "Water Bill",
      category: "Utilities",
      amount: 45.0,
      month: "July",
    },
    { expense: "Meat", category: "Groceries", amount: 35.0, month: "February" },
    {
      expense: "Public Transport",
      category: "Transportation",
      amount: 50.0,
      month: "June",
    },
    {
      expense: "Loan Interest",
      category: "Loans",
      amount: 25.0,
      month: "March",
    },
    {
      expense: "Gym Membership",
      category: "Subscriptions",
      amount: 50.0,
      month: "January",
    },
  ]);
}
