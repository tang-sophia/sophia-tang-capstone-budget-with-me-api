/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("calendar").del();
  await knex("calendar").insert([
    { name: "Electric Bill", due_date: "2025-02-15", category: "Utilities" },
    { name: "Water Bill", due_date: "2025-02-14", category: "Utilities" },
    { name: "Gas Bill", due_date: "2025-02-18", category: "Utilities" },

    { name: "Rent Payment", due_date: "2025-02-25", category: "Housing" },

    { name: "Netflix", due_date: "2025-02-03", category: "Subscriptions" },
    {
      name: "Gym Membership",
      due_date: "2025-02-01",
      category: "Subscriptions",
    },
    { name: "Amazon Prime", due_date: "2025-02-06", category: "Subscriptions" },
    { name: "Hello Fresh", due_date: "2025-02-27", category: "Subscriptions" },

    { name: "Credit Card Payment", due_date: "2025-02-12", category: "Debt" },
    { name: "Car Insurance", due_date: "2025-02-20", category: "Insurance" },
    { name: "Health Insurance", due_date: "2025-02-22", category: "Insurance" },
    { name: "Student Loan", due_date: "2025-02-28", category: "Debt" },
    { name: "Electric Bill", due_date: "2025-01-13", category: "Utilities" },
    { name: "Water Bill", due_date: "2025-01-09", category: "Utilities" },
    { name: "Gas Bill", due_date: "2025-01-17", category: "Utilities" },

    { name: "Rent Payment", due_date: "2025-01-25", category: "Housing" },

    { name: "Netflix", due_date: "2025-01-06", category: "Subscriptions" },
    {
      name: "Gym Membership",
      due_date: "2025-01-03",
      category: "Subscriptions",
    },
    { name: "Amazon Prime", due_date: "2025-01-10", category: "Subscriptions" },
    { name: "Hello Fresh", due_date: "2025-01-28", category: "Subscriptions" },

    { name: "Furniture", due_date: "2025-04-15", category: "Household" },
    {
      name: "Cleaning Supplies",
      due_date: "2025-02-01",
      category: "Household",
    },
    { name: "Lawn Care", due_date: "2025-06-10", category: "Household" },

    { name: "Internet Bill", due_date: "2025-02-10", category: "Utilities" },

    { name: "Spotify", due_date: "2025-02-01", category: "Subscriptions" },
    { name: "Disney+", due_date: "2025-02-05", category: "Subscriptions" },

    { name: "Groceries", due_date: "2025-02-01", category: "Groceries" },
    { name: "Paper Goods", due_date: "2025-02-01", category: "Groceries" },

    { name: "Gas", due_date: "2025-02-10", category: "Transportation" },
    {
      name: "Public Transit",
      due_date: "2025-02-05",
      category: "Transportation",
    },
    {
      name: "Car Maintenance",
      due_date: "2025-04-20",
      category: "Transportation",
    },

    { name: "Student Loan", due_date: "2025-02-01", category: "Loans" },
    { name: "Personal Loan", due_date: "2025-02-05", category: "Loans" },

    {
      name: "Credit Card Payment",
      due_date: "2025-02-12",
      category: "Credit Card",
    },

    {
      name: "Appliance Repair",
      due_date: "2025-04-15",
      category: "Maintenance & Repair",
    },
    {
      name: "Plumbing Issues",
      due_date: "2025-05-10",
      category: "Maintenance & Repair",
    },

    { name: "Health Insurance", due_date: "2025-02-01", category: "Health" },
    { name: "Doctor Visits", due_date: "2025-03-15", category: "Health" },
    {
      name: "Prescription Medications",
      due_date: "2025-02-05",
      category: "Health",
    },

    { name: "Child Care", due_date: "2025-02-01", category: "Children" },
    { name: "School Supplies", due_date: "2025-09-01", category: "Children" },
    { name: "Clothing", due_date: "2025-03-10", category: "Children" },

    { name: "Gifts", due_date: "2025-12-20", category: "Miscellaneous" },
    {
      name: "Entertainment",
      due_date: "2025-02-10",
      category: "Miscellaneous",
    },
    { name: "Donations", due_date: "2025-02-05", category: "Miscellaneous" },
  ]);
}
