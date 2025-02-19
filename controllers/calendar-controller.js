import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getCalendar = async (_req, res) => {
  try {
    const calendars = await knex("calendar").select(
      "id",
      "name",
      "due_date",
      "category"
    );
    res.status(200).json(calendars);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error getting calendar items.");
  }
};

const findCalendar = async (req, res) => {
  try {
    const calendarFound = await knex("calendar")
      .select("id", "name", "due_date", "category")
      .where({
        id: req.params.id,
      })
      .first();

    if (!calendarFound) {
      return res.status(404).json({
        message: `Calendar with ID ${req.params.id} not found`,
      });
    }

    res.status(200).json(calendarFound);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Unable to retrieve calendar data for calendar with ID ${req.params.id}`,
    });
  }
};

const addCalendar = async (req, res) => {
  const { name, due_date, category } = req.body;

  if (!name || !due_date || !category) {
    return res
      .status(400)
      .json("Error adding calendar: Missing required properties");
  }

  try {
    const newCalendarId = await knex("calendar").insert({
      name,
      due_date,
      category,
    });

    const newCalendar = await knex("calendar")
      .select("id", "name", "due_date", "category")
      .where({
        id: newCalendarId[0],
      })
      .first();

    res.status(201).json(newCalendar);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: `Error adding calendar: ${error.message}` });
  }
};

const deleteCalendar = async (req, res) => {
  const calendarId = req.params.id;
  try {
    const deleteCalendarEntry = await knex("calendar")
      .where("id", calendarId)
      .delete();

    if (deleteCalendarEntry === 0) {
      return res.status(404).json({
        message: `Calendar with ID ${calendarId} not found`,
      });
    }
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).send();
  }
};

export { getCalendar, findCalendar, addCalendar, deleteCalendar };
