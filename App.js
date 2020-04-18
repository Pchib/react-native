import React, {Component} from 'react'
import {View} from 'react-native'
import AppNavigator from './components/AppNavigator'
import StatusBar from './components/StatusBar'
import {Colors, FontFamily} from './components/utils/Const';
import GlobalFont from 'react-native-global-font'

class App extends Component {
  
  componentDidMount() {
    // Apply global font
    GlobalFont.applyGlobal(FontFamily["Poppins-Regular"])
  }

  render() {
    return (
        <View style={{flex : 1}}>
          <StatusBar backgroundColor={Colors.red} barStyle="light-content"/>
          <AppNavigator/>
        </View>
    );
  }
}
export default App;
