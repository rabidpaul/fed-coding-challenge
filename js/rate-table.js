(function() {

    var originalRateData;
    var rateData;

    $.getJSON( "../code-test.json", function( data ) {
        originalRateData = data;
        populateRateTable();
    });

    /**
    * @desc Populates the rate table with data sorted by APR.
    */
    function populateRateTable() {
        var tbody = $('#rateData');
        var boldClass;
        var rows = '';
        var earnings = "0.00";

        rateData = originalRateData.sort(compareByYield);

        for (var i = 0; i < rateData.length; i++) {
            var obj = rateData[i];
            earnings = obj.earnings % 1 === 0 ? obj.earnings+".00":obj.earnings;
            console.log('test', /^URBank/.test(obj.name));
            boldClass = /^URBank/.test(obj.name) ? 'text--bold':'';
            rows += '<tr class=\"rate-table__row '+boldClass+'\"><td class=\"rate-table__data bank-name\">'+obj.name+'</td><td class=\"rate-table__data text-align--right\">'+obj.apy+'%</td><td class=\"rate-table__data text-align--right\">$'+earnings+'</td></tr>';

        }
        tbody.html(rows);
    }

    /**
    * @desc Compares the APY of objects in the rateData array to sort them in
    * descending order.
    */
    function compareByYield(a, b) {
        if (a.apy < b.apy) {
            return 1;
        }
        if (a.apy > b.apy) {
            return -1;
        }
        return 0;
    }

})();
