import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Main from '../src/components/main'
import Chemistry from '../src/components/Chemistry/Chemistry'

import UpdateTkb from '../src/components/Tkb/UpdateTkb/UpdateTkb';


const Stack = createNativeStackNavigator();

const Index = () => {
    return(
        <SafeAreaProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator >
                    <Stack.Screen 
                        name='Main' 
                        component={Main}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen 
                        name='Chemistry' 
                        component={Chemistry}
                        options={{
                            title: 'Chemistry',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 25,
                            },
                        }}
                    />

                    <Stack.Screen 
                        name='UpdateTkb' 
                        component={UpdateTkb}
                        options={{
                            title: 'Chỉnh Sửa',
                            headerBackTitle: 'Trở lại',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 25,
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default Index;