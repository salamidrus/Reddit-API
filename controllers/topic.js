/* eslint-disable no-console */
// const Topic = require('../models/topic').topic;

const data = [{
  name: 'Topic Sample',
  upVote: 0,
  downVote: 0,
}]; // Sample topic

exports.create = (req, res) => {
  const Topic = {};
  Topic.upVote = 0;
  Topic.downVote = 0;
  Topic.name = req.body.name;
  const isLength = (Topic.name.length <= 255); // max length for topic name is 255 characters
  const alert = 'Maximum characters for creating topic is 255 characters';
  if (!isLength) {
    return res.json({
      alert,
    });
  }
  data.push(Topic);

  return res.json({
    data,
  });
};

exports.upVote = (req, res) => {
  // upVote certain topics
  const index = req.params.i;
  data[index].upVote += 1;
  res.json({
    data,
  });
};

exports.downVote = (req, res) => {
  // downVote  certain topics
  const index = req.params.i;
  data[index].downVote += 1;
  res.json({
    data,
  });
};

exports.show = (req, res) => {
  // get all topics sorting descending by upVote

  data.sort((a, b) => (b.upVote - a.upVote)); // Sort by Upvote Descending

  res.json({
    data: data.slice(0, 20), // Limit showed data to 20 data;
  });
};
