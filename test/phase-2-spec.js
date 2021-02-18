const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const {
  mirrorArray,
  hiddenCounter,
  myMap,
  avgValue,
} = require("../problems/phase-2");

//1. mirrorArray
describe("mirrorArray()", function () {
  it("should return a single array where the first half is the orginal array and the second half is a mirror of the first half", function () {
    //Arrange
    const array = [1, 2, 3];
    //Act
    const result = mirrorArray(array);
    //Assert
    expect(result).to.eql([1, 2, 3, 3, 2, 1]);
  });
});

//2. hiddenCounter
describe("hiddenCounter()", function () {
  it("should return a function that will increment the counter when invoked", function () {
    //Arrange
    // let counter = 1;
    // let inner = function () {
    //   return (counter += 1);
    // };
    //Act
    let counter = hiddenCounter();

    let result = counter();
    let result2 = counter();
    //Assert
    expect(result2).to.eql(2);
  });
});

//3. myMap
describe("myMap()", function () {
  it("should function like the built in Array#map", function () {
    //Arrange
    const array = [1, 2, 3];
    const cb = (el) => {
      return (el += 1);
    };
    //Act
    const result = myMap(array, cb);
    //Assert
    expect(result).to.eql([2, 3, 4]);
  });

  it("should not call the built in Array#map", function () {
    //Arrange
    const array = [1, 2, 3];
    const cb = (el) => {
      return (el += 1);
    };
    const mapSpy = chai.spy.on(array, "map");
    // const mapSpy = chai.spy.on(Array.prototype, "map");
    //Act

    //Assert
    expect(myMap(mapSpy)).to.have.been.called.exactly(0);
  });
});

//4. avgValue
describe("avgValue", function () {
  it("should return the average of an array of numbers", function () {
    //Arrange
    const array = [5, 6, 7];
    //Act
    const result = avgValue(array);
    //Assert
    expect(result).to.eql(6);
  });
});
