
import Vue from "vue";
import { ToastPlugin, Toast, ToastOpenArgs, ToastCloseArgs, ToastBeforeOpenArgs } from "@syncfusion/ej2-vue-notifications";
import { DropDownListPlugin, DropDownList, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { compile, Browser, closest } from '@syncfusion/ej2-base';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click.native="showBtnClick">Show Toast</ejs-button>
       <div id='element'></div>
       <script id="template_toast_ele" type="text/x-template">
    <div id='template_toast'>
        <div class="horizontal-align">
            <div class='toast-content'>
                <div class='toast-title'>
                    Weekend Alarm
                </div>
                <div class='toast-message'> With traffic, its likely to take 45 minutes to get to jenny's 24th Birthday Bash at Hillside Bar, 454 E.
                    Olive Way by 10:00PM </div>
            </div>
        </div>
        <img src="https://ej2.syncfusion.com/demos/src/toast/resource/map.jpg" width="100%" height="70%">
    </div>
</script>
   </div>
`,

  name: 'app',
  mounted: function() {
       this.toastObj = new Toast({
           template: document.getElementById('template_toast_ele').innerHTML,
           position:  { X: 'Right', Y: 'Bottom' },
           target: document.body,
           extendedTimeout: 0,
           timeOut: 120000,
       });
      this.toastObj.appendTo('#element');
      this.toastObj.show();
  },
  methods: {
      showBtnClick: function(args){
          this.toastObj.show();
      }
  }

});