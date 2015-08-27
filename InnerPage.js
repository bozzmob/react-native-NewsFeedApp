
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
  },
  title: {
    fontSize: 20,
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
  more: {
    fontSize: 20,
    textAlign: 'right',
  },
  inner: {
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
