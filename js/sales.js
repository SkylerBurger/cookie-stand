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
}

Store.prototype.customersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
}

Store.prototype.simulatedSales = function() {
  var simSalesThisHour = 0;
  var totalSimSales = 0;
  // Reset record in case method has been previously called
  this.salesRecord = [];

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
    this.salesRecord.push(time + simSalesThisHour + ' cookies');
    totalSimSales += simSalesThisHour;
  }
  // 
  this.salesRecord.push('Total: ' + totalSimSales + ' cookies');
}

Store.prototype.renderReport = function() {
  // Run simulatedSales to populate the salesRecord
  this.simulatedSales();
  console.log(this.salesRecord);

  // Target, create, append elements to sales page
  var target = document.getElementById('sales');

  // Store Name
  var storeName = document.createElement('h1');
  storeName.textContent = this.name;
  console.log(storeName);
  target.appendChild(storeName);

  // Sales Report
  var ulEl = document.createElement('ul');
  for(var i in this.salesRecord) {
    var liEl = document.createElement('li');
    liEl.textContent = this.salesRecord[i];
    ulEl.appendChild(liEl);
  }
  target.appendChild(ulEl);
}

// TESTING 1 2 3...
var firstAndPikeTest = new Store('1st and Pike', 23, 65, 6.3);
firstAndPikeTest.renderReport();



//=============
// 1st and Pike
//=============

var firstAndPike = { //eslint-disable-line
  name: '1st and Pike',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerHour: 6.3,
  simulatedSalesRecord: [],

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
  },

  simulatedSales: function() {
    var simSales = 0;
    var totalSimulatedSales = 0;
    // Reset record in case it was called more than once
    this.simulatedSalesRecord = [];

    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if(time > 12) {
        time -= 12;
        time += 'pm: ';
      } else {
        time += 'am: ';
      }

      simSales = Math.ceil(this.customersPerHour() * this.avgCookiesPerHour);
      this.simulatedSalesRecord.push(time + simSales + ' cookies');
      totalSimulatedSales += simSales;
    }

    this.simulatedSalesRecord.push('Total: ' + totalSimulatedSales + ' cookies');
  }
};

//===============
// SeaTac Airport
//===============

var seaTacAirport = { //eslint-disable-line
  name: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerHour: 1.2,
  simulatedSalesRecord: [],

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
  },

  simulatedSales: function() {
    var simSales = 0;
    var totalSimulatedSales = 0;
    // Reset record in case it was called more than once
    this.simulatedSalesRecord = [];

    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if(time > 12) {
        time -= 12;
        time += 'pm: ';
      } else {
        time += 'am: ';
      }

      simSales = Math.ceil(this.customersPerHour() * this.avgCookiesPerHour);
      this.simulatedSalesRecord.push(time + simSales + ' cookies');
      totalSimulatedSales += simSales;
    }

    this.simulatedSalesRecord.push('Total: ' + totalSimulatedSales + ' cookies');
  }
};

//===============
// Seattle Center
//===============

var seattleCenter = { //eslint-disable-line
  name: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerHour: 3.7,
  simulatedSalesRecord: [],

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
  },

  simulatedSales: function() {
    var simSales = 0;
    var totalSimulatedSales = 0;
    // Reset record in case it was called more than once
    this.simulatedSalesRecord = [];

    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if(time > 12) {
        time -= 12;
        time += 'pm: ';
      } else {
        time += 'am: ';
      }

      simSales = Math.ceil(this.customersPerHour() * this.avgCookiesPerHour);
      this.simulatedSalesRecord.push(time + simSales + ' cookies');
      totalSimulatedSales += simSales;
    }

    this.simulatedSalesRecord.push('Total: ' + totalSimulatedSales + ' cookies');
  }
};

//=============
// Capitol Hill
//=============

var capitolHill = { //eslint-disable-line
  name: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerHour: 2.3,
  simulatedSalesRecord: [],

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
  },

  simulatedSales: function() {
    var simSales = 0;
    var totalSimulatedSales = 0;
    // Reset record in case it was called more than once
    this.simulatedSalesRecord = [];

    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if(time > 12) {
        time -= 12;
        time += 'pm: ';
      } else {
        time += 'am: ';
      }

      simSales = Math.ceil(this.customersPerHour() * this.avgCookiesPerHour);
      this.simulatedSalesRecord.push(time + simSales + ' cookies');
      totalSimulatedSales += simSales;
    }

    this.simulatedSalesRecord.push('Total: ' + totalSimulatedSales + ' cookies');
  }
};

//=====
// Alki
//=====

var alki = { //eslint-disable-line
  name: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerHour: 4.6,
  simulatedSalesRecord: [],

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
  },

  simulatedSales: function() {
    var simSales = 0;
    var totalSimulatedSales = 0;
    // Reset record in case it was called more than once
    this.simulatedSalesRecord = [];

    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if(time > 12) {
        time -= 12;
        time += 'pm: ';
      } else {
        time += 'am: ';
      }

      simSales = Math.ceil(this.customersPerHour() * this.avgCookiesPerHour);
      this.simulatedSalesRecord.push(time + simSales + ' cookies');
      totalSimulatedSales += simSales;
    }

    this.simulatedSalesRecord.push('Total: ' + totalSimulatedSales + ' cookies');
  }
};

var postReports = function(store) {
  // Run store simulation and store the report
  store.simulatedSales();
  var report = store.simulatedSalesRecord;
  console.log(report);


  // Target, create, append elements to page
  var target = document.getElementById('salesReport');
  // Store Name
  var storeName = document.createElement('h1');
  storeName.textContent = store.name;
  target.appendChild(storeName);
  // Sales Report
  var ulEl = document.createElement('ul');
  for(var i = 0; i < report.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = report[i];
    ulEl.appendChild(liEl);
  }
  target.appendChild(ulEl);
};

// postReports(firstAndPike);
// postReports(seaTacAirport);
// postReports(seattleCenter);
// postReports(capitolHill);
// postReports(alki);
