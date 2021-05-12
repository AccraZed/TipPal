import { getStylesForProperty } from "css-to-react-native";
import React from "react";
import { StyleSheet, Dimensions, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Header } from "react-native/Libraries/NewAppScreen";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const AddButtonPosX = width / 2 - 30 + 0.5;
const AddButtonPosY = height * 0.7;

const styles = StyleSheet.create({
  AddButton: {
    position: "absolute",
    top: AddButtonPosY,
    left: AddButtonPosX,
  },
  Header: {
    backgroundColor: "#00d54b",
  },
  HeaderText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 24,
  },
  NumberPad: {
    backgroundColor: "red",
    position: "absolute",
    width: 315.82,
    height: 293.75,
    left: 70.47,
    top: 319,
  },
});

export default styles;
