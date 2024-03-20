
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'> 
        <div id ='input-container'>
        <ejs-textarea id="default" ref="textareaRef"></ejs-textarea>
        <br/>
        <button id="button">Focus-Out</button>
        </div>
    </div>
`,

   data: function() {
        return { }
    },
    mounted: function () {
        document.getElementById('button').onclick = () => {
            this.$ref.textareaRef.focusOut();
        };
    }

});