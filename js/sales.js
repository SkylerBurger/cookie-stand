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

Store.prototype.renderSalesRow = function() {
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
  console.log(trEl);

  // Return row
  return trEl;
};

Store.prototype.renderStaffingRow = function() {
  // Create table row element
  var trEl = document.createElement('tr');

  // Create location name table header and append to row
  var thEl = document.createElement('th');
  thEl.textContent = this.locationName;
  trEl.appendChild(thEl);

  // Loop through hours to create table data elements from customersEachHour
  // then append to row
  var tdEl = document.createElement('td');
  var staffNeeded = 0;

  for(var i in this.customersEachHour) {
    tdEl = document.createElement('td');
    // Staff needed is 1 per 20 customers
    staffNeeded = Math.ceil(this.customersEachHour[i] / 20);

    if(staffNeeded < 2) {
      staffNeeded = 2; // Minimum of 2 staff per hour
    }

    tdEl.textContent = staffNeeded;
    trEl.appendChild(tdEl);
    this.staffEachHour.push(staffNeeded);
  }

  // Return row
  return trEl;
};


//==========
// Functions
//==========

var renderHeader = function(isTotalNeeded) {
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
  if(isTotalNeeded){
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Location Total';
    trEl.appendChild(thEl);
  }

  // Append row to thead and return
  tHeadEl.appendChild(trEl);
  return tHeadEl;
};

var renderSalesFooter = function(storeArray) {
  console.log(storeArray);
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
      hourTotal += storeArray[j].salesRecord[i];
      console.log(`Trying to add in ${storeArray[j].salesRecord[i]}`);
    }
    companyTotal += hourTotal;
    tdEl = document.createElement('td');
    tdEl.textContent = hourTotal;
    console.log(tdEl);
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

var renderStaffingFooter = function(storeArray) {
  var tFootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');

  // Create and append the first cell
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  // Loop to create and append hourly sales totals
  var tdEl = document.createElement('td');
  for(var i = 0; i < 15; i++) {
    var staffTotal = 0;

    // Add each location's staffing for the hour together
    for(var j in storeArray) {
      staffTotal += storeArray[j].staffEachHour[i];
      console.log(`Trying to add in ${storeArray[j].staffEachHour[i]}`);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = staffTotal;
    console.log(tdEl);
    trEl.appendChild(tdEl);
  }

  // Append row to tfoot and return
  tFootEl.appendChild(trEl);
  return tFootEl;
};

var renderSalesTable = function(storeArray) {
  // Run simulateSalesFor Day for each store
  for(var i in storeArray) {
    storeArray[i].simulateSalesForDay();
  }

  // Reference the table element in the DOM
  var tableEl = document.getElementById('report');

  // Create and append thead, boolean is to generate total sales column
  tableEl.appendChild(renderHeader(true));

  // Create tbody, create each row, append to table
  var tBodyEl = document.createElement('tbody');
  for(var j in storeArray) {
    tBodyEl.appendChild(storeArray[j].renderSalesRow());
  }
  tableEl.appendChild(tBodyEl);

  // Create and append tfoot
  tableEl.appendChild(renderSalesFooter(storeArray));
};

var renderStaffingTable = function(storeArray) {
  // Reference the table element in the DOM
  var tableEl = document.getElementById('staffing');

  // Create and append thead, boolean is to generate total sales column
  tableEl.appendChild(renderHeader(false));

  // Create tbody, create each row, append to table
  var tBodyEl = document.createElement('tbody');
  for(var j in storeArray) {
    tBodyEl.appendChild(storeArray[j].renderStaffingRow());
  }
  tableEl.appendChild(tBodyEl);

  // Create and append tfoot
  tableEl.appendChild(renderStaffingFooter(storeArray));

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

renderSalesTable(allStores);
renderStaffingTable(allStores);

