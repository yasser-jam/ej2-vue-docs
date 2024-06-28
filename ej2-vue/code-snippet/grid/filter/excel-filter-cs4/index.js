
import Vue from "vue";
import { GridPlugin, Filter, } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

var itemTemplate = Vue.component('itemTemplate', {
  data: () => ({}),
  template: `<div>
     <span>{{data.Delivered === true ? 'Delivered' : 'Not Delivered'}} </span>
     </div>`,
  components: {},
});

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
        <e-columns>
          <e-column field="CategoryName"  headerText="Category Name"  width="120" ></e-column>
          <e-column field="Delivered"  headerText="Delivered"  width="120" displayAsCheckBox="true" :filter="columnFilterSettings"></e-column>
          <e-column field="ProductID" headerText="ProductID"  width="120" ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
      filterOptions: {
        type: 'Excel'
      },
      columnFilterSettings: {
        type: 'CheckBox',
        itemTemplate: function () {
          return {
            template: itemTemplate,
          };
        },
      }
    };
  },
  provide: {
    grid: [Filter]
  }
});