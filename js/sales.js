'use strict';

//==================
// Store Constructor
//==================

function Store(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.name = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.salesReport = [];
}

Store.prototype.customersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
}

Store.prototype.simulatedSales = function() {
  var simSalesThisHour = 0;
  var totalSimSales = 0;
  // Reset record in case method has been previously called
  this.salesReport = [];

  // Loop runs once for each hour
  for(var i = 0; i < 15; i++) {
    // Create the timestamp
    var time = i + 6;
    if(time > 12) {
      time -= 12;
      time += 'pm: ';
    } else {
      time += 'am: ';
    }

    // Calculate simulated sales for this hour
    simSalesThisHour = Math.ceil(this.customersPerHour() * this.avgCookiesPerSale);
    this.salesReport.push(time + simSalesThisHour + ' cookies');
    totalSimSales += simSalesThisHour;
  }
  
  // Add total sales to the record 
  this.salesReport.push('Total: ' + totalSimSales + ' cookies');
}

Store.prototype.renderReport = function() {
  // Run simulatedSales to populate the salesRecord
  this.simulatedSales();
  console.log(this.salesReport);

  // Target, create, append elements to sales page
  var target = document.getElementById('sales');

  // Store Name
  var storeName = document.createElement('h1');
  storeName.textContent = this.name;
  console.log(storeName);
  target.appendChild(storeName);

  // Sales Report
  var ulEl = document.createElement('ul');
  for(var i in this.salesReport) {
    var liEl = document.createElement('li');
    liEl.textContent = this.salesReport[i];
    ulEl.appendChild(liEl);
  }
  target.appendChild(ulEl);
}

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

firstAndPike.renderReport();
seaTacAirport.renderReport();
seattleCenter.renderReport();
capitolHill.renderReport();
alki.renderReport();