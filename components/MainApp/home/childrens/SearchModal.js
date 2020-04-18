import React, {Component} from 'react';
import {
    ScrollView,
    TouchableOpacity,
    View,
    FlatList,
    Text,
} from 'react-native';
import {Colors, FontFamily, SIZES} from '../../../utils/Const';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {Divider} from 'react-native-paper';
import SearchInput, {createFilter} from 'react-native-search-filter';

const emails = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    email: 'sdlkfjdsfh',
}, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    email: 'sdlkqsdsdfjdsfh',
}, {
    id: 'bd7acbea-c1b1-46c2-aed5-ass',
    email: 'qsdsqd',
}, {
    id: 'bd7acbea-c1b1-qsd-aed5-3ad53abb28ba',
    email: 'sdlkfjdfdhsfh',
}, {
    email: 'gfhdgh',
}];
const KEYS_TO_FILTERS = ['email'];
export default class SearchModal extends Component {
    state = {
        searchTerm: '',
    };
    searchUpdated = term => this.setState({searchTerm: term});

    _renderItem = (item) => {
        return (
            <View style={{marginVertical : 5}}>
                <Text style={{fontFamily: FontFamily['Poppins-Medium']}}>
                    {item.email}
                </Text>
            </View>
        );
    };

    render() {
        let {searchTerm} = this.state;
        let {
            isModalVisible,
            toggleModal,
        } = this.props;
        const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
        return (
            <Modal
                useNativeDriver
                onBackButtonPress={toggleModal.bind(this)}
                backdropOpacity={1}
                backdropColor={Colors.white}
                animationOutTiming={500}
                animationInTiming={500}
                isVisible={isModalVisible}
                avoidKeyboard={true}
            >
                <View style={{flex : 1}}>
                    <View style={{flexDirection : 'row',justifyContent : 'space-between'}}>
                        <View>
                            <Text style={{fontFamily: FontFamily['Poppins-Regular']}}>
                                Search
                            </Text>
                        </View>
                        <View>
                            <AntDesign onPress={toggleModal}
                                       name={'close'} size={24} color={Colors.black}/>
                        </View>
                    </View>
                    <View>
                        <SearchInput
                            onChangeText={(term) => {
                                this.searchUpdated(term);
                            }}
                            style={{
                                marginTop : 10,
                                alignSelf : 'center',
                                paddingHorizontal: 5,
                                paddingLeft: 15,
                                borderColor: Colors.red,
                                borderRadius: 25,
                                borderWidth: 1,
                                height: 35,
                                width: '95%',
                                elevation: 0,
                            }}
                        />
                        {searchTerm.length !== 0 &&
                        <FlatList
                            ItemSeparatorComponent={() => (
                                <Divider/>
                            )}
                            style={{paddingHorizontal: 15,height : 200}}
                            data={filteredEmails}
                            renderItem={({item}) => this._renderItem(item)}
                            keyExtractor={item => item.id}
                        />}
                    </View>

                    <View style={{flexDirection : 'row',alignItems : 'center',marginTop : SIZES.width / 2}}>
                            <MaterialIcons name={'history'} size={24}/>
                            <Text style={{fontFamily : FontFamily['Poppins-Regular'],marginLeft : 5}}>History</Text>
                    </View>

                </View>
            </Modal>
        );
    };
}
