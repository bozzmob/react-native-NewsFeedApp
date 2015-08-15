
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  TouchableHighlight,
  TouchableOpacity,
  LinkingIOS,
  Image,
  ListView,
} = React;


var InnerPage = React.createClass({

 openLink: function(event) {
    LinkingIOS.openURL('https://www.example.com/')
 },

  render: function() {
    return (
      <ScrollView style={[styles.inner, {backgroundColor: '#fff'}]}>
        <Image
          source={{uri: this.props.item.featured_image.guid}}
          style={styles.thumbnail}
        />
        <TouchableHighlight onPress={this.openLink}>
          <Text>Open link</Text>
        </TouchableHighlight>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <Text style={styles.excerpt}>{this.props.item.excerpt}</Text>
      </ScrollView>
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
    height: 300,
    resizeMode: 'cover'
  },
});


module.exports = InnerPage;
