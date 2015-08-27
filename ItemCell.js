'use strict';

var React = require('react-native');

var LikeBtn = require('./LikeBtn');

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
      <View style={styles.item_cell}>
        <View>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <TouchableOpacity onPress={this.props.onSelect}>
          <Image
            source={{uri: this.props.item.featured_image.guid}}
            style={styles.thumbnail_img}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.item_cell_ctrls}>
          <TouchableHighlight style={styles.view_more} onPress={this.props.onSelect}>
            <Text style={styles.more}>View More</Text>
          </TouchableHighlight>
        </View>
        <LikeBtn/>
      </View>
      );
  }
});


var styles = StyleSheet.create({
  item_cell: {
    flex: 1,
    marginBottom: 50,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item_cell_ctrls: {
    //backgroundColor: 'red',
  },
  view_more: {
    width:100,
    backgroundColor:'yellow'
  },
  more: {
    fontSize: 10,
    textAlign: 'right',
  },
  loading: {
    fontSize: 20,
  },
  thumbnail_img: {
    height: 300,
    resizeMode: 'cover'
  },
});


module.exports = ItemCell;
