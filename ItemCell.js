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
          <View style={styles.cell_header}>
              <Image
                source={{uri: 'http://images.sodahead.com/polls/000787789/polls_2275601881_271b7d5517_5040_965111_answer_3_xlarge.jpeg'}}
                style={styles.user_thumb}
              />
              <Text style={styles.title}>{this.props.item.title}</Text>
          </View>

          <TouchableOpacity onPress={this.props.onSelect}>
              <Image
                source={{uri: this.props.item.featured_image.guid}}
                style={styles.thumbnail_img}
              />
          </TouchableOpacity>

          <View style={styles.item_cell_ctrls}>
              <LikeBtn style={styles.like_btn}/>
              <TouchableOpacity style={styles.view_more} onPress={this.props.onSelect}>
                  <Text style={styles.view_more_text}>VIEW MORE</Text>
              </TouchableOpacity>
          </View>

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
  cell_header: {
      padding: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  user_thumb: {
    width:40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  title: {
    fontSize: 13,
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'right',
    width:300,
    alignSelf: 'flex-start',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item_cell_ctrls: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  view_more: {
    width:100,
  },
  view_more_text: {
    textAlign: 'right',

  },
  like_btn: {
      alignSelf: 'flex-start',
      width: 150,
  },
  thumbnail_img: {
    height: 300,
    resizeMode: 'cover'
  },
});


module.exports = ItemCell;
