import {Dimensions} from 'react-native';

const Colors = {
    white: '#ffffff',
    background: '#e8eaed',
    blue: '#2877AE',
    black: '#0E121D',
    lightBlack: '#3A444E',
    gray : '#808080',
    lightGray : '#D3D3D3',
    textColorSecondary: '#17223D',
    red: '#FF1648',
    success : '#00C851',
    warning : '#ffbb33',
    danger : '#ff4444',
    primary : '#33b5e5',
    textColor : '#333',
};
const SIZES = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
const FontFamily = {
    'Poppins-Regular': 'Poppins-Regular',
    'Poppins-Thin': 'Poppins-Thin',
    'Poppins-Medium': 'Poppins-Medium',
    'Poppins-Light': 'Poppins-Light',
    'Poppins-Bold': 'Poppins-Bold'
};
const apiGraphql = "http://192.168.43.203:4000/graphql";
const api = "http://192.168.43.203:4000";
const getIP = "https://extreme-ip-lookup.com/json/?callback=getIP";
const configHeader = {
    headers: {
        'Content-Type': 'application/json',
    },
};
export {
    Colors,
    SIZES,
    FontFamily,
    apiGraphql,
    api,
    configHeader,
    getIP
};
