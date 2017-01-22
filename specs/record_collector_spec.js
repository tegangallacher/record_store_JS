var RecordCollector = require('../record_collector');
var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');


describe("Record Collector", function() {
  var recordCollector;
  var recordstore1;
  var record1;
  var record2;
  beforeEach(function() {
    recordCollector = new RecordCollector("Tegan", 200);
    recordstore1 = new RecordStore("hmv", "London", 500);
    record1 = new Record("Elton John", "Tiny Dancer", 2);
    record2 = new Record("Foy Vance", "She Burns", 3);
    recordstore1.addRecord(record1);
    recordstore1.addRecord(record2);
  })
  it("collector should have a name", function() {
    assert.equal("Tegan", recordCollector.name);
  });
  it("collector should have a account", function() {
    assert.equal(200, recordCollector.account);
  });
  it("collector should start with empty collection", function() {
    assert.equal(0, recordCollector.collection.length);
  });
  it("collector can buy a record", function() {
    assert.equal(2, recordstore1.records.length);
    recordCollector.buyRecord(record2);
    recordstore1.sellRecord(record2);
    assert.equal(1, recordCollector.collection.length);
    assert.equal(1, recordstore1.records.length);
    assert.equal(197, recordCollector.account);
    assert.equal(503, recordstore1.cash);
  });
  it("collector can sell a record", function() {
    recordCollector.buyRecord(record2);
    assert.equal(197, recordCollector.account);
    recordstore1.sellRecord(record2);
    assert.equal(503, recordstore1.cash);
    recordCollector.sellRecord(record2);
    assert.equal(200, recordCollector.account);
    recordstore1.addRecord(record2);
    assert.equal(508, recordstore1.getBalanceOfStore());
  })
});