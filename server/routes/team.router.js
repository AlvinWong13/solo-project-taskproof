const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/team', (req, res) => {
  const teamQuery = `SELECT * FROM "team" ORDER BY "id";`;
  pool
    .query(teamQuery)
    .then((result) => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error getting teams', error);
      res.sendStatus(500)
    })
});

router.post('/team', (req, res) => {
  const teamName = req.body.name;

  const queryText = `INSERT INTO "team" (name)
    VALUE ($1) RETURNING id`;
  pool
    .query(queryText, [teamName])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Team registration failed: ', err);
      res.sendStatus(500);
    });
});