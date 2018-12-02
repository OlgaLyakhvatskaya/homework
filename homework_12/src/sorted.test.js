import { expect } from 'chai';
import sinon from 'sinon';
import { showMessage, getDay, getAdultUsers, getRandomUsers, Product } from './sorted';
import { days, users } from './constants';
import { describe } from 'mocha';

describe('showMessage', () => {

  it('should return message', () =>{
    const alert = sinon.stub(window, 'alert');
    const msg =  'test';

    showMessage(msg);
    expect(alert.calledWithExactly(msg));
  });

});

describe('getDay', () => {
  
  it('should return day of week', () => {
    const date = new Date;
    expect(getDay()).to.equal(days[date.getDay()]);
  });

  it('should return lenght days', () => {
    expect(days.length).to.equal(7);
  });

});

describe('getAdultUsers', () => {

  it('should return adult from users', () => {
    const result = getAdultUsers(users);

    expect(result).to.not.have.members(users.filter(user => user.age <= 18));
    expect(result).to.have.members(users.filter(user => user.age > 18));
  });

});

describe('getRandomUsers', () => {
   
  let randomMath;
  let roundMath; 
  const length = users.length;
  const middleUser = 6;
  
  beforeEach(() => {
    randomMath = sinon.stub(Math, 'random');
    roundMath = sinon.stub(Math, 'round');
  });

  afterEach(() => {
    randomMath.restore();
    roundMath.restore();
  });

  it('should return false', () => {
    expect(getRandomUsers()).to.be.false;
  });

  it('should return begin of Arrey', () => {
    roundMath.returns(middleUser);
    randomMath.returns(0.6);

    expect(getRandomUsers(users)).to.have.members(users.slice(0, middleUser));
  });

  it('should return end of Arrey', () => {
    roundMath.returns(middleUser);
    randomMath.returns(0.4);

    expect(getRandomUsers(users)).to.have.members(users.slice(middleUser, length));

  });

});

describe('Product', () => {

  let product;

  beforeEach(() => {
    product = new Product();
  });

  it('should return error', () => {
    expect(() => { product.setPrice() }).to.throw();
  });

  it('should return value', () => {
    const value = 11;
    product.setPrice(value);
    expect(product.value).to.equal(value);
  });

});


