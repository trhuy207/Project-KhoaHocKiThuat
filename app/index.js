import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Main from '../src/components/main'
import Chemistry from '../src/components/Chemistry/Chemistry'
import Math from '../src/components/Math/Math'
import Physics from '../src/components/Physics/Physics'
import English from '../src/components/English/English'

import Tkb from '../src/components/Tkb/Tkb';
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

                    <Stack.Screen 
                        name='Tkb' 
                        component={Tkb}
                        options={{
                            title: 'Thời Khóa Biểu',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 30,
                            },
                        }}
                    />

                    <Stack.Screen 
                        name='UpdateTkb' 
                        component={UpdateTkb}
                        options={{
                            title: 'Chỉnh Sửa Thời Khóa Biểu',
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