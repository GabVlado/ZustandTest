import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/presentation/navigators/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
