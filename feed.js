
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
  TouchableOpacity,
  LinkingIOS,
  Image,
  ListView,
} = React;

var REQUEST_URL = 'https://www.prettylittlething.com/blog/?json_route=/posts&filter[posts_per_page]=20';


var InnerPage = React.createClass({

 openLink: function(event) {
    LinkingIOS.openURL('https://www.google.co.uk/')
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


var HomeScene = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
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
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        style={styles.listView}
      />
      );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.containerloading}>
       <Text style={styles.loading}>
        loading ....
      </Text>
       <Text style={styles.loading}>
        loading ....
      </Text>
       <Text style={styles.loading}>
        loading ....
      </Text>
      </View>
    );
  },

  selectItem: function(item: Object) {
    this.props.navigator.push({
      title: item.title,
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

/*

var pltApp = React.createClass({

  render: function() {
    return (
      <NavigatorIOS ref="nav" style={styles.container} initialRoute={{
        component: HomeScene,
        title: 'Prettylittlething',
      }} />
    );
  }

});

*/

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
    width: 300,
    height: 300,
  },
});


module.exports = HomeScene;
