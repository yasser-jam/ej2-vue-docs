
import Vue from "vue";
import { TimelinePlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(TimelinePlugin);

new Vue({
  el: '#app',
  template: `
<div class="container" style="height:250px">
  <ejs-timeline id="timeline" css-class="custom-connector">
    <e-items>
      <e-item content='Eat' css-class="state-initial" />
      <e-item content='Code' css-class="state-intermediate" />
      <e-item content='Repeat' />
    </e-items>
  </ejs-timeline>
</div>
`,

  name: 'app',
  data() {
    return {
    }
  }
});