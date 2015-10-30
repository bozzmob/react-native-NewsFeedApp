
'use strict';

var React = require('react-native');
var Entities = require('html-entities').AllHtmlEntities;
var entities = new Entities();

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
    var snippet = entities.decode(this.props.item.excerpt).replace(/(<p>|<\/p>)/g, "");
    return (
      <ScrollView style={[styles.inner, {backgroundColor: '#fff'}]}>
        <Image
          source={{uri: this.props.item.featured_image.guid}}
          style={styles.thumbnail}
        />
        <TouchableHighlight onPress={this.openLink}>
          <Text style={styles.open_link}>Open link</Text>
        </TouchableHighlight>
        <Text style={styles.title}>{entities.decode(this.props.item.title)}</Text>
        <Text style={styles.excerpt}>{snippet}</Text>
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
  open_link: {
     textAlign: 'right',
     paddingRight: 10,
     paddingTop: 10,
  },
  excerpt: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
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
