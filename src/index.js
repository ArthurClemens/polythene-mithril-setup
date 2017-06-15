import m from "mithril";
import { Button, Dialog } from "polythene";
import { addLayoutStyles } from 'polythene-utilities'; // not required
import { addRoboto, addTypography } from 'polythene-motif';

addLayoutStyles(); // not required
addRoboto();
addTypography();

const app = {
  view: () =>
    m("div", [
      m(Button, {
        label: "Open dialog",
        raised: true,
        events: {
          onclick: () => {
            Dialog.show({
              title: "Dialog title",
              body: "Click background to hide.",
              backdrop: true
            });
          }
        }
      }),
      m(Dialog)
    ])
};

m.mount(document.body, app);
