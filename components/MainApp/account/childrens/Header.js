import React, {Component} from 'react';
import ImageOverlay from 'react-native-image-overlay';
import {Colors, FontFamily, SIZES} from '../../../utils/Const';
import {Text, View, TouchableOpacity} from 'react-native';
import {Avatar, IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Header extends Component {

    render() {
        let {user} = this.props;
        return (
            <ImageOverlay
                titleStyle={{fontFamily: FontFamily['Poppins-Medium']}}
                rounded={0}
                containerStyle={{
                    height: SIZES.height / 2.4,
                    width: SIZES.width,
                }}
                source={{uri: 'https://i.pinimg.com/originals/e7/ea/04/e7ea0451b2fabe943a77d795be2093ca.jpg'}}
                contentPosition="bottom"
            >
                <View style={{width: SIZES.width,flex : 1,justifyContent : 'space-around'}}>
                    <TouchableOpacity
                        style={{justifyContent : 'flex-end',flexDirection : 'row',marginHorizontal : 10,marginTop : 5}}>
                        <AntDesign color={Colors.white} name="setting" size={30}/>
                    </TouchableOpacity>
                    <View>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => console.log('Pressed')}>
                                <View>
                                    <Avatar.Image
                                        size={64}
                                        source={{uri: `${user.photo}`}}/>
                                    <IconButton
                                        style={{
                                            position: 'absolute',
                                            top: 25,
                                            left: 30,
                                        }}
                                        icon={() => (<SimpleLineIcons name="camera"
                                                                      color={Colors.red}
                                                                      size={24}/>)}/>
                                </View>
                            </TouchableOpacity>
                            <Text style={{fontFamily: FontFamily['Poppins-Medium'], color: Colors.white, fontSize: 18}}>
                                {user.name}
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons color={Colors.red} name="map-marker-outline" size={20}/>
                                <Text style={{fontFamily: FontFamily['Poppins-Light'], color: Colors.white}}>Tunis,
                                    Monastir</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 20,
                        }}>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontFamily: FontFamily['Poppins-Light'], color: Colors.white}}>3.5K</Text>
                                    <MaterialCommunityIcons size={20} color={'#4bb543'} name={'arrow-top-right'}/>
                                </View>
                                <View>
                                    <Text style={{
                                        fontFamily: FontFamily['Poppins-Medium'],
                                        color: Colors.white,

                                        fontSize: 15,
                                    }}>Likes</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontFamily: FontFamily['Poppins-Light'], color: Colors.white
                                    , textAlign: 'center',
                                }}>348K</Text>
                                <Text style={{
                                    fontFamily: FontFamily['Poppins-Medium'],
                                    color: Colors.white,
                                    fontSize: 15,
                                }}>Events</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageOverlay>
        );
    };
};
