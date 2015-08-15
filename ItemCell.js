
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
  ActivityIndicatorIOS,
  TouchableOpacity,
  LinkingIOS,
  Image,
  ListView,
} = React;


var ItemCell = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this.props.onSelect}>
          <Image
            source={{uri: this.props.item.featured_image.guid}}
            style={styles.thumbnail}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <TouchableHighlight onPress={this.props.onSelect}>
            <Text style={styles.more}>more</Text>
          </TouchableHighlight>
        </View>
        <LikeBtn/>
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


module.exports = ItemCell;
