
  import Vue from "vue";
  import { AppBarPlugin, MenuPlugin } from "@syncfusion/ej2-vue-navigations";
  import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

  Vue.use(AppBarPlugin);
  Vue.use(MenuPlugin);
  Vue.use(ButtonPlugin);

  ;
new Vue({
	el: '#app',
	template: `
  <div class="control-container">
    <ejs-appbar colorMode="Primary">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
      <ejs-menu cssClass="e-inherit" :items="companyMenuItems"></ejs-menu>
      <ejs-menu cssClass="e-inherit" :items="productMenuItems"></ejs-menu>
      <ejs-menu cssClass="e-inherit" :items="aboutMenuItems"></ejs-menu>
      <ejs-menu cssClass="e-inherit" :items="carrerMenuItems"></ejs-menu>
      <div class="e-appbar-spacer"></div>
      <ejs-button cssClass="e-inherit">Login</ejs-button>
    </ejs-appbar>
  </div>
`,

    data: function () {
      return {
        companyMenuItems: [
          {
            text : 'Company',
            items: [
              { text: 'About Us' },
              { text: 'Customers' },
              { text: 'Blog' },
              { text: 'Careers' }
            ]
          }
        ],
        productMenuItems: [
          {
            text : 'Products',
            items: [
              { text: 'Developer' },
              { text: 'Analytics' },
              { text: 'Reporting' },
              { text: 'Help Desk' }
            ]
          }
        ],
        aboutMenuItems: [
          {
            text : 'About Us'
          }
        ],
        carrerMenuItems: [
          {
            text : 'Carrers'
          }
        ]
      };
    }
  
});