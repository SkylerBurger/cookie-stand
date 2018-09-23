'use strict';

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

postReports(firstAndPike);
postReports(seaTacAirport);
postReports(seattleCenter);
postReports(capitolHill);
postReports(alki);
