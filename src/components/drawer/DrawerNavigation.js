import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Home/Home';
import Info from '../Info/Info';
import Tkb from '../Tkb/Tkb';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title: 'AH STUDY'
                }}
            />
            <Drawer.Screen 
                name="Tkb" 
                component={Tkb} 
                options={{
                    title: 'Thời Khóa Biểu'
                }}
            />
            <Drawer.Screen 
                name="Info" 
                component={Info} 
                options={{
                    title: 'Giới Thiệu'
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation