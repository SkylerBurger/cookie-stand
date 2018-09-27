'use strict';

//==================
// Store Constructor
//==================

function Store(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.salesRecord = [];
  this.totalSales = 0;
}

Store.prototype.generateCustomersThisHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
};

Store.prototype.simulatedSalesForDay = function() {
  var salesThisHour = 0;
  // Reset record in case method has been called previously
  this.salesRecord = [];

  // Loop runs once for each hour, 15 hours for the time being
  for(var i = 0; i < 15; i++) {
    // Calculate sales for this hour, then push to sales report
    // Add sales this hour to total sales for use later
    salesThisHour = Math.ceil(this.generateCustomersThisHour() * this.avgCookiesPerSale);
    this.salesRecord.push(salesThisHour);
    this.totalSales += salesThisHour;
  }
};

Store.prototype.renderRow = function() {
  // Create table row element
  var trEl = document.createElement('tr');

  // Create location name table header and append to row
  var thEl = document.createElement('th');
  thEl.textContent = this.locationName;
  trEl.appendChild(thEl);

  // Loop through hours to create table data elements from sales
  // then append to row
  var tdEl = document.createElement('td');

  for(var i in this.salesRecord) {
    var tBodyEl = document.createElement('tbody');
    tdEl = document.createElement('td');
    tdEl.textContent = this.salesRecord[i];
    console.log(tdEl); // Test
    trEl.appendChild(tdEl);
  }

  // Create total sales table data and append to row
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  console.log(tdEl); // Test
  trEl.appendChild(tdEl);
  tBodyEl.appendChild(trEl);

  // Return row
  return tBodyEl;
};

//==========
// Functions
//==========

var renderHeader = function() {
  var tHeadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  // First cell is blank
  trEl.appendChild(thEl);

  // Create hours (15 for now), trEls, and append to row
  for(var i = 0; i < 15; i++) {
    var time = i + 6; // 6AM is the opening hour

    if(time < 12) {
      time += ':00am';
    } else if(time > 12) {
      time -= 12;
      time += ':00pm';
    } else {
      time += ':00pm';
    }

    thEl = document.createElement('th');
    thEl.textContent = time;
    trEl.appendChild(thEl);
  }

  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  // Append row to thead and return
  tHeadEl.appendChild(trEl);
  return tHeadEl;
};

var renderFooter = function(storeArray) {
  var companyTotal = 0; // Container for sum used in final cell
  var tFootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');

  // Create and append the first cell
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  // Loop to create and append hourly sales totals
  var tdEl = document.createElement('td');
  for(var i = 0; i < 15; i++) {
    var hourTotal = 0;

    // Add each location's sales for the hour together
    for(var j in storeArray) {
      hourTotal += storeArray[j][i];
    }
    companyTotal += hourTotal;
    tdEl = document.createElement('td');
    tdEl.textContent = hourTotal;
    trEl.appendChild(tdEl);
  }

  // Create and append company sales total for the day
  tdEl = document.createElement('td');
  tdEl.textContent = companyTotal;
  trEl.appendChild(tdEl);

  // Append row to tfoot and return
  tFootEl.appendChild(trEl);
  return tFootEl;
};


var renderTable = function(storeArray) {


};

//==============
// Store Objects
//==============

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
var allStores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

renderFooter(allStores);


