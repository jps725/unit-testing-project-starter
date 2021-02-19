const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../problems/phase-3");
describe("Word", function () {
  let item;
  beforeEach("setup new Word instance", () => {
    item = new Word("potato");
  });
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      //Arrange & Act

      //Assert
      expect(item).to.have.property("word");
    });
    it('should set the "word" property when a new word is created', function () {
      //Arrange & Act

      //Assert
      expect(item.word).to.eql("potato");
    });
  });
  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      //Arrange

      //Act
      const res = item.removeVowels();
      //Assert
      expect(res).to.eql("ptt");
    });
  });
  describe("removeConsonants function", function () {});
  it("should return the word with the consonants removed", function () {
    //Arrange

    //Act
    const res = item.removeConsonants();
    //Assert
    expect(res).to.eql("oao");
  });
  describe("pigLatin function", function () {});
  it("should return the word converted to pig latin", function () {
    //Arrange

    //Act
    const res = item.pigLatin();
    //Assert
    expect(res).to.eql("otatopay");
  });
});
