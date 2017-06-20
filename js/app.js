'use strict';

var productObj = [];

function randPic() {
  return Math.floor(Math.random() * productObj.length);
}

function Product (name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.timesShown = 0;
  this.productLineUp = productLineUp;
  productObj.push(this);
}


var parentEl = document.getElementById('pic');

function renderPic (path) {
  var img1 = document.createElement('img');
  img1.setAttribute('images/' + path);
  parentEl.appendChild(img1);
}


var bag = new Product ('R2D2 travel bag', 'bag.jpg');
var banana = new Product ('banana slicer', 'banana.jpg');
var bathroom = new Product ('toilet tablet holder', 'bathroom.jpg');
var boots = new Product ('open toe rainboots', 'boots.jpg');
var breakfast = new Product ('breakfast station', 'breakfast.jpg');
var bubblegum = new Product ('meatball bubblegum', 'bubblegum.jpg');
var chair = new Product ('bulbchair', 'chair.jpg');
var cthulhu = new Product ('cthulhu', 'cthulhu.jpg');
var dog_duck = new Product ('duck bill for dog', 'dog-duck.jpg');
var dragon = new Product ('can of dragon meat', 'dragon.jpg');
var pen = new Product ('pen utensils', 'pen.jpg');
var pet_sweep = new Product ('sweeper feet for pets', 'pet-sweep.jpg');
var scissors = new Product ('pizza scissors', 'scissors.jpg');
var shark = new Product ('shark sleeping bag', 'shark.jpg');
var sweep = new Product ('baby sweeper', 'sweep.png');
var tauntaun = new Product ('tauntaun sleeping bag', 'tauntaun.jpg');
var unicorn = new Product ('can of unicorn meat', 'unicorn.jpg');
var usb = new Product ('moving tentacle usb', 'usb.gif');
var water_can = new Product ('self filling water can', 'water-can.jpg');
var wine_glass = new Product ('egg shaped wine glass', 'wine-glass');

renderPic('bag.jpg');
