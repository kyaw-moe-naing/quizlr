import * as React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import tabs from './routes';
import { TabButton } from '../components/TabButton';
import { Colors } from '../utils/colors';
import { StatusBar } from 'react-native';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar backgroundColor={Colors.black} barStyle="default" />
      <Tab.Navigator
        tabBar={props => <TabButton {...props} />}
        screenOptions={{ headerShown: false }}
      >
        {tabs.map((route) => <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />)}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;