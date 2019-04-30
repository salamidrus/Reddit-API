/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
const data = [ // Sample topic
  {
    name: 'Topic Sample',
    upVote: 0,
    downVote: 0,
  },
];

const topicName = 'How to Smoke'; // to create the topic name
console.log('Topic Characters = ', topicName.length);

const topic = {
  name: topicName,
  upVote: 0,
  downVote: 0,
};


// create topics
const create = () => {
  const isLength = (topicName.length <= 255); // max length for topic name is 255 characters
  const alert = 'Maximum characters for creating topic is 255 characters';
  if (isLength) {
    return data.push(topic);
  }
  return alert;
};
console.log('Create Topics at index ', create());


// upVote certain topics
const upVote = () => {
  const i = 0; // change i to upvote certain topic by key index
  return data[i].upVote += 1;
};

console.log('Up vote topics', upVote());

// downVote  certain topics
const downVote = () => {
  const i = 0; // change i to upvote certain topic by key index
  return data[i].downVote += 1;
};

console.log('Down vote topics', downVote());

// get all topics sorting descending by upVote
const show = () => data.sort((a, b) => b.upVote - a.upVote);

console.log('Show All Topics', show());
