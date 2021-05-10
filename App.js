import { getStylesForProperty } from "css-to-react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Header = styled.Text`
  position: absolute;
  height: 60px;
  left: 0%;
  right: 0%;
  top: 0;
  color: white;
  font-size: 20px;
  text-align: left;
  background-color: #00d54b;
`;

export default function App() {
  return (
    <View>
      <Header>FINPAL</Header>
    </View>
  );
}
