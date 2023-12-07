
import Vue from 'vue';
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(ToolbarPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
        <br>
        <ejs-toolbar id="toolbar" width="600" scrollStep="50">
            <e-items>
                <e-item prefixIcon='e-cut-icon tb-icons' tooltipText='Cut'></e-item>
                <e-item prefixIcon='e-copy-icon tb-icons' tooltipText='Copy'></e-item>
                <e-item prefixIcon='e-paste-icon tb-icons' tooltipText='Paste'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-bold-icon tb-icons' tooltipText='Bold'></e-item>
                <e-item prefixIcon='e-underline-icon tb-icons' tooltipText='Underline'></e-item>
                <e-item prefixIcon='e-italic-icon tb-icons' tooltipText='Italic'></e-item>
                <e-item prefixIcon='e-color-icon tb-icons' tooltipText='Color-Picker'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-alignleft-icon tb-icons' tooltipText='Align-Left'></e-item>
                <e-item prefixIcon='e-alignright-icon tb-icons' tooltipText='Align-Right'></e-item>
                <e-item prefixIcon='e-aligncenter-icon tb-icons' tooltipText='Align-Center'></e-item>
                <e-item prefixIcon='e-alignjustify-icon tb-icons' tooltipText='Align-Justify'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-bullets-icon tb-icons' tooltipText='Bullets'></e-item>
                <e-item prefixIcon='e-numbering-icon tb-icons' tooltipText='Numbering'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-ascending-icon tb-icons' tooltipText='Ascending'></e-item>
                <e-item prefixIcon='e-descending-icon tb-icons' tooltipText='Descending'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-upload-icon tb-icons' tooltipText='Upload'></e-item>
                <e-item prefixIcon='e-download-icon tb-icons' tooltipText='Download'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-indent-icon tb-icons' tooltipText='Indent'></e-item>
                <e-item prefixIcon='e-outdent-icon tb-icons' tooltipText='Outdent'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-clear-icon tb-icons' tooltipText='Clear'></e-item>
                <e-item prefixIcon='e-reload-icon tb-icons' tooltipText='Reload'></e-item>
                <e-item prefixIcon='e-export-icon tb-icons' tooltipText='Export'></e-item>
            </e-items>
        </ejs-toolbar>
    <br/>
    </div>
`,

  name: 'app',
  data () {

}

});