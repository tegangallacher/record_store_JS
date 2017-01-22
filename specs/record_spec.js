var Record = require('../record');
var assert = require('assert');

var record1 = new Record("Elton John", "Tiny Dancer", 2);

describe("Record", function() {
  it("record should have a artist", function() {
    assert.equal("Elton John", record1.artist);
  });
  it("record should have a title", function() {
    assert.equal("Tiny Dancer", record1.title);
  });
  it("record should have a price", function() {
    assert.equal(2, record1.price);
  });
});