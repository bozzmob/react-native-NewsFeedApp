
'use strict';

var React = require('react-native');

var LikeStore = require('../stores/LikeStore');

var InnerPage = require('./InnerPage');
var ItemCell = require('./ItemCell');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ListView,
  ScrollView,
  Image
} = React;

// var REQUEST_URL = 'https://www.prettylittlething.com/blog/?json_route=/posts&filter[posts_per_page]=20';

function getFavsState(){
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return {
    dataSource: ds.cloneWithRows(LikeStore.getFavs()),
    allFavs: LikeStore.getFavs()
  };
}

var Favs = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(LikeStore.getFavs()),
      allFavs: LikeStore.getFavs()
    };
  },

  componentDidMount: function() {
    LikeStore.addChangeListener(this._onChange);
    this.setState(getFavsState());
  },

  componentWillUnmount: function() {
    LikeStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getFavsState());
  },

  renderItem: function(item) {
    var itemId = item.id;
    return (
      <View style={styles.container}>
        <Text>{item}</Text>
      </View>
    );
  },

  render: function() {

    return (
      <ScrollView>
        <Text>
          Favorites
        </Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
      />
    </ScrollView>
      );
  },


  selectItem: function(item: Object) {
    this.props.navigator.push({
      title: item.title,
      component: InnerPage,
      passProps: {item},
    });
  },


});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainBody: {
    paddingTop:40,
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    marginTop: 30,
    textAlign: 'center',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
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
  loading: {
    fontSize: 20,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
});


module.exports = Favs;
