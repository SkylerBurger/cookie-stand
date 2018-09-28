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
  this.customersEachHour = [];
  this.staffEachHour= [];
  this.totalSales = 0;
}

Store.prototype.generateCustomersThisHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
};

Store.prototype.simulateSalesForDay = function() {
  var salesThisHour = 0;
  var customersThisHour = 0;
  // Reset record in case method has been called previously
  this.salesRecord = [];

  // Loop runs once for each hour, 15 hours for the time being
  for(var i = 0; i < 15; i++) {
    // Generate customers for the hour and push to object's array
    customersThisHour = this.generateCustomersThisHour();
    this.customersEachHour.push(customersThisHour);
    // Calculate sales for this hour, then push to sales report
    // Add sales this hour to total sales for use later
    salesThisHour = Math.ceil(customersThisHour * this.avgCookiesPerSale);
    this.salesRecord.push(salesThisHour);
    this.totalSales += salesThisHour;
  }
};

Store.prototype.renderRow = function(rowType) {
  // This method can handle both sales and staffing rows
  // When called, user should specify rowType of 'sales' or 'staffing'

  var trEl = document.createElement('tr');

  // Create location name table header and append to row
  var thEl = document.createElement('th');
  thEl.textContent = this.locationName;
  trEl.appendChild(thEl);

  var tdEl = document.createElement('td');
  if(rowType === 'sales') {

    // Create sales cell for each hour
    for(var i in this.salesRecord) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.salesRecord[i];
      trEl.appendChild(tdEl);
    }

    // Create total sales cell
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalSales;
    trEl.appendChild(tdEl);

  } else if(rowType === 'staffing') {

    var staffNeeded = 0;
    for(var j in this.customersEachHour) {
      tdEl = document.createElement('td');
      // Staff needed is 1 per 20 customers
      staffNeeded = Math.ceil(this.customersEachHour[j] / 20);

      if(staffNeeded < 2) {
        staffNeeded = 2; // Minimum of 2 staff per hour
      }

      tdEl.textContent = staffNeeded;
      trEl.appendChild(tdEl);
      this.staffEachHour.push(staffNeeded);
    }
  }

  // Return row
  return trEl;
};


//==========
// Functions
//==========

var renderHeader = function(headerType) {
  // This function can create headers for sales and staffing
  // When called, user should specify 'sales' or 'staffing'

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
    console.log(`time is ${time} and i is ${i}`);
    thEl = document.createElement('th');
    thEl.textContent = time;
    trEl.appendChild(thEl);
  }

  // Only need this final column for sales table
  if(headerType === 'sales'){
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Location Total';
    trEl.appendChild(thEl);
  }

  // Append row to thead and return
  tHeadEl.appendChild(trEl);
  return tHeadEl;
};

var renderFooter = function(storeArray, footerType) {
  // This function can handle both sales and staffing footers.
  // When called, user should specify footerType of 'sales' or 'staffing'
  // Defaults to staffing if second parameter is omitted

  var tFootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');

  // Create and append the first cell
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  // Loop to create and append hourly totals
  var companyTotal = 0; // Container for sum used in final cell for sales
  var tdEl = document.createElement('td');
  for(var i = 0; i < 15; i++) { // 15 hours in day
    var sumTotal = 0;

    for(var j in storeArray) {
      if(footerType === 'sales') {
        // Add each location's sales for the hour together
        sumTotal += storeArray[j].salesRecord[i];
      } else {
        // Add each location's staffing for the hour together
        sumTotal += storeArray[j].staffEachHour[i];
      }
    }

    if(footerType === 'sales') {
      // Keep running total of sales
      companyTotal += sumTotal;
    }

    tdEl = document.createElement('td');
    tdEl.textContent = sumTotal;
    console.log(tdEl);
    trEl.appendChild(tdEl);
  }

  if(footerType === 'sales') {
    // Create and append company sales total for the day
    tdEl = document.createElement('td');
    tdEl.textContent = companyTotal;
    trEl.appendChild(tdEl);
  }

  // Append row to tfoot and return
  tFootEl.appendChild(trEl);
  return tFootEl;
};

var renderTables = function(storeArray) {
  // Run simulateSalesFor Day for each store
  for(var i in storeArray) {
    storeArray[i].simulateSalesForDay();
  }

  // Reference the table elements in the DOM
  var salesTableEl = document.getElementById('sales');
  var staffTableEl = document.getElementById('staffing');

  // Create and append thead
  salesTableEl.appendChild(renderHeader('sales'));
  staffTableEl.appendChild(renderHeader('staffing'));

  // Create tbody, create each row, append to table
  var salesTBodyEl = document.createElement('tbody');
  var staffingTBodyEl = document.createElement('tbody');
  for(var j in storeArray) {
    salesTBodyEl.appendChild(storeArray[j].renderRow('sales'));
    staffingTBodyEl.appendChild(storeArray[j].renderRow('staffing'));
  }
  salesTableEl.appendChild(salesTBodyEl);
  staffTableEl.appendChild(staffingTBodyEl);

  // Create and append tfoot
  salesTableEl.appendChild(renderFooter(storeArray, 'sales'));
  staffTableEl.appendChild(renderFooter(storeArray, 'staffing'));
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

renderTables(allStores);

