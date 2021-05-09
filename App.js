import { getStylesForProperty } from 'css-to-react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  height: 60px;
  left: 0%;
  right: 0%;
  top: 0px;
  font-size: 1.5em;
  text-align: left;
  background-color: #00D54B;
  `;

export default function App() {
  
  return (
    <Header >
      <View>
        <Header>FINPAL</Header>
      </View>
    </Header>
    
  );

}
