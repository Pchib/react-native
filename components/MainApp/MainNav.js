import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import {Colors} from '../utils/Const';
import {Animated,Easing} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from 'react-native-paper';
import Home from './home/Home'
import Account from './account/Account';
import {createStackNavigator} from 'react-navigation-stack'
const Home2 = () => null

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const thisSceneIndex = scene.index;
            const width = layout.initWidth;

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            });
            return { transform: [ { translateX } ] }
        },
    }
};

const HomeStack = createStackNavigator({
    Home : {
        screen : Home,
        navigationOptions: {
            header: null
        },
    },
},{
    transitionConfig,
    initialRouteName : 'Home'
})
const Nav = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                title: '',
                tabBarIcon: ({tintColor, focused}) => (
                    <MaterialCommunityIcons size={24} name='home-outline' style={{color: tintColor}}/>
                ),
            },
        },
        Library: {
            screen: Home2,
            navigationOptions: {
                title: '',
                tabBarIcon: ({tintColor, focused}) => (
                    <MaterialCommunityIcons size={24} name='tag-heart-outline' style={{color: tintColor}}/>
                ),
            },
        },
        History: {
            screen: Home2,
            navigationOptions: {
                title: '',
                tabBarIcon: ({tintColor, focused}) => (
                    <MaterialCommunityIcons size={24} name='camera-enhance-outline' style={{color: tintColor}}/>
                ),
            },
        },
        Account: {
            screen: (props) => (<Account {...props}   />),
            navigationOptions: {
                title: '',
                tabBarIcon: ({tintColor, focused}) => (
                    <MaterialCommunityIcons size={24} name='account-outline' style={{color: tintColor}}/>
                ),
            },
        },
    },
    {
        showIcon: true,
        initialRouteName: 'Home',
        activeColor: Colors.red,
        inactiveColor: Colors.lightBlack,
        barStyle: {backgroundColor: Colors.background, elevation: 0},
    },
);

const App = createAppContainer(Nav);

export default class MainNav extends Component {

    componentDidMount() {
        console.log(this.props.navigation)
    }

    render() {
        return (
            <Provider>
                <App screenProps={{navigation : this.props.navigation}}/>
            </Provider>
        );
    }
}
