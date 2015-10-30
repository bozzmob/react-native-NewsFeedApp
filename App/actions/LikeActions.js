// ================
// Like ACTIONS
// ================
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var LikeActions = {

  /**
   * @param  {string} text
   */
  liked: function(item, liked) {
    AppDispatcher.dispatch({
      actionType: AppConstants.LIKED_PRESSED,
      item: item,
      liked: liked
    });
  },

};

module.exports = LikeActions;
