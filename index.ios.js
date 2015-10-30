/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var HomeScene = require('./App/components/home-screen.js');
var Favs = require('./App/components/favs-page.js');

var LikeStore = require('./App/stores/LikeStore');

var React = require('react-native');
var {
  AppRegistry,
  TabBarIOS,
  NavigatorIOS,
  View,
  Text,
  StyleSheet
} = React;

function getState(){
  return {
    selectedTab: 'TabOne',
    notifCount: LikeStore.getFavsTotal(),
    presses: 0,
  };
}

var NewsFeedApp = React.createClass({

  getInitialState() {
    return {
      selectedTab: 'TabOne',
      notifCount: LikeStore.getFavsTotal(),
      presses: 0,
    };
  },

  componentDidMount: function() {
    LikeStore.addChangeListener(this._onChange);
    this.setState(getState());
  },

  componentWillUnmount: function() {
    LikeStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getState());
  },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Styles"
          systemIcon="search"
          selected={this.state.selectedTab === 'TabOne'}
          onPress={() => {
            this.setState({
              selectedTab: 'TabOne',
            });
          }}>
          <NavigatorIOS style={styles.nav}
            initialRoute={{
              title: 'News Feed App',
              component: HomeScene }}
              />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Tab Two"
            systemIcon="favorites"
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'TabTwo'}
            onPress={() => {
              this.setState({
                selectedTab: 'TabTwo',
              });
            }}>
            <View>
              <Favs/>
            </View>
          </TabBarIOS.Item>
        </TabBarIOS>
      );
  }
});

var styles = StyleSheet.create({
  nav: {
    flex: 1
  },
  myPage: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 64
  }
});

AppRegistry.registerComponent('NewsFeedApp', () => NewsFeedApp);
