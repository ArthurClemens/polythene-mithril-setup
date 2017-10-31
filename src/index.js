import m from "mithril";
import { Dialog } from "polythene-mithril-dialog";
import { RaisedButton } from "polythene-mithril-raised-button";
import { addFastClick } from "polythene-fastclick"; // optional

import "polythene-css/dist/polythene.css";            // Component CSS
import "polythene-css/dist/polythene-typography.css"; // Default Material Design styles including Roboto font

addFastClick()

const App = {
  view: () =>
    m("div", [
      m(RaisedButton, {
        label: "Open dialog",
        events: {
          onclick: () => {
            Dialog.show({
              /* note the Dialog component is below the other elements in the app */
              title: "Hello",
              body: "Click background to hide or press ESCAPE.",
              backdrop: true
            });
          }
        }
      }),
      m(Dialog)
    ])
};

m.mount(document.body, App);
