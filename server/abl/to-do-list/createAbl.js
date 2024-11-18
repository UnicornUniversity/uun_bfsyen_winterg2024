const Ajv = require("ajv");
const ajv = new Ajv();

const toDoListDao = require("../../dao/to-do-list-dao.js");

const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    desc: { type: "string" },
    owner: { type: "string" },
  },
  required: ["name", "owner"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
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

    toDoList = toDoListDao.create({ ...toDoList, state: "active", memberList: [], itemList: [] });
    res.json(toDoList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;
