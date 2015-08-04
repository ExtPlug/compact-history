define(function (require, exports, module) {

  const Plugin = require('extplug/Plugin');

  const ITEM_HEIGHT = 20;

  const CompactHistory = Plugin.extend({
    name: 'Compact History',
    description: 'Lays out the room history in a much more compact view.',

    style: {
      '#history-panel .media-list.history .playlist-media-item:not(.selected)': {
        'height': `${ITEM_HEIGHT}px`,

        'img': {
          'height': `${ITEM_HEIGHT}px`,
          'width': `${ITEM_HEIGHT * 1.5}px`,
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
            'height': `${ITEM_HEIGHT}px`,
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
          'height': `${ITEM_HEIGHT}px`,
          'top': '0px',
          'div': {
            'height': `${ITEM_HEIGHT}px`,
            'i': {
              'top': '-4px'
            }
          }
        }
      }
    }

  });

  module.exports = CompactHistory;

});
