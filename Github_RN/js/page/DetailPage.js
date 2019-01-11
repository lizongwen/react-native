import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class DetailPage extends Component {
	static navigationOptions = {
        title: 'DetailPage1',
        headerBackTitle: '返回哈哈',//设置返回此页面的返回按钮文案，有长度限制
    };
  render() {
	NavigationUtil.navigation = this.props.navigation;
    return (
      <View style={styles.container}>
	  	<Text style={styles.welcome}>DetailPage</Text>
		  <Text onPress={() => {
					NavigationUtil.goPage({aa:1},'FetchDemo')
				}}>跳转到Fetch页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
