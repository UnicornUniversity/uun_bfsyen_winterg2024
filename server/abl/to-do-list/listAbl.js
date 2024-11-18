const toDoListDao = require("../../dao/to-do-list-dao.js");

async function ListAbl(req, res) {
  try {
    const toDoListList = toDoListDao.list();

    res.json(toDoListList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
