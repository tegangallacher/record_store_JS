var RecordStore = function(name, city, cash) {
  this.name = name;
  this.city = city;
  this.records = [];
  this.cash = cash;
};

RecordStore.prototype = {
  addRecord: function(record) {
    this.records.push(record);
  },
  showAllRecords: function() {
    var inventory = this.records.map(function(record) {
      return record;
    });
    return inventory;
  },
  getBalanceOfStore: function() {
    var inventoryValue = this.records.reduce(function(accum, record) {
      return (accum + record.price)
    }, 0);
    return inventoryValue + this.cash;
  },
  sellRecord: function(record) {
    var recordIndex = this.records.indexOf(record);
    this.records.splice(recordIndex, 1);
    this.cash += record.price;
    return this.cash;
  }
};


module.exports = RecordStore;