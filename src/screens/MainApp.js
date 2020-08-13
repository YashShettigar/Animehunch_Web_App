import React, { useEffect } from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

// screens
import Splash from './Splash'
import Home from './Home'
 
const Stack = createStackNavigator()

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                headerMode='none'
            >
                <Stack.Screen 
                    name="Splash"
                    component={Splash}
                />
                <Stack.Screen 
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}