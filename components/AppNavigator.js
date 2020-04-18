import React, {Component} from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import Welcome from './Welcome';
import MainNav from './MainApp/MainNav';
const MainNavigator = createSwitchNavigator({
    Welcome: {
        screen: Welcome,
    },
    MainNav: {
        screen: MainNav,
    }
}, {
    initialRouteName: 'Welcome',
});

const MyNav = createAppContainer(MainNavigator);

export default class AppNavigator extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <MyNav/>
        );
    }
}
