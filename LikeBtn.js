
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  LinkingIOS,
  Image,
  ListView,
} = React;



var LikeBtn = React.createClass({

  getInitialState: function() {
    return {
      liked: false,
    };
  },

 handleClick: function(event) {
  this.setState({liked: !this.state.liked});
 },

 render: function() {
  var icon = this.state.liked ? require('image!my-icon-active') : require('image!my-icon-inactive');
  // var text = this.state.liked ? 'liked <3' : 'like this';
   return (
      <View>
        <TouchableOpacity style={styles.likeBtn} onPress={this.handleClick}>
           <Image source={icon} style={styles.heart}/>
        </TouchableOpacity>
      </View>
    );
  }

});


var styles = StyleSheet.create({
  likeBtn: {
        width:100,
        height: 100,
        backgroundColor: 'blue'
   },
  heart: {
    width: 15,
    height: 15,
  }
});


module.exports = LikeBtn;
