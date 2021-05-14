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
    Platform,
    Button,
    TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./Style";
import { Picker } from "@react-native-picker/picker";

class NumberPad extends React.Component {
    constructor(props) {
        super(props);
    }

    keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];

    onPressNum = (key) => {
        if (this.props.amount.length >= 8) return;
        if (this.props.amount === "") {
            if (key === ".") this.props.updateHasDecimal(true);
            if (key !== "0") this.props.updateAmount(key);
        } else if (key === ".") {
            if (!this.props.hasDecimal) {
                // this.props.setState({
                //     amount: this.props.amount + key,
                //     hasDecimal: true,
                // });
                this.props.updateAmount(this.props.amount + key);
                this.props.updateHasDecimal(true);
            }
        } else {
            if (this.props.hasDecimal) {
                if (this.props.decimalPlaces < 2) {
                    // this.props.setState({
                    //     amount: this.props.amount + key,
                    //     decimalPlaces: this.props.decimalPlaces + 1,
                    // });
                    this.props.updateAmount(this.props.amount + key);
                    this.props.updateDecimalPlaces(
                        this.props.decimalPlaces + 1
                    );
                }
            } else {
                this.props.updateAmount(this.props.amount + key);
                // this.props.setState({ amount: this.props.amount + key });
            }
        }
    };

    delLast = () => {
        if (this.props.amount.charAt(this.props.amount.length - 1) === ".") {
            // this.props.setState({ hasDecimal: false });
            this.props.updateHasDecimal(false);
        } else if (this.props.hasDecimal) {
            // this.props.setState({
            //     decimalPlaces: this.props.decimalPlaces - 1,
            // });
            this.props.updateDecimalPlaces(this.props.decimalPlaces - 1);
        }
        // this.props.setState({ amount: this.props.amount.slice(0, -1) });
        this.props.updateAmount(this.props.amount.slice(0, -1));
    };

    render() {
        let textAmount = this.props.amount == "" ? 0 : this.props.amount;

        if (this.props.amount.charAt(0) == ".") {
            textAmount = "0" + this.props.amount;
        }
        return (
            <SafeAreaView>
                <View style={styles.AmountContainer}>
                    <Text style={styles.Amount}>${textAmount}</Text>
                </View>
                <View style={styles.NumberPad}>
                    {this.keys.map((num) => {
                        return (
                            <TouchableHighlight
                                key={num}
                                style={{
                                    borderRadius: 50,
                                    backgroundColor: "#f3f3f3",
                                }}
                                onPress={() => this.onPressNum(num)}
                            >
                                <View style={styles.Key}>
                                    <Text style={styles.KeyText}>{num}</Text>
                                </View>
                            </TouchableHighlight>
                        );
                    })}
                    <TouchableHighlight
                        onPress={this.delLast}
                        style={{ borderRadius: 50 }}
                    >
                        <View style={styles.Key}>
                            <Icon
                                name="backspace"
                                size={30}
                                color="black"
                                style={styles.IconCenter}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    }
}

export default NumberPad;
