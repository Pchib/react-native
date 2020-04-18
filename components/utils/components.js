import {ActivityIndicator, View,StyleSheet} from 'react-native';
import {Colors} from './Const';
import React from 'react';
import {
    PlaceholderContainer,
    Placeholder,
} from 'react-native-loading-placeholder';


export const MyPlaceholder = () => (
    <View style={styles.container}>
        <PlaceholderContainer
            style={styles.placeholderContainer}
            duration={1000}
            delay={1000}
            loader={true}
        >
            <View style={{ flexDirection: 'row' }}>
                <Placeholder style={[styles.placeholder, { width: 50, height: 50 }]} />
                <View
                    style={{
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Placeholder
                        style={[
                            styles.placeholder,
                            {
                                width: '50%',
                                height: 10
                            }
                        ]}
                    />
                    <Placeholder
                        style={[
                            styles.placeholder,
                            {
                                width: '35%',
                                height: 7
                            }
                        ]}
                    />
                </View>
            </View>

            <Placeholder
                style={[styles.placeholder, { marginTop: 20, width: '80%' }]}
            />
            <Placeholder style={[styles.placeholder, { width: '90%' }]} />
            <Placeholder style={[styles.placeholder, { width: '50%' }]} />
        </PlaceholderContainer>
    </View>
);
/**
 *
 * @returns {*}
 * @constructor simple Indicator
 */
export const RenderIndicator = () => (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={Colors.red}/>
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 25,
        backgroundColor: '#f6f7f8'
    },
    placeholderContainer: {
        width: '90%',
        backgroundColor: '#fff',
        height: 200
    },
    placeholder: {
        height: 8,
        marginTop: 6,
        marginLeft: 15,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    row: {
        flexDirection: 'row',
        width: '100%'
    }
});
