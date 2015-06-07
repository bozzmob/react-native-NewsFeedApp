/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */


var React = require('react-native');
var {
  ActivityIndicatorIOS,
  ListView,
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  Image,
  ListView,
  ScrollView,
  TextInput,
  View,
} = React;












var MyView = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
   fetch('https://www.prettylittlething.com/blog/?json_route=/posts&filter%5Bposts_per_page%5D=35')
   .then((response) => response.json())
   .then((responseData) => {
    this.setState({
     dataSource: this.state.dataSource.cloneWithRows(responseData),
     loaded: true,
   });
  })
   .done();
  },

  renderPostCell: function(post){
    return(
      <PostCell
        onSelect={() => this.selectPost(post)}
        post={post}/>
    );
  },

  selectPost: function(post){
    this.props.navigator.push({
      title: post.title,
      component: PostView,
      backButtonTitle: 'Custom Back',
      passProps: {post: post,
                  post_id: post.ID,
                  post_content: post.content,
                  post_title: post.title,
                  post_src: post.featured_image.guid,
                }
    });
  },

  render: function() {
   return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderPostCell}
        style={styles.postsListView}/>
    );
  },
});


var PostCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
      <View style={styles.container}>
        <Image
       source={{uri: this.props.post.featured_image.guid}}
       style={styles.detailsImage}
        />
          <Text style={styles.title}>
          {this.props.post.title}
        </Text>
      </View>
      </TouchableHighlight>
    );
  }
});


var PostView = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.container}>
             <Text style={styles.posttitle}>       
            {this.props.post.title}
          </Text>   
             <Image
           source={{uri: this.props.post_src}}
           style={styles.innerimage}
            />  
          <Text style={styles.title}>       
            {this.props.post_id}
          </Text>
          <Text style={styles.title}>       
            {this.props.post_content}
          </Text>
      </ScrollView>
    );
  }
});



var styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     detailsImage: {
      width: 400,
      height: 400
     },
     wrapper: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
          marginTop: 20
     },
     welcome: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
     },
     innerimage: {
      marginTop:90,
      width:400,
      height:400,
     },
     title: {
           fontSize: 20,
          textAlign: 'center',
          margin: 10,     
     },
     posttitle: {
         fontSize: 20,
        textAlign: 'center', 
         marginTop: 80,    
     },
    item: {
       flex: 1,
         backgroundColor: '#eeeeee',
         margin: 3,
         width: 300
    },
    logo: {
      width: 400,
      height: 400
    }
});

module.exports = MyView;
