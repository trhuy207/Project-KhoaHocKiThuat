import React from 'react';
import {View, Text} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './English.style';

const English = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    
    return(
        <View style={{
            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Text>English Screen</Text>
        </View>
    )
}

export default English