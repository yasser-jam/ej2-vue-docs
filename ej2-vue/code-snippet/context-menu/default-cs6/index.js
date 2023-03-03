
import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ContextMenuPlugin);
Vue.use(DialogPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div id="target">Right click / Touch hold to open the ContextMenu</div>
<ejs-dialog id="dialog" content="This file can be saved as PDF" :buttons='buttons' width='200px' height='110px' :visible='false'></ejs-dialog>
<ejs-contextmenu target='#target' :items='menuItems' :select='onSelect'></ejs-contextmenu>
</div>
`,

    data () {
        return {
            menuItems:[
                {
                    text: 'Back'
                },
                {
                    text: 'Forward'
                },
                {
                    text: 'Reload'
                },
                {
                    separator: true
                },
                {
                    text: 'Save As...'
                },
                {
                    text: 'Print'
                },
                {
                    text: 'Cast'
                }],
            buttons: [{
                buttonModel: {
                    isPrimary: true,
                    content: 'Submit',
                    cssClass: 'e-flat',
                },
                click: function () {
                    this.hide();
                }
            }],
        };
    },
    methods: {
        onSelect: function(args ) {
            if(args.item.text === 'Save As...') {
                if (document.getElementById('dialog_dialog-content')) {
                    document.getElementById("dialog").ej2_instances[0].show();
                }
                else {
                    document.getElementById("dialog").ej2_instances[0].appendTo('#dialog');
                }
            }
        }
    }

});