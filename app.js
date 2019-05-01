/* eslint-disable no-console */
const express = require('express');

const app = express();
const topicRoutes = require('./routes/topic').route;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/test', (req, res) => {
  res.send('Welcome to Reddit API!');
});

app.use('/', topicRoutes);

app.listen(8000);

module.exports = app;
