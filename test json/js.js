window.onload = function() {
  var request = new XMLHttpRequest();

  request.open('GET', 'test.json', true);

  request.onload = function() {
    // begin accessing JSON data here
    var data = JSON.parse(this.response);

    console.log(data[1].name);
  }

  request.send();
}
var j = {
  'name': 'sơn',
  'age': 18,

}
class information {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}
console.table(new information("Son", 18));
console.log("%cHello","color:red;font-weight:bold;font-size:50px;");
// extends
class i {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log('I like you, ' + this.name);
  }
}
class My extends i {
  speak() {
    console.log('I like you, ' + this.name);
  }
}
var my = new My('KV');
my.speak();
