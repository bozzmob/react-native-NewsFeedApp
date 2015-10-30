
'use strict';

var React = require('react-native');


var LikeActions = require('../actions/LikeActions');

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

 handleClick: function(item) {
  //alert(item);
  this.setState({
    liked: !this.state.liked
  });
  LikeActions.liked(item, this.state.liked);

 },

 render: function() {
   const {item} = this.props;
   var icon = this.state.liked ? require('image!my-icon-active') : require('image!my-icon-inactive');
   return (
      <View>
        <TouchableOpacity style={styles.likeBtn} onPress={this.handleClick.bind(this, item)}>
           <Image source={icon} style={styles.heart}/>
        </TouchableOpacity>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  likeBtn: {
    width:30,
    height: 30,
    // backgroundColor: 'blue'
  },
  heart: {
    width: 15,
    height: 15,
  }
});


module.exports = LikeBtn;
