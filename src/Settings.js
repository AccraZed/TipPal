import 'react-native-gesture-handler';
import React from 'react';
import { useState, useRef, Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    StatusBar,
    Button,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Style';
import { Picker } from '@react-native-picker/picker';
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';

const SettingsScreen = ({ navigation }) => {
    return <SafeAreaView></SafeAreaView>;
};

export default SettingsScreen;
