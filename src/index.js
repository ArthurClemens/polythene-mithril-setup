import m from "mithril";
import { RaisedButton, Dialog } from "polythene-mithril";
import { addFastClick } from "polythene-fastclick"; // optional
import { addLayoutStyles } from "polythene-utilities"; // optional
import { addTypography, addRoboto } from "polythene-style"; // optional

addLayoutStyles(); // not required
addRoboto();
addTypography();

const app = {
  view: () =>
    m("div", [
      m(RaisedButton, {
        label: "Open dialog",
        events: {
          onclick: () => {
            Dialog.show({
              title: "Dialog title",
              body: "Click background to hide or press ESCAPE.",
              backdrop: true
            });
          }
        }
      }),
      m(Dialog)
    ])
};

m.mount(document.body, app);
