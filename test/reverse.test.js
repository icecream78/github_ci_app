/* eslint-disable no-undef */
const chai = require('chai');
const strReverse = require('../reverse');

const { expect } = chai;

describe('Reverse String Test', () => {
  it('Checks if the strings is reversed', () => {
    const str1 = strReverse('Mocha is cool!!');
    const str2 = strReverse('Chai is super supportive.');

    expect(str1).to.equal('!!looc si ahcoM');
    expect(str2).to.equal('.evitroppus repus si iahC');
  });
});
