import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import Lesson from '../screens/Lesson';
import Note from '../screens/Note';
import Profile from '../screens/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {defaultTheme} from '../utils';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <Pressable
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: defaultTheme.accentColor,
      }}>
      {children}
    </View>
  </Pressable>
);

const TabStack = () => {
  return (
    <Tab.Navigator
      initialROuteName="Lesson"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: defaultTheme.whiteColor,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      })}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="person"
                size={size}
                color={
                  focused
                    ? defaultTheme.accentColor
                    : defaultTheme.disabledColor
                }
              />
              <Text
                style={{
                  color: focused
                    ? defaultTheme.accentColor
                    : defaultTheme.disabledColor,
                  fontSize: 12,
                }}>
                PROFILE
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lesson"
        component={Lesson}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/images/logo-white.png')}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Note"
        component={Note}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="ios-list"
                size={size}
                color={
                  focused
                    ? defaultTheme.accentColor
                    : defaultTheme.disabledColor
                }
              />
              <Text
                style={{
                  color: focused
                    ? defaultTheme.accentColor
                    : defaultTheme.disabledColor,
                  fontSize: 12,
                }}>
                NOTES
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TabStack;
