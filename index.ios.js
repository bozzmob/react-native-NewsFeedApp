'use strict';

var React = require('react-native');

var HomeScene = require('./feed');



var {
  AppRegistry,
  TabBarIOS,
  NavigatorIOS,
  View,
  Text,
  StyleSheet
} = React;


var pltApp = React.createClass({

  getInitialState() {
    return {
      selectedTab: 'TabOne',
      notifCount: 0,
      presses: 0,
    };
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
                  title: 'Prettylittlething',
                  component: HomeScene }}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Tab Two"
          systemIcon="favorites"
          selected={this.state.selectedTab === 'TabTwo'}
          onPress={() => {
            this.setState({
              selectedTab: 'TabTwo',
            });
          }}>
          <View>
              <Text style={styles.content}>My favorites</Text>
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


AppRegistry.registerComponent('pltApp', () => pltApp);
