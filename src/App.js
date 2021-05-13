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
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Style';
import StatScreen from './Stats';
import AddTipScreen from './AddTip';
import SettingsScreen from './Settings';
import { Picker } from '@react-native-picker/picker';
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';

const Stack = createStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = '#F3F2F3';

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Stats"
                    component={StatScreen}
                    options={{
                        headerStyle: styles.Header,
                        headerTitleStyle: styles.HeaderText,
                    }}
                />
                <Stack.Screen
                    name="AddTip"
                    component={AddTipScreen}
                    options={{
                        headerStyle: styles.Header,
                        headerTitleStyle: styles.HeaderText,
                        headerTintColor: 'white',
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        headerStyle: styles.Header,
                        headerTitleStyle: styles.HeaderText,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const ConnectedApp = connectActionSheet(MyStack);

export default function App() {
    return (
        <ActionSheetProvider>
            <ConnectedApp />
        </ActionSheetProvider>
    );
}
