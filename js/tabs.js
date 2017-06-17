/**
* @desc Tabs are used to show/hide panels of arbitrary content. Clicking on a
* particular ".tab__link" will toggle a ".tab-panel" whose ID attr value is
* stored as the tab link's "data-target" attr value.
*
* @example
    <div class="tabs">
        <ul class="tablist" role="tablist">
            <li class="tab is-active" role="presentation"><a href="#" id="tab1" data-target="tabpanel1" class="tab__link" role="tab" aria-selected="true" tabindex="0">Tab 1</a></li><!--
    --><li class="tab" role="presentation"><a href="#" id="tab2" data-target="tabpanel2" class="tab__link" role="tab" aria-selected="false" tabindex="-1">Tab 2</a></li>
        </ul>
        <div class="tab-panels">
            <div id="tabpanel1" class="tab-panel" role="tabpanel" aria-labeledby="tab1" aria-hidden="false">
                Lorem ipsum dolor
            </div>
            <div id="tabpanel2" class="tab-panel" role="tabpanel" aria-labeledby="tab2" aria-hidden="true">
                Lorem ipsum dolor
            </div>
        </div>
    </div>
*/
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
