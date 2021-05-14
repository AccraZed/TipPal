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
            if (key === ".") this.props.setState({ hasDecimal: true });
            if (key !== "0") this.props.setState({ amount: key });
        } else if (key === ".") {
            if (!this.props.state.hasDecimal) {
                this.props.setState({
                    amount: this.props.state.amount + key,
                    hasDecimal: true,
                });
            }
        } else {
            if (this.props.state.hasDecimal) {
                if (this.props.state.decimalPlaces < 2) {
                    this.props.setState({
                        amount: this.props.state.amount + key,
                        decimalPlaces: this.props.state.decimalPlaces + 1,
                    });
                }
            } else {
                this.props.setState({ amount: this.props.state.amount + key });
            }
        }
    };

    delLast = () => {
        if (
            this.props.state.amount.charAt(
                this.props.state.amount.length - 1
            ) === "."
        )
            this.props.setState({ hasDecimal: false });
        else if (this.props.state.hasDecimal)
            this.props.setState({
                decimalPlaces: this.props.state.decimalPlaces - 1,
            });
        this.props.setState({ amount: this.props.state.amount.slice(0, -1) });
    };

    render() {
        let textAmount =
            this.props.state.amount == "" ? 0 : this.props.state.amount;

        if (this.props.state.amount.charAt(0) == ".") {
            textAmount = "0" + this.props.state.amount;
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
