import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Style';

class NumberPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasDecimal: false,
            decimalPlaces: 0,
        };
    }

    keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];

    onPressNum = (key) => {
        if (this.props.amount.length >= 8) return;
        if (this.props.amount === '') {
            this.setState({ decimalPlaces: 0, hasDecimal: key === '.' });
            if (key !== '0') this.props.updateAmount(key);
        } else if (key === '.') {
            if (!this.state.hasDecimal) {
                this.props.updateAmount(this.props.amount + key);
                this.setState({ hasDecimal: true });
            }
        } else {
            if (this.state.hasDecimal) {
                if (this.state.decimalPlaces < 2) {
                    this.props.updateAmount(this.props.amount + key);
                    this.setState({
                        decimalPlaces: this.state.decimalPlaces + 1,
                    });
                }
            } else {
                this.props.updateAmount(this.props.amount + key);
            }
        }
    };

    delLast = () => {
        if (this.props.amount.charAt(this.props.amount.length - 1) === '.') {
            this.setState({ hasDecimal: false });
        } else if (this.state.hasDecimal) {
            this.setState({ decimalPlaces: this.state.decimalPlaces - 1 });
        }
        this.props.updateAmount(this.props.amount.slice(0, -1));
    };

    render() {
        let textAmount = this.props.amount == '' ? 0 : this.props.amount;

        if (this.props.amount.charAt(0) == '.') {
            textAmount = '0' + this.props.amount;
        }

        return (
            <SafeAreaView>
                <View style={styles.NumberpadAmountContainer}>
                    <Text style={styles.NumberpadAmountText}>${textAmount}</Text>
                </View>
                <View style={styles.NumberPadContainer}>
                    {this.keys.map((num) => {
                        return (
                            <TouchableHighlight
                                key={num}
                                style={{
                                    borderRadius: 50,
                                    backgroundColor: '#f3f3f3',
                                }}
                                onPress={() => this.onPressNum(num)}
                            >
                                <View style={styles.NumberpadKeyContainer}>
                                    <Text style={styles.NumberpadKeyText}>{num}</Text>
                                </View>
                            </TouchableHighlight>
                        );
                    })}
                    <TouchableHighlight onPress={this.delLast} style={{ borderRadius: 50 }}>
                        <View style={styles.NumberpadKeyContainer}>
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
