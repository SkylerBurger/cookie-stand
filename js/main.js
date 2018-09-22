"use strict"

var firstAndPike = {
    name: '1st and Pike',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerHour: 6.3,
    customersPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    },
    simulatedSales: function() {
        var times = 12; // Placeholder number, will need to be based on open/close times
        var salesRecord = [];
    
        for(var i = 0; i < times; i++) {
            salesRecord.push('Hour ' + i + ': ' + Math.ceil(this.customersPerHour() * this.avgCookiesPerHour) + ' cookies');
        }
        return salesRecord;
    }
}

