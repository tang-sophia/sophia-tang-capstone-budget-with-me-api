/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("budget").del();

  await knex("budget").insert([
    {
      expense: "Electricity Bill",
      category: "Utilities",
      amount: 98.0,
      month: "February",
    },
    {
      expense: "Gym Membership",
      category: "Subscriptions",
      amount: 45.0,
      month: "January",
    },
    {
      expense: "Groceries - Vegetables",
      category: "Groceries",
      amount: 30.0,
      month: "March",
    },
    {
      expense: "Gas",
      category: "Transportation",
      amount: 55.0,
      month: "May",
    },
    {
      expense: "Loan Repayment",
      category: "Loans",
      amount: 220.0,
      month: "November",
    },
    {
      expense: "Credit Card Payment",
      category: "Credit Card",
      amount: 140.0,
      month: "April",
    },
    {
      expense: "House Maintenance",
      category: "Maintenance & Repair",
      amount: 110.0,
      month: "October",
    },
    {
      expense: "Health Insurance",
      category: "Health",
      amount: 175.0,
      month: "September",
    },
    {
      expense: "Children's School Supplies",
      category: "Children",
      amount: 65.0,
      month: "August",
    },
    {
      expense: "Gifts",
      category: "Miscellaneous",
      amount: 40.0,
      month: "December",
    },
    {
      expense: "Water Bill",
      category: "Utilities",
      amount: 50.0,
      month: "July",
    },
    {
      expense: "Groceries - Meat",
      category: "Groceries",
      amount: 28.0,
      month: "February",
    },
    {
      expense: "Public Transport",
      category: "Transportation",
      amount: 60.0,
      month: "June",
    },
    {
      expense: "Loan Interest",
      category: "Loans",
      amount: 30.0,
      month: "March",
    },
    {
      expense: "Netflix Subscription",
      category: "Subscriptions",
      amount: 18.0,
      month: "January",
    },
    {
      expense: "Internet Bill",
      category: "Utilities",
      amount: 65.0,
      month: "January",
    },
    {
      expense: "Dining Out",
      category: "Entertainment",
      amount: 40.0,
      month: "January",
    },
    {
      expense: "Gasoline",
      category: "Transportation",
      amount: 50.0,
      month: "January",
    },
    {
      expense: "Book Purchase",
      category: "Education",
      amount: 20.0,
      month: "January",
    },
    {
      expense: "Pharmacy Expenses",
      category: "Health",
      amount: 30.0,
      month: "January",
    },
    {
      expense: "Streaming Service",
      category: "Subscriptions",
      amount: 12.0,
      month: "February",
    },
    {
      expense: "Car Maintenance",
      category: "Maintenance & Repair",
      amount: 90.0,
      month: "February",
    },
    {
      expense: "Coffee Shop",
      category: "Miscellaneous",
      amount: 15.0,
      month: "February",
    },
    {
      expense: "Parking Fee",
      category: "Transportation",
      amount: 25.0,
      month: "February",
    },
    {
      expense: "Home Supplies",
      category: "Household",
      amount: 35.0,
      month: "February",
    },
  ]);
}
