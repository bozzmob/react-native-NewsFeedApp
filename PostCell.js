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

module.exports = PostCell;
