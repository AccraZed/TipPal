import 'react-native-gesture-handler';
import React from 'react';
import { View, SafeAreaView, Button, Text } from 'react-native';
import styles from './Style';

class TransactionScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        this.fetchTips();
    }

    fetchTips = () => {
        const { db } = this.props.route.params;
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

    render() {
        console.log('Length ', this.state.data.length);
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.TransactionsContainer}>
                    {this.state.data.map((trans) => {
                        const milliseconds = trans.timestamp;
                        console.log(milliseconds);
                        const date = new Date(milliseconds);
                        const humanDateFormat = date.toLocaleString();
                        return (
                            <View key={trans.id} style={styles.TransactionsItem}>
                                <Text style={styles.TransactionsItemAmount}>{trans.amount}</Text>
                                <Text style={styles.TransactionsItemTimestamp}>
                                    {humanDateFormat}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </SafeAreaView>
        );
    }
}

export default TransactionScreen;
