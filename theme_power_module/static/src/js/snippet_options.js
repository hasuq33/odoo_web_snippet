odoo.define('theme_power_module.s_open_category_popup', function (require) {
    'use strict';

    const { MediaDialogWrapper } = require('@web_editor/components/media_dialog/media_dialog');
    const { ComponentWrapper } = require('web.OwlCompatibility');
    var ajax = require('web.ajax');
    var core = require('web.core');
    var Dialog = require('web.Dialog');
    var _t = core._t;
    const options = require('web_editor.snippets.options');
    var Qweb = core.qweb;

    options.registry.s_open_category_popup = options.Class.extend({
        onBuilt: function () {
            this._super();
            this._openDialog();
        },
        _openDialog: function () {
            var self = this

            var dialog = new Dialog(this, {
                size: 'medium',
                title: _t('Enter YouTube Url'),
                $content: Qweb.render('theme_power_module.popup_window_content', {}),
                buttons: [
                    {
                        text: _t("Save"),
                        classes: 'btn-primary',
                        close: true,
                        click: function () {
                            var ytUrl = $('#youtube_url').val();
                            // alert(youtubeUrl);
                            self._showVideo(ytUrl);
                        }
                    },
                    {
                        text: _t("Cancel"),
                        close: true,
                        click:function(){
                            debugger
                            self.destroy();
                        }
                    }
                ]
            }).open();
        },
        _showVideo: function (ytUrl) {
            const iframeSrc = 'https://www.youtube.com/embed/' + this._embedSrc(ytUrl);
            var iframe = document.createElement('iframe');
            iframe.width = '1110px';
            iframe.height = '624px';
            iframe.src = iframeSrc;
            iframe.title = 'YouTube video player';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = 'allowFullscreen';

            this.$target.empty().append(iframe);

        },

        _embedSrc: function (ytUrl) {
            var regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w-]+)/;
            var match = ytUrl.match(regex);
            return match ? match[1] : null;
        },
        
        destroy: function () {
			this._super(...arguments);
			this.$el.find('.wt_anim_prod_left_home-container').html('');
		},
    });
});