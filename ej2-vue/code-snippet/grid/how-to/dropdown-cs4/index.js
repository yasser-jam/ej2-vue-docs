
import Vue from "vue";
import {
  GridPlugin,
  Page,
  Freeze,
  Toolbar,
  Edit
} from "@syncfusion/ej2-vue-grids";
import { DatePicker } from "@syncfusion/ej2-calendars";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

let elem;
let datePickerObj;

;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :frozenColumns="2" :dataSource="data" :editSettings="editSettings" :toolbar="toolbar"
      height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" :isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" textAlign="Right" width="120"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" format="yMd"
          :edit="dpParams" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true
      },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
      dpParams: {
        create: function() {
          elem = document.createElement("input");
          return elem;
        },
        read: () => {
          return datePickerObj.value;
        },
        destroy: () => {
          datePickerObj.destroy();
        },
        write: args => {
          datePickerObj = new DatePicker({
            value: new Date(args.rowData[args.column.field]),
            floatLabelType: "Never"
          });
          datePickerObj.appendTo(args.element);
        }
      }
    };
  },
  provide: {
    grid: [Page, Edit, Toolbar, Freeze]
  }

});