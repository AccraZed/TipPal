import "react-native-gesture-handler";
import React from "react";
import { useState, useRef, Component } from "react";
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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
    DefaultTheme,
    NavigationContainer,
    useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./Style";
import StatScreen from "./Stats";
import NumberPad from "./NumberPad";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { render } from "react-dom";

class AddTipScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: "",
            hasDecimal: false,
            decimalPlaces: 0,
        };
        this.updateAmount = this.updateAmount.bind(this);
        this.updateHasDecimal = this.updateHasDecimal.bind(this);
        this.updateDecimalPlaces = this.updateDecimalPlaces.bind(this);
    }

    updateAmount(amount) {
        this.setState({
            amount: amount,
        });
    }

    updateHasDecimal(hasDecimal) {
        this.setState({
            hasDecimal: hasDecimal,
        });
    }

    updateDecimalPlaces(decimalPlaces) {
        this.setState({
            decimalPlaces: decimalPlaces,
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <NumberPad
                    amount={this.state.amount}
                    hasDecimal={this.state.hasDecimal}
                    decimalPlaces={this.state.decimalPlaces}
                    updateAmount={this.updateAmount}
                    updateHasDecimal={this.updateHasDecimal}
                    updateDecimalPlaces={this.updateDecimalPlaces}
                />
                <View style={styles.AddTipContainer}>
                    <Button
                        style={styles.AddTip}
                        title="Add Tip"
                        onPress={() => this.props.navigation.navigate("Stats")}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default AddTipScreen;
