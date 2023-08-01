odoo.define('theme_power_module.mixin',function(require){

	var concurrency = require('web.concurrency');
	var config = require('web.config');
	var core = require('web.core');
	var publicWidget = require('web.public.widget');
	var utils = require('web.utils');

    var qweb = core.qweb;
    publicWidget.registry.mixin = publicWidget.Widget.extend({
        selector: '.wt_anim_prod_left_home,.s_open_category_popup',
        disabledInEditableMode: false,

        init: function(){
            this._super.apply(this,arguments);
            this._dp = new concurrency.DropPrevious();
        },
        /**
		 * @override
		 */

        start: function(){
         
        },
        // destroy: function () {
		// 	this._super(...arguments);
		// 	this.$el.find('.video-container').html('');
		// },

    });
});