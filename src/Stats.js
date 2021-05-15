import 'react-native-gesture-handler';
import React from 'react';
import {
    View,
    SafeAreaView,
    Platform,
    Button,
    TouchableNativeFeedback as TouchableHighlight,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style';
import { Picker } from '@react-native-picker/picker';
import { useHeaderHeight } from '@react-navigation/stack';

const StatScreen = ({ route, navigation }) => {
    let state = {
        timeframe: 'day',
        stat: 'average',
        data: [],
    };

    const db = route.params;

    let picker;

    if (Platform.OS === 'ios') {
        picker = <View style={styles.StatsPickerContainer}></View>;
    } else {
        picker = (
            <View style={styles.StatsPickerContainer}>
                <Picker
                    selectedValue={state.timeframe}
                    onValueChange={(newTimeframe) => (state.timeframe = newTimeframe)}
                    style={styles.StatsPickerItem}
                    mode="dropdown"
                    itemStyle={styles.TimeframePickerItem}
                >
                    <Picker.Item label="Day" value="day" />
                    <Picker.Item label="Week" value="week" />
                    <Picker.Item label="1 Month" value="1month" />
                    <Picker.Item label="3 Months" value="3months" />
                    <Picker.Item label="Year" value="year" />
                    <Picker.Item label="All" value="all" />
                </Picker>
                <Picker
                    selectedValue={state.stat}
                    onValueChange={(newStat) => (state.stat = newStat)}
                    style={styles.StatsPickerItem}
                    mode="dropdown"
                >
                    <Picker.Item label="Average" value="average" />
                    <Picker.Item label="Total" value="total" />
                    <Picker.Item label="Both" value="both" />
                </Picker>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.StatsContainer}>
            <View>{picker}</View>
            <View style={styles.StatsGraphContainer}></View>
            <View style={styles.StatsAddButtonContainer}>
                <Icon
                    style={styles.IconCenter}
                    name="plus-circle"
                    size={60}
                    color="#00d54b"
                    onPress={() => navigation.navigate('AddTip')}
                />
            </View>
            <Button
                title="TRANSACTIONS"
                onPress={() => navigation.navigate('Transactions')}
            ></Button>
        </SafeAreaView>
    );
};

export default StatScreen;
