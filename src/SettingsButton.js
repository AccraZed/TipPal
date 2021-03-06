import 'react-native-gesture-handler';
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';

const SettingsButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableHighlight
            style={styles.SettingsButton}
            onPress={() => navigation.navigate('Settings')}
        >
            <View style={styles.SettingsButton}>
                <Icon
                    style={(styles.IconCenter, styles.SettingsIcon)}
                    name="cog"
                    size={30}
                    color="white"
                />
            </View>
        </TouchableHighlight>
    );
};

export default SettingsButton;
