const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/to-do-list/getAbl");
const ListAbl = require("../abl/to-do-list/listAbl");
const CreateAbl = require("../abl/to-do-list/createAbl");
const UpdateAbl = require("../abl/to-do-list/updateAbl");
const DeleteAbl = require("../abl/to-do-list/deleteAbl");

router.post("/create", (req, res) => {
  CreateAbl(req, res);
});

router.get("/get", (req, res) => {
  GetAbl(req, res);
});

router.post("/update", (req, res) => {
  UpdateAbl(req, res);
});

router.post("/delete", (req, res) => {
  DeleteAbl(req, res);
});

router.get("/list", (req, res) => {
  ListAbl(req, res);
});

module.exports = router;
