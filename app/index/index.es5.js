var m = require('mithril');
var button = require('polythene/button/button');
var dialog = require('polythene/dialog/dialog');
require('polythene/theme/theme'); // optional

var app = {};
app.view = function() {
    return m('div', [
        m.component(button, {
            label: 'Open dialog',
            raised: true,
            events: {
                onclick: function () {
                    dialog.show({
                        title: 'Dialog title',
                        body: 'some text'
                    });
                }
            }
        }),
        m.component(dialog)
    ]);
};

m.mount(document.body, app);
