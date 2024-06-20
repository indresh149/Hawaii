/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SurfingScreen from './screens/SurfingScreen';
import HulaScreen from './screens/HulaScreen';
import VulcanoScreen from './screens/VulcanoScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12,fontFamily: 'IBMPlexMono-Regular', color: '#008080'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/images/HomeIcon.png')}
                style={{
                  resizeMode: 'contain',
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#008080' : 'black',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Surfing"
          component={SurfingScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12,fontFamily: 'IBMPlexMono-Regular', color: '#001A1A'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/images/surficon.png')}
                style={{
                  resizeMode: 'contain',
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#008080' : 'black',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Hula"
          component={HulaScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12,fontFamily: 'IBMPlexMono-Regular', color: '#001A1A'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/images/nightlife.png')}
                style={{
                  resizeMode: 'contain',
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#008080' : 'black',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Vulcano"
          component={VulcanoScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12,fontFamily: 'IBMPlexMono-Regular', color: '#001A1A'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/images/filter_hdr.png')}
                style={{
                  resizeMode: 'contain',
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#008080' : 'black',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="DrawerScreen"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  function Navigation() {
    return (
      <NavigationContainer>
        <AuthenticatedStack />
      </NavigationContainer>
    );
  }

  function Root() {
    return <Navigation />;
  }

  return (
    <>
      <Root />
    </>
  );
}

export default App;
