
import Vue from "vue";
import { TreeGridPlugin, Freeze } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height=310 :frozenColumns='2' :frozenRows='3' :allowSelection='false'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width='110' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='230'></e-column>
                <e-column field='startDate' headerText='Start Date' width='120' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='120' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='120' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='120'></e-column>
                <e-column field='approved' headerText='Approved' width='110' textAlign='Left'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
`,

  data() {
    return {
      data: sampleData
    };
  },
  provide: {
    treegrid: [Freeze]
  }

});