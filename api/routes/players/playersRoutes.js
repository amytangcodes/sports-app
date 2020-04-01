"use strict";

const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send({
    data: players
  });
});

router.route("/add").post((req, res) => {
  // 1. grab new player info from req body
  const { player, team, position } = req.body;

  // 2. push player to our player array
  players.push({
    player: player,
    team: team,
    position: position
  });

  // 3. respond with updated players array
  res.status(200).send({
    data: players
  });
});
