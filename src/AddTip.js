import 'react-native-gesture-handler';
import React from 'react';
import { View, SafeAreaView, Button } from 'react-native';
import styles from './Style';
import NumberPad from './NumberPad';
import * as SQLite from 'expo-sqlite';
import { concat } from 'react-native-reanimated';
const db = SQLite.openDatabase('tips.db');

class AddTipScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            amount: '',
        };

        db.transaction(
            (tx) => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS tips (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp DATETIME, amount FLOAT)'
                );
            },
            (txObj, err) => {
                console.log('ERRRRROR: ', err);
            },
            (txObj, qResult) => {}
        );
        this.fetchTips();
    }

    fetchTips = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tips',
                null,
                (txObj, qResult) => {
                    this.setState({ data: qResult.rows._array });
                },
                (txObj, err) => console.log('ERRRRROR: ', err)
            );
        });
    };

    addCurrentTip = (tip) => {
        if (tip === '') return;
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tips (timestamp, amount) values (?, ?)',
                [Date.now(), tip],
                (txObj, qResult) => {
                    this.setState({ data: qResult.rows._array });
                },
                (txObj, err) => console.log('ERRRROR: ', err)
            );
        });
    };

    updateAmount = (amount) => {
        this.setState({
            amount: amount,
        });
    };

    clearAmount = () => {
        this.setState({
            amount: '',
        });
    };

    render() {
        return (
            <SafeAreaView>
                <NumberPad amount={this.state.amount} updateAmount={this.updateAmount} />
                <View style={styles.AddTipButtonContainer}>
                    <Button
                        color="#00d54b"
                        title="Add Tip"
                        onPress={() => {
                            this.addCurrentTip(this.state.amount);
                            this.clearAmount();
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default AddTipScreen;
