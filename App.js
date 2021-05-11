import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Style';
import { PickerView } from '@ant-design/react-native';
import Pickers from './picker';

const TimeFrame = [
    {
        label: 'Day',
        value: 'Day',
    },
    {
        label: 'Week',
        value: 'Week',
    },
];

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Stats"
                    component={StatScreen}
                    options={{ headerStyle: styles.Header, headerTitleStyle: styles.HeaderText }}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const StatScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Pickers></Pickers>
            <View style={styles.AddButton}>
                <Icon
                    name="plus-circle"
                    size={50}
                    color="#00d54b"
                    onPress={() => navigation.navigate('AddTip')}
                />
            </View>
        </SafeAreaView>
    );
};

const AddTipScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.NumberPad}></View>
        </SafeAreaView>
    );
};

export default function App() {
    return <MyStack></MyStack>;
}
