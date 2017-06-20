'use strict';

var productLineUp = [];


function Product (name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.timesShown = 0;
  productLineUp.push(this);
}

// Checks to see if duplication is happening on current set of pics
productLineUp.getElWithId = function(id) {
  for (var ii = 0; ii < productLineUp.length; ii++) {
    var obj = productLineUp[ii];
    if (obj.name === id) {
      return obj;
    }
  }
  console.log('Could not find id');
};

function clickCounter (event) {
  var idName = event.target.getAttribute('id');
  var object = productLineUp.getElWithId(idName);
  object.clicks++;
  console.log(object);
  var obj = document.getElementById('pic');
  console.log(obj);
  obj.removeChild(document.getElementById('fig0'));
  obj.removeChild(document.getElementById('fig1'));
  obj.removeChild(document.getElementById('fig2'));
  renderPic();
}

var clickPic = document.getElementById('pic');
clickPic.addEventListener('click', clickCounter);




function random (array) {
  var temp = Math.floor(Math.random() * productLineUp.length);
  while (array.includes(temp)) {
    temp = Math.floor(Math.random() * productLineUp.length);
  }
  return temp;
}
var previouslyViewed = [];

function renderPic () {
  var indexed = previouslyViewed;
  for (var i = 0; i < 3; i++) {
    var tempRandom = random(indexed);
    var parentEl = document.getElementById('pic');
    var fig = document.createElement('figure');
    var figcaption = document.createElement('figcaption');
    var img = document.createElement('img');
    indexed.push(tempRandom);
    fig.setAttribute('id', 'fig' + i);
    figcaption.textContent = productLineUp[tempRandom].name;
    img.setAttribute('src', 'images/' + productLineUp[tempRandom].path);
    img.setAttribute('id', productLineUp[tempRandom].name);
    fig.appendChild(img);
    fig.appendChild(figcaption);
    parentEl.appendChild(fig);
    productLineUp[tempRandom].timesShown++;
  }
  if (indexed.length === 6) {
    previouslyViewed = indexed.slice(2,5);
  } else if (indexed.length < 6) {
    previouslyViewed = indexed;
  }
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
var sweep = new Product ('baby sweeper onesie', 'sweep.png');
var tauntaun = new Product ('tauntaun sleeping bag', 'tauntaun.jpg');
var unicorn = new Product ('can of unicorn meat', 'unicorn.jpg');
var usb = new Product ('moving tentacle usb', 'usb.gif');
var water_can = new Product ('self filling water can', 'water-can.jpg');
var wine_glass = new Product ('egg shaped wine glass', 'wine-glass.jpg');


renderPic();
