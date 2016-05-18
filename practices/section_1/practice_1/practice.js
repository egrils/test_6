function collect_same_elements(collection_a, collection_b) {
  var newArray = [];

  collection_a.forEach(function (element) {
    if (isExist(element,collection_b))  newArray.push(element);
  });

  return newArray;
}

function isExist(element,collection){
  var boolean = false;

  collection.forEach(function (string) {
    if (string == element)  boolean = true;
  });

  return boolean;
}

module.exports = collect_same_elements;
