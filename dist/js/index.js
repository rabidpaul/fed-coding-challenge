/*! fed-coding-challenge - v1.0.0 2017-06--16 */
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

(function(){

    $('.tab').click(toggleTabActive);

    /**
    * @desc Toggles ".is-active" on ".tab" and ".tab-panel" upon click, first
    * removing that class from other active elements in the tablist.
    */
    function toggleTabActive(event) {
        console.log('target', event.target);
        var tab = $(event.target).parent('.tab');
        var targetId = "#"+$(event.target).data('target');
        var panel = $(targetId);
        console.log('panel', targetId, panel);

        if(tab.hasClass('is-active')){
            return;
        }

        $('.tab.is-active').removeClass('is-active');
        $('.tab-panel.is-active').removeClass('is-active');

        tab.addClass('is-active');
        panel.addClass('is-active').focus();
    }

})();
