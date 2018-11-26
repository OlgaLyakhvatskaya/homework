import { expect } from 'chai';
import sinon from 'sinon';
import Person, {getUsers} from './Person';

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person();
  });

  it('should create instance with name', () => {
    const name = 'Tom';
    const person = new Person(name);

    expect(person.name).to.equal(name);
  });

  it('should create instance with default name', () => {
    expect(person.name).to.equal('Jhon');
  });

  it('should create date', () => {
    expect(person.creation).to.be.instanceOf(Date);
  });

  it('should get name', () => {
    expect(person.getName()).to.equal(person.name);
  });

  it('should set name', () => {
    const test = 'test';
    person.setName(test)
    expect(person.name).to.equal(test);
  });
   
  it('should return appropriate text on getCreation()', () => {
    const tests = [
      {hour: 23, text: 'night child'}, {hour: 7, text: 'morning child'}, 
      {hour: 12, text: 'day child'}, {hour: 20, text: 'evening child'}
    ];
    tests.forEach(({hour, text}) => {
      person.creation.setHours(hour);
      expect(person.getCreation()).to.equal(text);
    });
   }); 
})

describe('getUsers', () => {
  it('should call fetch() method', (done) => {
    const stub = sinon.stub(window, 'fetch');
    const stubLog = sinon.stub(console, 'log');

    stub.returns(Promise.resolve({ 
      json() {return 'test';} 
    }));

    getUsers()
      .then(() => {
        expect(stubLog.called).to.be.true;
        done();
      });
 
    expect(stub.called).to.be.true;
  }); 
})
