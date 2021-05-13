import "react-native-gesture-handler";
import React from "react";
import {
  View,
  SafeAreaView,
  Platform,
  Button,
  TouchableNativeFeedback as TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Style";
import { Picker } from "@react-native-picker/picker";
import { useHeaderHeight } from "@react-navigation/stack";

const StatScreen = ({ navigation }) => {
  let state = {
    timeframe: "day",
    stat: "average",
  };

  let picker;

  if (Platform.OS === "ios") {
    picker = <View style={styles.PickerContainer}></View>;
  } else {
    picker = (
      <View style={styles.PickerContainer}>
        <Picker
          selectedValue={state.timeframe}
          onValueChange={(newTimeframe) => (state.timeframe = newTimeframe)}
          style={(styles.TimeframePicker, styles.Picker)}
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
          style={(styles.StatPicker, styles.Picker)}
          mode="dropdown"
          itemStyle={styles.StatPickerItem}
        >
          <Picker.Item label="Average" value="average" />
          <Picker.Item label="Total" value="total" />
          <Picker.Item label="Both" value="both" />
        </Picker>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View style={{ top: -60 }}>{picker}</View>
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

export default StatScreen;
