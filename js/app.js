'use strict';

var productLineUp = [];
var maxClicks = 25;
var totalClicks = 0;



function Product (name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.timesShown = 0;
  productLineUp.push(this);
}

productLineUp.getElWithId = function(id) {
  for (var ii = 0; ii < productLineUp.length; ii++) {
    var obj = productLineUp[ii];
    if (obj.name === id) {
      return obj;
    }
  }
  console.log('Could not find id');
};

function renderStats () {
  var parent = document.getElementById('stats');
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  parent.appendChild(ul);
  console.log(productLineUp);
  for (var ee = 0; ee < productLineUp.length; ee++) {
    busMallRadar();
    // ul.appendChild(li);
    // li.textContent = productLineUp[ee].name + ' was clicked ' + productLineUp[ee].clicks + ' time(s). And shown ' + productLineUp[ee].timesShown + ' time(s).';
    // li = document.createElement('li');
  }
}

var busMallRadar = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [productLineUp[ee].name],
    datasets: {[
      lineTension 0,
      data: [productLineUp[ee].clicks, productLineUp[ee].timesShown]
    ]}
  }
});


function clickCounter (event) {
  if (totalClicks === maxClicks) {
    clickPic.removeEventListener('click', clickCounter);
    console.table(productLineUp);
    renderStats();
    return;
  }
  var idName = event.target.getAttribute('id');
  var object = productLineUp.getElWithId(idName);
  object.clicks++;
  totalClicks++;
  console.log(object);
  var obj = document.getElementById('pic');
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
var previouslyViewed = [null, null, null];

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
  previouslyViewed = indexed.slice(2,5);
}

var bag = new Product ('R2D2 Travel Bag', 'bag.jpg');
var banana = new Product ('Banana Slicer', 'banana.jpg');
var bathroom = new Product ('Toilet Tablet Holder', 'bathroom.jpg');
var boots = new Product ('Open Toe Rainboots', 'boots.jpg');
var breakfast = new Product ('Breakfast Station', 'breakfast.jpg');
var bubblegum = new Product ('Meatball Bubblegum', 'bubblegum.jpg');
var chair = new Product ('Bulbchair', 'chair.jpg');
var cthulhu = new Product ('Cthulhu', 'cthulhu.jpg');
var dog_duck = new Product ('Duck Bill Muzzle', 'dog-duck.jpg');
var dragon = new Product ('Can of Dragon Meat', 'dragon.jpg');
var pen = new Product ('Pen Utensils', 'pen.jpg');
var pet_sweep = new Product ('Sweeper Feet for Pets', 'pet-sweep.jpg');
var scissors = new Product ('Pizza Scissors', 'scissors.jpg');
var shark = new Product ('Shark Sleeping Bag', 'shark.jpg');
var sweep = new Product ('Baby Sweeper Onesie', 'sweep.png');
var tauntaun = new Product ('Tauntaun Sleeping Bag', 'tauntaun.jpg');
var unicorn = new Product ('Can of Unicorn Meat', 'unicorn.jpg');
var usb = new Product ('Moving Tentacle USB', 'usb.gif');
var water_can = new Product ('Pointless Water Can', 'water-can.jpg');
var wine_glass = new Product ('Egg Shaped Wine Glass', 'wine-glass.jpg');

renderPic();
