/* eslint-disable import/no-unresolved */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-undef */
import * as topic from '../app/topic';
const { expect } = require('chai');


describe('Topic Functions', () => {
  it('Should create a topic', () => {
    expect(topic.data).to.be.a('string');
  });
});
