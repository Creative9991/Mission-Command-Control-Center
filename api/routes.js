const express = require('express');
const mongo = require('../db/mongo');

var router = express.Router();

console.log("Mongo");
router.get('/agencies', mongo.getAgencies);
router.get('/agencies/:id', mongo.getAgenciesId);

module.exports = router;
