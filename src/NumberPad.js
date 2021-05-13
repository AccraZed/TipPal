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
    this.state = {
      amount: "",
      hasDecimal: false,
      decimalPlaces: 0,
    };
  }

  clearAmount = () => {
    this.setState({ amount: "", hasDecimal: false, decimalPlaces: 0 });
  };

  onPressNum = (key) => {
    if (this.state.amount.length >= 8) return;
    if (this.state.amount === "") {
      if (key === ".") this.setState({ hasDecimal: true });
      if (key !== "0") this.setState({ amount: key });
    } else if (key === ".") {
      if (!this.state.hasDecimal) {
        this.setState({ amount: this.state.amount + key, hasDecimal: true });
      }
    } else {
      if (this.state.hasDecimal) {
        if (this.state.decimalPlaces < 2) {
          this.setState({
            amount: this.state.amount + key,
            decimalPlaces: this.state.decimalPlaces + 1,
          });
        }
      } else {
        this.setState({ amount: this.state.amount + key });
      }
    }
  };

  delLast = () => {
    if (this.state.amount.charAt(this.state.amount.length - 1) === ".")
      this.setState({ hasDecimal: false });
    else if (this.state.hasDecimal)
      this.setState({ decimalPlaces: this.state.decimalPlaces - 1 });
    this.setState({ amount: this.state.amount.slice(0, -1) });
  };

  render() {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
    let textAmount = this.state.amount == "" ? 0 : this.state.amount;

    if (this.state.amount.charAt(0) == ".") {
      textAmount = "0" + this.state.amount;
    }
    return (
      <SafeAreaView>
        <View style={styles.AmountContainer}>
          <Text style={styles.Amount}>${textAmount}</Text>
        </View>
        <View style={styles.NumberPad}>
          {keys.map((num) => {
            return (
              <TouchableHighlight
                key={num}
                style={{ borderRadius: 50, backgroundColor: "#f3f3f3" }}
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
