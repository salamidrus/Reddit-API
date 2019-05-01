/* eslint-disable no-console */
const Topic = require('../models/topic').topic;

const data = [{
  name: 'Topic Sample',
  upVote: 0,
  downVote: 0,
}]; // Sample topic

exports.create = (req, res) => {
  const create = () => {
    Topic.name = req.body.name;
    const isLength = (Topic.name.length <= 255); // max length for topic name is 255 characters
    const alert = 'Maximum characters for creating topic is 255 characters';
    if (isLength) {
      data.concat([Topic]);
      return data; // req.data = data, next()
    }
    return alert;
  };

  res.json({
    create: create(),
  });
};

exports.upVote = (req, res) => {
  // upVote certain topics
  const upVote = (i) => {
    data[i].upVote += 1;
    return data;
  };
  res.json({
    upvote: upVote(req.params.i),
  });
};

exports.downVote = (req, res) => {
  // downVote  certain topics
  const downVote = (i) => {
    data[i].downVote += 1;
    return data;
  };
  res.json({
    downvote: downVote(req.params.i),
  });
};

exports.show = (req, res) => {
  // get all topics sorting descending by upVote
  const show = () => data.sort((a, b) => b.upVote - a.upVote); // Sort by Upvote Descending
  res.json({
    show: show(),
  });
};
