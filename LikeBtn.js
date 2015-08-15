
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
        <TouchableOpacity onPress={this.handleClick}>
           <Image source={icon} style={styles.heart}/>
        </TouchableOpacity>
      </View>
    );
  }

});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    marginTop: 30,
    textAlign: 'center',
  },

  heart: {
    width: 20,
    height: 20,
  },
});


module.exports = LikeBtn;
