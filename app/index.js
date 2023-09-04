import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from '../src/components/Home/Home'
import Chemistry from '../src/components/Chemistry/Chemistry'
import Math from '../src/components/Math/Math'
import Physics from '../src/components/Physics/Physics'
import English from '../src/components/English/English'

const Stack = createNativeStackNavigator();

const Index = () => {
    return(
        <SafeAreaProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator >
                    <Stack.Screen 
                        name='Home' 
                        component={Home}
                        options={{
                            title: 'AH STUDY',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 30,
                            },
                        }}
                    />

                    <Stack.Screen 
                        name='Chemistry' 
                        component={Chemistry}
                        options={{
                            title: 'Chemistry',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 30,
                            },
                        }}
                    />

                    <Stack.Screen 
                        name='Math' 
                        component={Math}
                        options={{
                            title: 'Math',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 30,
                            },
                        }}
                    />
                    <Stack.Screen 
                        name='Physics' 
                        component={Physics}
                        options={{
                            title: 'Physics',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 30,
                            },
                        }}
                    />

                    <Stack.Screen 
                        name='English' 
                        component={English}
                        options={{
                            title: 'English',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 30,
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default Index;