var RecordStore = require('../record_store');
var Record = require('../record')
var assert = require('assert');

describe("Record Store", function() {
  var recordstore1;
  var record1;
  var record2;

  beforeEach(function() {
    recordstore1 = new RecordStore("hmv", "London", 500);
    record1 = new Record("Elton John", "Tiny Dancer", 2);
    record2 = new Record("Foy Vance", "She Burns", 3);
  });
  it("record store should have a name", function() {
    assert.equal("hmv", recordstore1.name);
  });
  it("record store should have a city", function() {
    assert.equal("London", recordstore1.city);
  });
  it("record store should have a cash float at start", function() {
    assert.equal(500, recordstore1.cash);
  });
  it("record store should have no records in the array to start", function() {
    assert.deepEqual([], recordstore1.records);
  });
  it("can add record to the store", function() {
    assert.equal(0, recordstore1.records.length);
    recordstore1.addRecord(record1);
    assert.equal(1, recordstore1.records.length);
  });
  it("can show all records", function() {
    recordstore1.addRecord(record1);
    recordstore1.addRecord(record2);
    assert.equal(2, recordstore1.records.length);
    assert.deepEqual(recordstore1.records, recordstore1.showAllRecords());
  });
  it("can get balance of Store", function() {
    recordstore1.addRecord(record1);
    recordstore1.addRecord(record2);
    assert.equal(505, recordstore1.getBalanceOfStore());
  });
  it("can sell record", function() {
    recordstore1.addRecord(record1);
    recordstore1.addRecord(record2);
    recordstore1.sellRecord(record2);
    assert.equal(1, recordstore1.records.length);
    assert.equal(503, recordstore1.cash);
  })
})