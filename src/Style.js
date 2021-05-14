import React from 'react';
import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const width = Dimensions.get('window').width;
const toolbarHeight = Platform.OS === 'ios' ? 88 : 80;
const headerHeight = Header.height;
const height = Dimensions.get('window').height - toolbarHeight;
const AddButtonPosX = width / 2 - 30 + 0.5;
const AddButtonPosY = height * 0.7;

const styles = StyleSheet.create({
    Container: {
        height: height,
        width: width,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
    },
    Header: {
        backgroundColor: '#00d54b',
    },
    HeaderText: {
        color: '#fff',
        fontSize: 24,
    },
    IconCenter: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    StatsContainer: {
        height: height,
        width: width,
    },
    StatsPickerContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    StatsPickerItem: {
        width: width / 2,
        height: 40,
    },
    StatsGraphContainer: {
        height: height * 0.5,
    },
    StatsAddButtonContainer: {
        position: 'absolute',
        width: width,
        bottom: height * 0.05,
    },
    SettingsButton: {
        marginRight: width * 0.02,
        borderRadius: 20,
        backgroundColor: '#00d54b',
        width: 40,
        height: 40,
        overflow: 'hidden',
    },
    SettingsIcon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    AddTipButtonContainer: {
        justifyContent: 'center',
        height: height * 0.2,
        width: width,
    },
    NumberPadContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    NumberpadAmountContainer: {
        height: height * 0.27,
        justifyContent: 'center',
    },
    NumberpadAmountText: {
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        zIndex: 1,
    },
    NumberpadKeyContainer: {
        width: width / 3,
        height: height * 0.14,
        justifyContent: 'center',
        backgroundColor: '#f3f2f3',
    },
    NumberpadKeyText: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
});

export default styles;
