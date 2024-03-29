
'use strict';

var React = require('react-native');
var Entities = require('html-entities').AllHtmlEntities;
var entities = new Entities();

var InnerPage = require('./InnerPage');
var ItemCell = require('./ItemCell');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  TouchableHighlight,
  ActivityIndicatorIOS,
  TouchableOpacity,
  LinkingIOS,
  Image,
  ListView,
} = React;

var REQUEST_URL = 'https://www.prettylittlething.com/blog/?json_route=/posts&filter[posts_per_page]=20';

var HomeScene = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      animating: true,
      posts: 30,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    var posts = this.state.posts;
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true,
      });
    })
    .done();
  },

  onPress() {
    this.props.navigator.push({
      title: 'From TouchableHighlight',
      component: ForTouchScene,
      passProps: {
          textyo: {item},
        },
    });
  },

  render: function() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        alwaysBounceVertical={false}
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        style={styles.mainBody}
      />
      );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.containerloading}>
        <ActivityIndicatorIOS
          animating={this.state.animating}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      </View>
    );
  },

  selectItem: function(item: Object) {
    this.props.navigator.push({
      title: entities.decode(item.title),
      component: InnerPage,
      passProps: {item},
    });
  },


  renderItem: function(item) {
    return (
        <ItemCell
          onSelect={() => this.selectItem(item)}
          onHighlight={() => highlightRowFunc(sectionID, rowID)}
          onUnhighlight={() => highlightRowFunc(null, null)}
          item={item}
        />
    );
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


module.exports = HomeScene;
