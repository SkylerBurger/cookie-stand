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
        var salesRecord = [];
        var totalCookies = 0;
        var simulatedSales = 0;

        for(var i = 0; i < 15; i++) {
            var time = i + 6;
            if(time > 12) {
                time -= 12;
                time = time + "pm: ";
            } else {
                time = time + "am: ";
            }
            
            simulatedSales = Math.ceil(this.customersPerHour() * this.avgCookiesPerHour);
            salesRecord.push(time + this.simulatedSales + ' cookies');
            this.totalCookies += this.simulatedSales;
        }

        salesRecord.push("Total: " + this.totalCookies + " cookies");
        return salesRecord;
    }
}

