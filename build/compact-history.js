

define('extplug/compact-history/main',['require','exports','module','extplug/Plugin','underscore','jquery'],function (require, exports, module) {

  var Plugin = require('extplug/Plugin');
  var _ = require('underscore');
  var $ = require('jquery');

  var ITEM_HEIGHT = 20;

  var CompactHistory = Plugin.extend({
    name: 'Compact History',
    description: 'Lays out the room history in a much more compact view.',

    // We'll just use CSS
    enable: function enable() {
      this._super();
      this.Style({
        '#history-panel .media-list.history .playlist-media-item:not(.selected)': {
          'height': '' + ITEM_HEIGHT + 'px',

          'img': {
            'height': '' + ITEM_HEIGHT + 'px',
            'width': '' + ITEM_HEIGHT * 1.5 + 'px',
            'margin-top': '0px'
          },

          '.score': {
            'height': 'auto',
            'width': 'auto',
            'top': '0px',
            'left': '65px',
            '.item': {
              'margin-right': '10px'
            }
          },

          '.meta': {
            'height': 'auto',
            'span': {
              'height': '' + ITEM_HEIGHT + 'px',
              'top': '0px'
            },
            '.author': {
              'left': '120px',
              'right': '300px',
              'width': 'auto'
            },
            '.name': {
              'right': '125px'
            }
          },

          '.actions': {
            'height': '' + ITEM_HEIGHT + 'px',
            'top': '0px',
            'div': {
              'height': '' + ITEM_HEIGHT + 'px',
              'i': {
                'top': '-4px'
              }
            }
          }
        }
      });
    }

  });

  module.exports = CompactHistory;
});
