// ================
// STORE - liked
// ================
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _clicked = false;
var favs = [];

var LikeStore = assign({}, EventEmitter.prototype, {

  getFavs: function() {
      return favs;
  },

  getFavsTotal: function() {
      return favs.length;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case AppConstants.LIKED_PRESSED:
      // alert(action.item);
      if(!action.liked){
        favs.push(action.item);
      } else {
        // alert('unliked!');
        var index = favs.indexOf(action.item);
        if (index > -1) {
          favs.splice(index, 1);
        }

      }
      LikeStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = LikeStore;
