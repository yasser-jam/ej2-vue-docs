
import Vue from "vue";
import { GridPlugin, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(MessagePlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-message v-if="showWarning" id="msg_warning" content="No Records" cssClass="e-content-center" severity="Warning" style="margin-bottom:5px"
    ></ejs-message>
    <ejs-button cssClass="e-success" v-on:click.native="click">Get Filtered Data</ejs-button>
    <ejs-button style='margin-left:5px' cssClass="e-danger" v-on:click.native="clear">Clear</ejs-button>
    <ejs-grid style="margin-top:5px" ref="grid" :dataSource="data" :allowFiltering="true" :allowPaging="true" :height="280">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
      </e-columns>
    </ejs-grid>
    <div v-if="showRecords" class="e-content">
      <h3>Filtered Records</h3>
      <ejs-grid ref="filteredgrid" :dataSource="filteredData" :allowPaging="true" :height="200">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</div>
`,

  data() {
    return {
      data: data,
      filteredData: [],
      showRecords: false,
      showWarning: false,
    };
  },
  methods: {
    click: function () {
      this.filteredData = this.$refs.grid.getFilteredRecords();
      if (this.filteredData.length) {
        this.showRecords= true;
        this.showWarning = false;
      } else {
        this.showRecords = false;
        this.showWarning = true;
      }
    },
    clear: function () {
      this.$refs.grid.clearFiltering();
      this.showRecords = false;
      this.showWarning = false;
    }
  },
  provide: {
    grid: [Filter, Page]
  }

});