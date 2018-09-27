'use strict';

//==================
// Store Constructor
//==================

function Store(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.name = locationName;
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

  // Loop runs once for each hour, 15 for the time being
  for(var i = 0; i < 15; i++) {
    // Calculate sales for this hour, then push to sales report
    // Add sales this hour to total sales for use later
    salesThisHour = Math.ceil(this.generateCustomersThisHour() * this.avgCookiesPerSale);
    this.salesRecord.push(salesThisHour);
    this.totalSales += salesThisHour;
  }
};






// Store.prototype.renderReport = function() {
//   // Run simulatedSales to populate the salesRecord
//   this.simulatedSalesForDay();
//   console.log(this.salesReport);

//   // Target, create, append elements to sales page
//   var target = document.getElementById('sales');

//   // Store Name
//   var storeName = document.createElement('h1');
//   storeName.textContent = this.name;
//   console.log(storeName);
//   target.appendChild(storeName);

//   // Sales Report
//   var ulEl = document.createElement('ul');
//   for(var i in this.salesReport) {
//     var liEl = document.createElement('li');
//     liEl.textContent = this.salesReport[i];
//     ulEl.appendChild(liEl);
//   }
//   target.appendChild(ulEl);
// };

//=============
// Store Objects
//=============

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//===============
// Render Reports
//===============

// firstAndPike.renderReport();
// seaTacAirport.renderReport();
// seattleCenter.renderReport();
// capitolHill.renderReport();
// alki.renderReport();
