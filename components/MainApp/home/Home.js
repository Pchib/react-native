import React, {Component} from 'react';
import {View, TouchableOpacity, Text, ScrollView, Image, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, SIZES} from '../../utils/Const';
import SearchModal from './childrens/SearchModal';
import Tags from './childrens/Tags';
import Story from './childrens/Story';
import Events from './childrens/Events';
import AsyncStorage from '@react-native-community/async-storage';
import {Button,ThemeProvider} from 'nachos-ui'
import  axios from 'axios';

export default class Home extends Component {
    state = {
        isLoading: true,
        isModalVisible: false,
        userInfo: {},
        items: [{
            key: 1,
            title: 'new Event',
            user: 'Bouhouch Amjed',
            date: new Date(),
            img: {uri: 'https://res.cloudinary.com/serdy-m-dia-inc/image/upload/w_800,c_limit/legacy_espaces//var/data/gallery/photo/97/83/13/21/15/50926.jpg'},
        },
            {
                key: 2,
                title: 'new Event',
                user: 'Bouhouch Amjed',
                date: new Date(),
                img: {uri: 'http://www.liberaldictionary.com/wp-content/uploads/2019/01/camp-6315.jpg'},
            },
            {
                key: 3,
                title: 'new Event',
                user: 'Bouhouch Amjed',
                date: new Date(),
                img: {uri: 'https://res.cloudinary.com/serdy-m-dia-inc/image/upload/w_800,c_limit/legacy_espaces//var/data/gallery/photo/97/83/13/21/15/50926.jpg'},
            }, {
                key: 4,
                title: 'new Event',
                user: 'Bouhouch Amjed',
                date: new Date(),
                img: {uri: 'https://res.cloudinary.com/serdy-m-dia-inc/image/upload/w_800,c_limit/legacy_espaces//var/data/gallery/photo/97/83/13/21/15/50926.jpg'},
            }, {
                key: 5,
                title: 'new Event',
                user: 'Bouhouch Amjed',
                date: new Date(),
                img: {uri: 'https://res.cloudinary.com/serdy-m-dia-inc/image/upload/w_800,c_limit/legacy_espaces//var/data/gallery/photo/97/83/13/21/15/50926.jpg'},
            }, {
                key: 6,
                title: 'new Event',
                user: 'Bouhouch Amjed',
                date: new Date(),
                img: {uri: 'http://www.liberaldictionary.com/wp-content/uploads/2019/01/camp-6315.jpg'},
            }, {
                key: 7,
                title: 'new Event',
                user: 'Bouhouch Amjed',
                date: new Date(),
                img: {uri: 'http://www.liberaldictionary.com/wp-content/uploads/2019/01/camp-6315.jpg'},
            },
        ],
        stories: [{
            id: '1',
            source: require('../../../assets/stories/1.png'),
            user: 'amjed',
            avatar: {uri: 'https://apta.biz/wp-content/uploads/2017/02/avatar-round-3-1-768x768.png'},
        },
        ],
    };

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
    }


    componentDidMount() {
        this.setState({isLoading: true});
        // get user Token
        axios.get('https://extreme-ip-lookup.com/json/?callback=getIP').then(res => {

        })

        this.getToken().then(userInfo => {
            console.log(userInfo)
            this.setState({userInfo: JSON.parse(userInfo)},
                // update state
                () => this.setState({isLoading: false}));
        }).catch(e => console.log(e));
    }

    getToken = async () => {
        try {
            const userInfo = await AsyncStorage.getItem('userInfo');
            console.log("qslkhqsdh",userInfo)
            if (userInfo !== null) {
                // value previously stored
                return userInfo;
            }
        } catch (e) {
            // error reading value
            return null;
        }
    };

    toggleModal() {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }

    _renderIndicator = () => (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} color={Colors.red}/>
        </View>
    );

    _navigateToProfile = () => {
        this.props.navigation.navigate('Account');
    };

    render() {
        const {isModalVisible, items, isLoading, userInfo} = this.state;
        const user = userInfo || null;
        // still loading ? show Indicator
        if (isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator
                        color={Colors.red}
                        size="large"
                    />
                </View>
            );
        }
        // Show Component
        return (
            <View style={{flex: 1, backgroundColor: Colors.white}}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 5,
                    marginVertical: 5,
                }}>
                    <View>
                        <Text style={[{fontSize: 24}]}>
                            Discover
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.lightGray, borderRadius: 18,
                                height: 35, width: 35, justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={this.toggleModal}>
                            <Ionicons
                                size={24}
                                name='ios-search' color={Colors.lightBlack}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this._navigateToProfile()}
                            style={{marginHorizontal: 8, justifyContent: 'center', alignItems: 'center'}}>
                            {/*user image*/}
                            {user === null ? <View/> :
                                <Image

                                    style={{
                                        height: 35,
                                        width: 35,
                                        borderRadius: 18,
                                        borderColor: Colors.red,
                                        borderWidth: 1,
                                    }}
                                    source={{uri: `${user.photo}`}}/>
                            }

                        </TouchableOpacity>
                    </View>
                    {/*modal here !*/}
                    <SearchModal toggleModal={this.toggleModal}
                                 isModalVisible={isModalVisible}/>
                </View>
                <ScrollView
                    scrollEventThrottle={16}
                    style={{
                        margin: 0,
                        flex: 1,
                        height: SIZES.height,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{marginBottom: 10}}>
                        <Tags/>
                    </View>

                    <Story/>
                    
                    <Events items={items}/>

                </ScrollView>
            </View>
        );
    }
}
