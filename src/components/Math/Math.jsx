import React from 'react';
import {View, Text} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './Math.style';

const Math = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    
    return(
        <View style={{
            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Text>Math Screen</Text>
        </View>
    )
}

export default Math