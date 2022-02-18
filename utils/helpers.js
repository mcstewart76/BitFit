module.exports = {
  
  inc: function (value, options) {
    return parseInt(value) + 1;

}, 

listItem: function (from, to, context, options){
  var item = "";
  for (var i = from, j = to; i < j; i++) {
      item = item + options.fn(context[i]);
  }
  return item;
};

};
