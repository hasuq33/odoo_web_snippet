 // selector:'.my-class',
    
    // events: {
    //     'click #openPopup': '_onClickOpenPopup',
    // },
    
    // _onClickOpenPopup: function(){
    //     const videoUrl = prompt("Enter your YouTube Video URL: ");

    //     if(videoUrl){
    //         const iframeSrc = 'https://www.youtube.com/embed/' + videoUrl.split('v=')[1];
    //         const iframe = document.createElement('iframe');
    //         iframe.width = '560px';
    //         iframe.height='315px';
    //         iframe.src = iframeSrc;
    //         iframe.title='YouTube video player';
    //         iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    //         iframe.allowFullscreen = 'allowFullscreen';

    //         // const popup = window.open('','YouTube Video','width=600,height=400');
    //         // popup.document.body.appendChild(iframe);
    //         const videoContainer = document.getElementById('videoContainer');
    //         videoContainer.appendChild(iframe);

    //     }
    // }
    
    // var Dialog = require('web.Dalog');

    // odoo.define('theme_power_module.main_script',function(require){
//     'use strict';

//     var Dialog = require('web.Dialog');
//     return Dialog.extend({
//           xmlDependencies : Dialog.prototype.xmlDependencies.concat(['/theme_power_module/static/src'])
//     });
// });


 // disabledInEditableMode: false,

        // start: function(){
        //     debugger
        //     this._super.apply(this,arguments);
        //     myFunction();
        // }
/*Below code is about when You Click on the button it will open the popup Box.*/
        odoo.define('theme_power_module.s_open_category_popup', function (require) {
            'use strict';
        
            var publicWidget = require('web.public.widget');
            const { MediaDialogWrapper } = require('@web_editor/components/media_dialog/media_dialog');
            const { ComponentWrapper } = require('web.OwlCompatibility');
            var ajax = require('web.ajax');
            var core = require('web.core');
            var Dialog = require('web.Dialog');
            var _t = core._t;
            const options = require('web_editor.snippets.options');
            var Qweb = core.qweb;
            debugger
            var Dynamic= publicWidget.Widget.extend({
                // start: function () {
                //     debugger
                //     this.onBuilt();
                //     return this._super.apply(this, arguments);
                // },
                selector: '.wt_anim_prod_left_home,.s_open_category_popup',
                disabledInEditableMode: false,
                events:{
                  'click':'onBuilt',
                },
                onBuilt: function () {
                    // this._super();
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
                            },
                            {
                                text: _t("Cancel"),
                                close: true,
                            }
                        ]
                    }).open();
                }
            });
        
            publicWidget.registry.s_open_category_popup = Dynamic;
            return Dynamic;
        });        