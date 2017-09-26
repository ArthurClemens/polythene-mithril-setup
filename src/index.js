import m from "mithril";
import { RaisedButton, Dialog } from "polythene-mithril";
import { addFastClick } from "polythene-fastclick"; // optional
import { addTypography, addRoboto, ButtonCSS } from "polythene-css"; // optional

addRoboto();
addTypography();

ButtonCSS.addStyle(".themed-button", {
  color_light_background: "#ff9800",
});

const App = {
  view: () =>
    m("div", [
      m(RaisedButton, {
        label: "Open dialog",
        className: "themed-button",
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

m.mount(document.body, App);
