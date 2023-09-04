import React from 'react';
import {View, Text} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './Physics.style';

const Physics = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    
    return(
        <View style={{
            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Text>Physics Screen</Text>
        </View>
    )
}

export default Physics