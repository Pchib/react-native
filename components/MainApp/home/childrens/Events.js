import * as React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors, FontFamily, SIZES} from '../../../utils/Const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageOverlay from 'react-native-image-overlay';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button} from 'react-native-paper';

export default class Events extends React.PureComponent {

    _renderItem = (item) => {
        return (
            <View style={{marginVertical: 5, marginHorizontal: 0, backgroundColor: Colors.white}}>
                <View style={{flexDirection: 'row'}}>
                    <ImageOverlay
                        rounded={3}
                        containerStyle={styles.image}
                        source={item.img}
                        contentPosition="bottom"
                    >
                        <View sytyle={{marginBottom: 5}}>
                            <Text style={{
                                color: Colors.white,
                                fontFamily: FontFamily['Poppins-Light'],
                                fontSize: 16,
                                textAlign: 'center',
                            }}>Test </Text>
                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                <AntDesign name='star' size={15} color='white'/>
                                <AntDesign name='star' size={15} color='white'/>
                                <AntDesign name='star' size={15} color='white'/>
                                <AntDesign name='staro' size={15} color='white'/>
                                <AntDesign name='staro' size={15} color='white'/>
                            </View>
                        </View>
                    </ImageOverlay>
                    <View style={{width: SIZES.width / 2, flex: 1, justifyContent: 'space-around', marginLeft: 2,marginBottom : 5}}>
                        <View style={{marginLeft : 5}}>
                            <Text style={[{fontFamily: FontFamily['Poppins-Regular'],fontSize : 18}]}>Djerba,
                                Tunis.</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Feather color={Colors.red} name='map-pin'
                                     size={20}/>
                            <Text style={{fontSize: 14}}> Monastir, Tunis.</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <MaterialIcons color={Colors.danger} name='attach-money'
                                             size={20}/>
                            <Text style={{marginLeft: 2}}>Price :</Text>
                            <Text style={{marginLeft: 5,fontFamily: FontFamily['Poppins-Bold'],color : Colors.success}}>Free</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons color={Colors.red} name='ios-timer'
                                     size={19}/>
                            <Text style={{fontSize: 14,marginLeft : 5,fontFamily: FontFamily['Poppins-Medium']}}>Today</Text>
                        </View>
                        <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Button
                                style={{borderRadius : 20}}
                                uppercase={false} color={Colors.red} compact={false} icon={() => (
                                <AntDesign color={Colors.red} name='arrowright'
                                         size={17}/>
                            )} mode="outlined"
                                onPress={() => console.log('Pressed')}>
                                More details
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    render() {
        let {items} = this.props;
        return (
            <View style={{marginHorizontal: 0, marginVertical: 20}}>
                <View style={{
                    marginHorizontal: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{fontFamily: FontFamily['Poppins-Regular'], fontSize: 18}}>Camping events</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <MaterialCommunityIcons color={Colors.red}
                                                    name="map-marker-outline" size={20}/>
                        </View>
                        <View>
                            <Text>Show nearby</Text>
                        </View>
                    </View>
                </View>
                <View>
                    {/**/}
                    <FlatList
                        style={{backgroundColor: Colors.background}}
                        data={items}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    image: {
        width: (SIZES.width / 2) - 15,
        height: 160,
    },
    container: {
        backgroundColor: 'white',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
    },
    poppins: {
        fontFamily: FontFamily['Poppins-Medium'],
    },
});

