import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './Home.style';

const Home = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    
    return(
        <View style={{
            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default Home