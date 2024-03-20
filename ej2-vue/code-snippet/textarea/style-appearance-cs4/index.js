
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
  <div class ='wrap'>
    <ejs-textarea id='default' placeholder="Enter your comments" cssClass="e-static-clear" showClearButton="true"></ejs-textarea>
  </div>
`,

   data: function() {
        return { }
    }

});