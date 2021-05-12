import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./Style";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Stats"
          component={StatScreen}
          options={{
            headerStyle: styles.Header,
            headerTitleStyle: styles.HeaderText,
          }}
        />
        <Stack.Screen
          name="AddTip"
          component={AddTipScreen}
          options={{
            headerStyle: styles.Header,
            headerTitleStyle: styles.HeaderText,
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const StatScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.AddButton}>
        <Icon
          name="plus-circle"
          size={60}
          color="#00d54b"
          onPress={() => navigation.navigate("AddTip")}
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
