import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabQRcode from './TabQRcode';
import ScannerScreen from './ScannerScreen';
import TabScanner from './TabScanner';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tab1_Option = {
  tabBarLabel: 'QRcode',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./img/ic_qr_code_press.png')
          : require('./img/ic_qr_code_normal.png')
      }
    />
  ),
};

const tab2_Option = {
  tabBarLabel: 'Scanner',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./img/ic_qr_scan_press.png')
          : require('./img/ic_qr_scan_normal.png')
      }
    />
  ),
};


export default RootStack;
