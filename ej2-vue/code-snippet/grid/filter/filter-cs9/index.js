
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-button ref='button' cssClass='e-outline' v-on:click.native="onSingleValueFilter">
    Filter with single value</ejs-button>
    <ejs-button ref='button' style="margin-left: 10px " cssClass='e-outline' v-on:click.native="onMultipleValueFilter">
      Filter with multiple values</ejs-button>
    <ejs-grid ref='grid' style="margin-top: 10px" :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions'
      height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
</div>
`,

  data() {
    return {
      data: data,
      filterOptions: {
        type: 'Excel'
      },
    };
  },
  methods: {
    onSingleValueFilter: function() {
      this.$refs.grid.clearFiltering();
       // filter OrderID column with single value
      this.$refs.grid.filterByColumn('OrderID', 'equal', 10248);
    },
    onMultipleValueFilter: function () {
      this.$refs.grid.clearFiltering();
      // filter CustomerID column with multiple values
      this.$refs.grid.filterByColumn('CustomerID', 'equal', [
        'VINET',
        'TOMSP',
        'ERNSH',
      ]); 
    }
  },
  provide: {
    grid: [Filter]
  }

});