/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
const route = require('express').Router();
const topicControllers = require('../controllers/topic');

route.post('/create', topicControllers.create);

route.put('/upvote/:i', topicControllers.upVote);

route.put('/downvote/:i', topicControllers.downVote);

route.get('/show', topicControllers.show);


module.exports = { route };
