import React, {Component} from 'react';
import {View, TouchableOpacity, Text, ScrollView, FlatList, ActivityIndicator,Alert} from 'react-native';
import {Badge, Divider} from 'react-native-paper';
import {Colors, FontFamily, SIZES} from '../../utils/Const';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from './childrens/Header';
import AsyncStorage from '@react-native-community/async-storage';
import {RenderIndicator} from '../../utils/components';
import {GoogleSignin} from '@react-native-community/google-signin';
export default class Account extends Component {
    state = {
        userInfo: {},
        isLoading: true,
        list: [{
            title: 'My next events',
            icon: 'carryout',
            withBadge: true,
            pressed : () => {
            }
        }, {
            title: 'History',
            icon: 'clockcircleo',
            withBadge: false,
            pressed : () => {
            }
        }, {
            title: 'Friends',
            icon: 'team',
            withBadge: false,
            pressed : () => {
            }
        }, {
            title: 'Account settings',
            icon: 'setting',
            withBadge: false,
        }, {
            title: 'Log out',
            icon: 'logout',
            withBadge: false,

            pressed : () => {
                Alert.alert(
                    'Log out',
                    'are you sure you want to log out ?',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {text: 'Log out',
                            onPress: () => this._handleLogOut()},
                    ],
                    {cancelable: true},
                );
            }
        }],
    };
    /**
     *
     * @returns {Promise<void>}
     * @private logout function
     */
    _handleLogOut = async () => {
        try{
            AsyncStorage.removeItem("userInfo")
                .then(() => {
                    this._signOut();
                }).catch(e => console.log(e))
        }catch (e) {
            console.log(e)
        }
    };
    _signOut = async () => {
        try {
            // use this two lines if you are using GoogleSignIn to logOut
            //await GoogleSignin.revokeAccess();
            //await GoogleSignin.signOut();
            const {navigation} = this.props.navigation.getScreenProps('navigation')
            navigation.navigate("Welcome")
        } catch (error) {
            this.setState({
                error,
            });
        }
    };

    componentDidMount() {
        this.setState({isLoading: true});
        // get user Token
        this.getToken().then(userInfo => {
            this.setState({userInfo: JSON.parse(userInfo)},
                // update state
                () => this.setState({isLoading: false}));
        }).catch(e => console.log(e));
    }

    getToken = async () => {
        try {
            const userInfo = await AsyncStorage.getItem('userInfo');
            if (userInfo !== null) {
                // value previously stored
                return userInfo;
            }
        } catch (e) {
            // error reading value
            return null;
        }
    };
    /**
     *
     * @param item
     * @returns {*}
     * @private
     */
    _renderItem = (item) => {
        return (
            <View>
                <TouchableOpacity onPress={item.pressed}>
                    <View style={{
                        flexDirection: 'row',
                        marginVertical: 15,
                        justifyContent: 'flex-start',
                        marginLeft: 10,
                    }}>
                        <View>
                            <AntDesign size={20} name={item.icon} color={Colors.lightBlack}/>
                        </View>
                        <Text style={{
                            color: Colors.black,
                            marginLeft: 10,
                            fontFamily: FontFamily['Poppins-Medium'],
                        }}>{item.title}</Text>
                        {item.withBadge && <Badge style={{marginLeft: 5, alignSelf: 'center'}}>3</Badge>}

                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1, marginRight: 5}}>
                            <AntDesign size={20} name='right' color={Colors.lightBlack}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };


    render() {
        let {userInfo, isLoading, list} = this.state;
        const user = userInfo || null;

        if (isLoading) {
            return (
                <RenderIndicator/>
            );
        }
        return (
            <View style={{flex: 1}}>
                {/* render Header*/}
                <Header user={user}/>
                <ScrollView
                    style={{height: SIZES.height}}
                >
                    <View style={{height: 70}}>
                    </View>
                    <Divider/>

                    <FlatList
                        ItemSeparatorComponent={() => <Divider/>}
                        style={{backgroundColor: Colors.white}}
                        data={list}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                    <Divider/>
                </ScrollView>

            </View>

        );
    };
};
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}
