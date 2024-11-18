const Ajv = require("ajv");
const ajv = new Ajv();

const toDoListDao = require("../../dao/to-do-list-dao.js");

const schema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    desc: { type: "string" },
    state: { type: "string" },
    memberList: { type: "array" },
    itemList: { type: "array" },
  },
  required: ["id"],
  additionalProperties: false,
};

async function UpdateAbl(req, res) {
  try {
    let toDoList = req.body;

    // validate input
    const valid = ajv.validate(schema, toDoList);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    const updatedToDoList = toDoListDao.update(toDoList);
    if (!updatedToDoList) {
      res.status(404).json({
        code: "toDoListNotFound",
        message: `ToDoList ${toDoList.id} not found`,
      });
      return;
    }

    res.json(updatedToDoList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = UpdateAbl;
