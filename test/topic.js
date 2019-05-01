/* eslint-disable no-unused-expressions */

const chai = require('chai');

const { expect } = chai;
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const chaiLike = require('chai-like');
const chaiThings = require('chai-things');
const app = require('../app');


chai.use(chaiHttp);
chai.use(chaiLike);
chai.use(chaiThings);

const i = 0; // for index Upvote and Downvote


mocha.describe('Http Topic Routes', () => {
  mocha.it('Create function Success', (done) => {
    chai.request(app)
      .post('/create')
      .send({
        name: 'how to create unit test',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ name: 'Topic Sample' });
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ upVote: 0 });
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ downVote: 0 });
        done();
      });
  });
  mocha.it('Create Function Failure : Topic name exceeds 255 Characters', (done) => {
    chai.request(app)
      .post('/create')
      .send({
        name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,.',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.have.property('alert').that.equal('Maximum characters for creating topic is 255 characters');
        done();
      });
  });
  mocha.it('Show list of topics', (done) => {
    chai.request(app)
      .get('/show')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ name: 'Topic Sample' });
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ upVote: 0 });
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ downVote: 0 });
        done();
      });
  });
  mocha.it('Upvote Topic', (done) => {
    chai.request(app)
      .put(`/upvote/${i}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ name: 'Topic Sample' });
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ upVote: 1 });
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ downVote: 0 });
        done();
      });
  });
  mocha.it('Downvote Topic', (done) => {
    chai.request(app)
      .put(`/downvote/${i}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ name: 'Topic Sample' });
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ upVote: 1 });
        expect(res.body).to.have.property('data').to.be.an('array').that.contains.something.like({ downVote: 1 });
        done();
      });
  });
});
