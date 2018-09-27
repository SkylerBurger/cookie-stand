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
  for(var i in this.salesRecord) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.salesRecord[i];
    console.log(tdEl);
    trEl.appendChild(tdEl);
  }

  // Create total sales table data and append to row
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);

  // Return row
  return trEl;
};

//=============
// Store Objects
//=============

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);


