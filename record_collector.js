var RecordCollector = function(name, account) {
  this.name = name;
  this.account = account;
  this.collection = [];
};

RecordCollector.prototype = {
  buyRecord: function(record) {
    this.collection.push(record);
    this.account -= record.price;
  },
  sellRecord: function(record){
    var recordIndex = this.collection.indexOf(record);
    this.collection.splice(recordIndex, 1);
    this.account += record.price;
  }
}

module.exports = RecordCollector;