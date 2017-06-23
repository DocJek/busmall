'use strict';

var productLineUp = [];
var maxClicks = 25;
var totalClicks = 0;
var chartLabels = [];
var clicks = [];
var views = [];
var ctx = document.createElement('canvas');

function Product (name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.timesShown = 0;
  chartLabels.push(this.name);
}

function getElWithId (id) {
  for (var ii = 0; ii < productLineUp.length; ii++) {
    var obj = productLineUp[ii];
    if (obj.name === id) {
      return obj;
    }
  }
  console.log('Could not find id');
};

// actually renders built bar graph on page
function renderStats () {
  console.log(productLineUp);
  var parentSect = document.getElementById('stats');
  parentSect.appendChild(ctx);
  ctx.setAttribute('id', 'chart');
  ctx = document.getElementById('chart').getContext('2d');
  busMallBarChart();
}

// function to build bar graph
function busMallBarChart() {
  generateChartData();
  marketChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'times clicked',
        data: clicks,
        backgroundColor: 'green',
        borderColor: 'purple',
        borderWidth: 3
      },{
        label: 'times shown',
        data: views,
        backgroundColor: 'purple',
        borderColor: 'green',
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

// tallies clicks on each
function clickCounter (event) {
  if (totalClicks === maxClicks) {
    clickPic.removeEventListener('click', clickCounter);
    console.table(productLineUp);
    renderStats();
    saveStorage();
    return;
  }
  var idName = event.target.getAttribute('id');
  var object = getElWithId(idName);
  object.clicks++;
  totalClicks++;
  console.log(object);
  var obj = document.getElementById('pic');
  obj.removeChild(document.getElementById('fig0'));
  obj.removeChild(document.getElementById('fig1'));
  obj.removeChild(document.getElementById('fig2'));
  renderPic();
}

// 'listens' for click to start click counter function
var clickPic = document.getElementById('pic');
clickPic.addEventListener('click', clickCounter);

// makes sure no pics are repeated on same set
function random (array) {
  var temp = Math.floor(Math.random() * productLineUp.length);
  while (array.includes(temp)) {
    temp = Math.floor(Math.random() * productLineUp.length);
  }
  return temp;
}
var previouslyViewed = [null, null, null];

// Renders the pictures on the page
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
    img.setAttribute('class', 'blur');
    fig.appendChild(img);
    fig.appendChild(figcaption);
    parentEl.appendChild(fig);
    productLineUp[tempRandom].timesShown++;
  }
  previouslyViewed = indexed.slice(2,5);
}

function generateChartData (){
  for (var ee = 0; ee < productLineUp.length; ee++) {
    clicks.push(productLineUp[ee].clicks);
    views.push(productLineUp[ee].timesShown);
  }
}

// feeds to constructor to start building objects
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

var productArray = [
  bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog_duck, dragon, pen, pet_sweep, scissors, shark, sweep, tauntaun, unicorn, usb, water_can, wine_glass
];

// loads any local storage to the page, or if no local storage available, changes productLineUp value to productArray to get ready to start saving data.
function loadStorage () {
  if (localStorage) {
    try {
      var clickString = localStorage.getItem('clickKey');
      var tempClick = JSON.parse(clickString);
      if (clickString && tempClick) {
        productLineUp = tempClick;
      } else {
        productLineUp = productArray;
      }
    } catch(e) {
      productLineUp = productArray;
    }
  }
}

function saveStorage () {
  try {
    var stringyClicks = JSON.stringify(productLineUp);
    localStorage.setItem('clickKey', stringyClicks);
  } catch (e) {
    console.log(e);
  }
}

loadStorage();
renderPic();
saveStorage();
