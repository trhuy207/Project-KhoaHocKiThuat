import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Home/Home';
import Info from '../Info/Info';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Info" component={Info} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation