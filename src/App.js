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
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Style';
import StatScreen from './Stats';
import AddTipScreen from './AddTip';
import SettingsScreen from './Settings';
import SettingsButton from './SettingsButton';
import { Picker } from '@react-native-picker/picker';

const Stack = createStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = '#F3F2F3';

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Stats"
                    style={styles.Container}
                    component={StatScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.Header,
                        headerTitleStyle: styles.HeaderText,
                        headerRight: SettingsButton,
                    })}
                />
                <Stack.Screen
                    name="AddTip"
                    style={styles.Container}
                    component={AddTipScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.Header,
                        headerTitleStyle: styles.HeaderText,
                        headerRight: SettingsButton,
                        headerTintColor: 'white',
                    })}
                />
                <Stack.Screen
                    name="Settings"
                    style={styles.Container}
                    component={SettingsScreen}
                    options={{
                        headerStyle: styles.Header,
                        headerTitleStyle: styles.HeaderText,
                        headerTintColor: 'white',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default function App() {
    return <MyStack />;
}
