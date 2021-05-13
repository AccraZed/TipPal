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
    Platform,
    Button,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Style';
import { Picker } from '@react-native-picker/picker';

const AddTipScreen = ({ navigation }) => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];
    const [amount, setAmount] = useState('');
    const [hasDecimal, setHasDecimal] = useState(false);
    const [decimalPlaces, setDecimalPlaces] = useState(0);

    let textAmount = amount == '' ? 0 : amount;

    if (amount.charAt(0) == '.') textAmount = '0' + amount;

    const onPressNum = (key) => {
        if (amount.length >= 8) return;
        if (amount === '') {
            if (key === '.') setHasDecimal(true);
            if (key !== '0') setAmount(key);
        } else if (key === '.') {
            if (!hasDecimal) {
                setAmount(amount + key);
                setHasDecimal(true);
            }
        } else {
            if (hasDecimal) {
                if (decimalPlaces < 2) {
                    setAmount(amount + key);
                    setDecimalPlaces(decimalPlaces + 1);
                }
            } else {
                setAmount(amount + key);
            }
        }
    };

    const delLast = () => {
        if (amount.charAt(amount.length - 1) === '.') setHasDecimal(false);
        else if (hasDecimal) setDecimalPlaces(decimalPlaces - 1);
        setAmount(amount.slice(0, -1));
    };

    return (
        <SafeAreaView>
            <Text style={styles.Amount}>${textAmount}</Text>
            <View style={styles.NumberPad}>
                {keys.map((num) => {
                    return (
                        <TouchableHighlight
                            style={{ borderRadius: 50, backgroundColor: '#f3f3f3' }}
                            onPress={() => onPressNum(num)}
                        >
                            <View key={num} style={styles.Key}>
                                <Text style={styles.KeyText}>{num}</Text>
                            </View>
                        </TouchableHighlight>
                    );
                })}
                <TouchableHighlight onPress={delLast} style={{ borderRadius: 50 }}>
                    <View style={styles.Key}>
                        <Icon name="backspace" size={30} color="black" style={styles.IconCenter} />
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.AddTip}>
                <Button title="Add Tip" onPress={() => navigation.navigate('Stats')} />
            </View>
        </SafeAreaView>
    );
};

export default AddTipScreen;
