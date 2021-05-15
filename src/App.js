import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Style';
import StatScreen from './Stats';
import AddTipScreen from './AddTip';
import TransactionsScreen from './Transactions';
import SettingsScreen from './Settings';
import SettingsButton from './SettingsButton';
import * as SQLite from 'expo-sqlite';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = '#F3F2F3';

const db = SQLite.openDatabase('tips.db');

const MyStack = () => {
    db.transaction(
        (tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tips (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp DATETIME, amount FLOAT)'
            );
        },
        (txObj, err) => {
            console.log('ERRRRROR: ', err);
        },
        (txObj, qResult) => {}
    );

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Stats"
                    style={styles.Container}
                    component={StatScreen}
                    initialParams={{ db: db }}
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
                    initialParams={{ db: db }}
                    options={({ navigation }) => ({
                        headerStyle: styles.Header,
                        headerTitleStyle: styles.HeaderText,
                        headerRight: SettingsButton,
                        headerTintColor: 'white',
                    })}
                />
                <Stack.Screen
                    name="Transactions"
                    style={styles.Container}
                    component={TransactionsScreen}
                    initialParams={{ db: db }}
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
