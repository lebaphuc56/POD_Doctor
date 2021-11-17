import 'react-native-gesture-handler';
import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from '../constants/Icons'
import Colors from '../constants/Colors'

import HomeActivity from '../screens/user/HomeActivity';

import ClockActivity from '../screens/bottomtab/ClockActivity';
import SurveyActivity from '../screens/bottomtab/SurveyActivity'
import CartActivity from '../screens/bottomtab/CartActivity'
import * as Animatable from 'react-native-animatable'
import {
  createStackNavigator,
  TransitionPresets,

} from '@react-navigation/stack';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home-heart', component: HomeActivity, color: Colors.primey, },
  { route: 'Doctor', label: 'Doctor', type: Icons.Feather, icon: 'doctor', component: SurveyActivity, color: Colors.green, },
  { route: 'Notification', label: 'Notification', type: Icons.Feather, icon: 'bell', component: ClockActivity, color: Colors.red, },
  { route: 'Profile', label: 'Profile', type: Icons.FontAwesome, icon: 'doctor', component: CartActivity, color: Colors.black, },
];

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewref = useRef(null)
  const textviewref = useRef(null)
  useEffect(() => {

    if (focused) {
      viewref.current.animate({ 0: { scale: 0 }, 1: { scale: 1 }, 2: { scale: 1 } });
      textviewref.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });


    } else {
      viewref.current.animate({ 0: { scale: 1 }, 1: { scale: 1 } });
      textviewref.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });


    }


  }, [focused])
  return (

    <TouchableOpacity style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
      onPress={onPress} >
      <Animatable.View
        ref={viewref}

        style={{
          flexDirection: 'row',
          backgroundColor: focused ? Colors.white : Colors.blue,
          width: 90,
          height: 40,
          alignItems: 'center',
          borderRadius: 8,

        }}>
        <MaterialCommunityIcons name={item.icon} size={22} color={focused ? Colors.blue : Colors.white} />
        <Animatable.View
          ref={textviewref}>
          <Text
            style={{
              fontSize: 12,
              color: focused ? Colors.blue : Colors.white,
              paddingHorizontal: 4

            }}>{item.label}</Text>
        </Animatable.View>
      </Animatable.View>
    </TouchableOpacity>

  )
}
const tab = () => {
  const Tab2 = createStackNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.blue
        }

      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen name={item.route} component={item.component}
            options={{
              tabBarLabel: item.label,
              ...TransitionPresets.SlideFromRightIOS,

              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons name={item.icon} size={24} color={color} />),
              tabBarButton: (props) => <TabButton {...props} item={item} />

            }} />
        )
      })}


    </Tab.Navigator>

  );
};
export default tab;



