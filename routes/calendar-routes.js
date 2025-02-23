import express from "express";
const router = express.Router();
import * as calendarController from "../controllers/calendar-controller.js";

router
  .route("/")
  .get(calendarController.getCalendar)
  .post(calendarController.addCalendar);

router.route("/:id").delete(calendarController.deleteCalendar);

export default router;
