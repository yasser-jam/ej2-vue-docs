
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

Vue.use(SidebarPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-sidebar id="default" ref="leftsidebar" :width="leftWidth" :type="leftType">
          <div class="title"> Left Sidebar content</div>
        </ejs-sidebar>

        <ejs-sidebar id="default1" ref="rightsidebar" :width="width"  :position="position"
           :type="type">
           <div class="title">Right Sidebar content</div>
        </ejs-sidebar>
    <div class="e-main-content">
           <p>Place your main content here.....</p>
        <div id="button-align">
            <button ejs-button id="toggle" class="e-btn e-info" v-on:click="leftToggle">Toggle Sidebar1</button>
        </div>
        <div id="button-align">
          <button ejs-button id="toggle2" class="e-btn e-info" v-on:click="rightToggle">Toggle Sidebar2</button>
        </div>
    </div>
</div>
`,

       data () {
          return {
         leftWidth: '250px'
         leftType: 'Push'
         width : '250px',
         position: 'Right',
         type: 'Push'
     }
     },
     methods: {
        leftToggle :function() {
          this.$refs.leftsidebar.toggle();
        },
        rightToggle: function() {
         this.$refs.rightsidebar.toggle();
        }
    }

});