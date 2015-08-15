
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
           <Image source={icon} />
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

  containerloading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#Fff',
  },
  excerpt: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1
  },
  more: {
    fontSize: 20,
    textAlign: 'right',
  },
  inner: {
    padding: 10,
    flex: 1
  },
  loading: {
    fontSize: 20,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
});


module.exports = LikeBtn;
