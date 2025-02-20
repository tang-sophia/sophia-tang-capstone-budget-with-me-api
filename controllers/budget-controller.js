import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getBudget = async (req, res) => {
  try {
    const budgets = await knex("budget").select(
      "id",
      "category",
      "amount",
      "expense"
    );

    res.status(200).json(budgets);
  } catch (err) {
    console.error("Error getting budget items:", err);
    res.status(400).send("Error getting budget items.");
  }
};

const findBudget = async (req, res) => {
  try {
    const budgetFound = await knex("budget")
      .select("id", "category", "amount", "expense")
      .where({
        id: req.params.id,
      })
      .first();

    if (!budgetFound) {
      return res.status(404).json({
        message: `Budget with ID ${req.params.id} not found`,
      });
    }

    res.status(200).json(budgetFound);
  } catch (error) {
    console.error("Error retrieving budget by ID:", error);
    res.status(500).json({
      message: `Unable to retrieve budget data for budget with ID ${req.params.id}`,
    });
  }
};

const addBudget = async (req, res) => {
  const { category, amount, expense } = req.body;

  if (!category || !amount || !expense) {
    return res
      .status(400)
      .json("Error adding budget: Missing required properties");
  }

  try {
    const newBudgetId = await knex("budget").insert({
      category,
      amount,
      expense,
    });

    const newBudget = await knex("budget")
      .select("id", "category", "amount", "expense")
      .where({ id: newBudgetId[0] })
      .first();
    res.status(201).json(newBudget);
  } catch (error) {
    console.error("Error adding budget:", error);
    res.status(400).json({ message: `Error adding budget: ${error.message}` });
  }
};

const deleteBudget = async (req, res) => {
  const budgetId = req.params.id;

  try {
    const deleteBudgetEntry = await knex("budget")
      .where("id", budgetId)
      .delete();

    if (deleteBudgetEntry === 0) {
      return res.status(404).json({
        message: `budget with ID ${budgetId} not found`,
      });
    }

    return res.status(200).json({
      message: `budget with ID ${budgetId} successfully deleted`,
    });
  } catch (error) {
    console.error("Error deleting budget item:", error);
    return res.status(500).json({ message: "Error deleting budget item." });
  }
};

export { getBudget, findBudget, addBudget, deleteBudget };
