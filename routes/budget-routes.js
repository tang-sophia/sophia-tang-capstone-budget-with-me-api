import express from "express";
const router = express.Router();
import * as budgetController from "../controllers/budget-controller.js";

router
  .route("/")
  .get(budgetController.getBudget)
  .post(budgetController.addBudget);

router.route("/:id").delete(budgetController.deleteBudget);

export default router;
