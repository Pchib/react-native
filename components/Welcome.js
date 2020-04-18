import React, {Component} from 'react';
import {View, Text, ScrollView, Image, Alert, TouchableOpacity, ActivityIndicator} from 'react-native';
import {FontFamily, SIZES} from './utils/Const';
import {Button as PaperButtom, Title} from 'react-native-paper';
import {Colors, configHeader, api, apiGraphql} from './utils/Const';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {materialColors, webWeights, material} from 'react-native-typography';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const backgrounds = [
    {
        title: 'Some Title',
        description: 'Some description here!Some description here!Some description here!Some description here!Some description here!',
        img: 'https://media1.fdncms.com/orlando/imager/u/original/4575221/shutterstock_136807502-2.jpg',
    }, {
        title: 'Some Title',
        description: 'Some description here!Some description here!Some description here!Some description here!Some description here!',
        img: 'http://www.cndajin.com/data/wls/174/16072156.jpg',
    }, {
        title: 'Some Title',
        description: 'Some description here!Some description here!Some description here!Some description here!Some description here!',
        img: 'https://static.vecteezy.com/system/resources/previews/000/241/101/non_2x/music-festival-camping-vector-cartoon-concept-illustration.jpg',
    }];


export default class Welcome extends React.Component {
    state = {
        currentPosition: 0,
        userInfo: null,
        isBlank: true,
    };

    getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // user has not signed in yet
            
            } else {
                // some other error
             
            }
        }
    };
    
    async componentDidMount() {
        this._configureGoogleSignIn();
        const userInfo = await AsyncStorage.getItem('userInfo', null);
        if (userInfo) {
            // navigate to mainNav
            this.props.navigation.navigate('MainNav');
        } else {
            this.setState({isBlank: false});
        }
    }

    _configureGoogleSignIn() {
        GoogleSignin.configure({
            webClientId: 'xxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
            offlineAccess: false,
        });
    }

    renderDots = () => {
        let {currentPosition} = this.state;
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 40,
                marginHeight: 20,
            }}>
                <View style={[{
                    marginHorizontal: 10,
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                }, currentPosition === 0 ? {backgroundColor: Colors.red} : {backgroundColor: Colors.gray}]}
                />
                <View style={[{
                    marginHorizontal: 10,
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                }, currentPosition === 1 ? {backgroundColor: Colors.red} : {backgroundColor: Colors.gray}]}
                />
                <View style={[{
                    marginHorizontal: 10,
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                }, currentPosition === 2 ? {backgroundColor: Colors.red} : {backgroundColor: Colors.gray}]}
                />
            </View>
        );
    };
    
    handleScroll = (event) => {
        let {currentPosition} = this.state;
        let contentOffsetY = event.nativeEvent.contentOffset.x;
        let cellWidth = (SIZES.width).toFixed(2);
        let cellIndex = Math.floor(contentOffsetY / cellWidth);
        if (cellIndex === currentPosition) {
            return;
        }
        console.log(currentPosition);
        this.setState({currentPosition: cellIndex});
    };

    /**
     *
     * @param userInfo
     * @returns {store user in Storage}
     */
    async storeToken(userInfo) {
        try {
            await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        } catch (error) {
            console.log('Something went wrong', error);
        }
    }

    
    signInAsGuest = () => {
        // create fake user
        let userInfo = {
            name : "Guest guest",
            photo : "https://lh3.googleusercontent.com/a-/AAuE7mAjy5ht_QOE7AD5Xcbir4SlN36bix-xnR8KnsCk=s96-cc-rg"

        }
        this.storeToken(userInfo).then(() => {
            this.props.navigation.navigate('MainNav')
        })
    }

    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            // get user from sign in
            const userInfo = await GoogleSignin.signIn();

            // store user and navigate to  MainNav
            this.storeToken(userInfo).then(() => {
                this.props.navigation.navigate('MainNav')
            })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // sign in was cancelled
                Alert.alert('cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation in progress already
                Alert.alert('in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('play services not available or outdated');
            } else {
                Alert.alert('Something went wrong', error.toString());
                console.log(error.toString());
                this.setState({
                    error,
                });
            }
        }
    };

    _signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({userInfo: null, error: null});
        } catch (error) {
            this.setState({
                error,
            });
        }
    };

    render() {
        let { isBlank} = this.state;
        if (isBlank) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator
                        color={Colors.red}
                        size="large"
                    />
                </View>
            );
        }

        return (
            <View style={{flex: 1}}>
                <View style={{justifyContent: 'flex-end', flexDirection: 'row', marginRight: 10, marginTop: 10}}>
                    <TouchableOpacity onPress={this.signInAsGuest}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <AntDesign name="arrowright" size={24} color={Colors.lightBlack}/>
                            <Text>Sign in Later</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                    <ScrollView horizontal
                                pagingEnabled
                                scrollEnabled
                                decelerationRate={0}
                                scrollEventThrottle={16}
                                snapToInterval={SIZES.width}
                                showsHorizontalScrollIndicator={false}
                                onScroll={(event) => this.handleScroll(event)}

                    >
                        {backgrounds.map((item, index) => {
                            return (<View key={index} style={{width: SIZES.width, alignItems: 'center'}}>
                                    <Image source={{uri: `${item.img}`}} resizeMode="center" style={{
                                        borderRadius: 30,
                                        width: SIZES.width / 1.1,
                                        height: '100%',
                                    }}/>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                <View style={{margin: 50, alignItems: 'center', textAlign: 'center'}}>
                    <Text style={[{marginBottom: 10, fontFamily: FontFamily['Poppins-Bold'], fontSize: 24}]}>
                        Tents For You
                    </Text>
                    <Text style={[{color: Colors.lightBlack, textAlign: 'center'}, material.caption]}>
                        Champions camping,Funfair camping,Energy camping,Set up Camp,Camp Station,Willow Woods,Campfire
                        Dreams
                    </Text>
                    {this.renderDots()}
                    <GoogleSigninButton
                        style={{width: '100%', height: 50, elevation: 0, borderRadius: 30}}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        // onPress={this._signIn}  
                    />
                </View>
            </View>
        );
    };
};
