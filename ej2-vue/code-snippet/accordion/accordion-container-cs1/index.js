
import Vue from 'vue';
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(AccordionPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-accordion>
          <div>
                <div>
                    <div> ASP.NET </div>
                </div>
                <div>
                    <div> Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications
                        and XML Web services </div>
                </div>
            </div>
            <div>
                <div>
                    <div> ASP.NET MVC </div>
                </div>
                <div>
                    <div> The Model-View-Controller (MVC) architectural pattern separates an application into three main components:
                        the model, the view, and the controller </div>
                </div>
            </div>
            <div>
                <div>
                    <div> JavaScript </div>
                </div>
                <div>
                    <div> JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part
                        of web browsers so that client-side scripts could interact with the user, control the browser </div>
                </div>
            </div>
    </ejs-accordion>
  </div>
`,

  name: 'app',

});