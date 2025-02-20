import express from "express";
import cors from "cors";
import "dotenv/config";
import calendarRoute from "./routes/calendar-routes.js";
import budgetRoute from "./routes/budget-routes.js";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => res.send("Hello, world!"));
app.use("/api/calendar", calendarRoute);
app.use("/api/budget", budgetRoute);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
