
import * as React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FontFamily} from '../../../utils/Const';
import {material} from 'react-native-typography';

export default class Story extends React.Component {
    render() {
        return (
            <View style={{marginHorizontal: 5, marginVertical: 5}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontFamily: FontFamily['Poppins-Regular'], fontSize: 18}}>Populaire
                        stories</Text>
                    <Text>See all</Text>
                </View>
                <ScrollView
                    horizontal
                    contentContainerStyle={{paddingHorizontal: 0}}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity
                        style={{marginHorizontal: 8, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 56,
                                width: 56,
                                borderRadius: 28,
                                borderColor: Colors.red,
                                borderWidth: 1,
                            }}
                            source={{uri: 'https://apta.biz/wp-content/uploads/2017/02/avatar-round-3-1-768x768.png'}}/>
                        <Text style={material.body1}>Lamjed B.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginHorizontal: 8, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 56,
                                width: 56,
                                borderRadius: 28,
                                borderColor: Colors.red,
                                borderWidth: 1,
                            }}
                            source={{uri: 'https://apta.biz/wp-content/uploads/2017/02/avatar-round-3-1-768x768.png'}}/>
                        <Text style={material.body1}>Lamjed B.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginHorizontal: 8, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 56,
                                width: 56,
                                borderRadius: 28,
                                borderColor: Colors.red,
                                borderWidth: 1,
                            }}
                            source={{uri: 'https://apta.biz/wp-content/uploads/2017/02/avatar-round-3-1-768x768.png'}}/>
                        <Text style={material.body1}>Lamjed B.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginHorizontal: 8, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 56,
                                width: 56,
                                borderRadius: 28,
                                borderColor: Colors.red,
                                borderWidth: 1,
                            }}
                            source={{uri: 'https://apta.biz/wp-content/uploads/2017/02/avatar-round-3-1-768x768.png'}}/>
                        <Text style={material.body1}>Lamjed B.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginHorizontal: 8, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 56,
                                width: 56,
                                borderRadius: 28,
                                borderColor: Colors.red,
                                borderWidth: 1,
                            }}
                            source={{uri: 'https://apta.biz/wp-content/uploads/2017/02/avatar-round-3-1-768x768.png'}}/>
                        <Text style={material.body1}>Lamjed B.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginHorizontal: 8, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 56,
                                width: 56,
                                borderRadius: 28,
                                borderColor: Colors.red,
                                borderWidth: 1,
                            }}
                            source={{uri: 'https://apta.biz/wp-content/uploads/2017/02/avatar-round-3-1-768x768.png'}}/>
                        <Text style={material.body1}>Lamjed B.</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    };
};
