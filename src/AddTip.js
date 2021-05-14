import "react-native-gesture-handler";
import React from "react";
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
        };
        this.updateAmount = this.updateAmount.bind(this);
    }

    updateAmount(amount) {
        this.setState({
            amount: amount,
        });
    }

    render() {
        return (
            <SafeAreaView>
                <NumberPad
                    amount={this.state.amount}
                    updateAmount={this.updateAmount}
                />
                <View style={styles.AddTipButtonContainer}>
                    <Button
                        color="#00d54b"
                        title="Add Tip"
                        onPress={() => this.props.navigation.navigate("Stats")}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default AddTipScreen;
