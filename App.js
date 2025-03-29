import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import { lightTheme } from './src/theme/lightTheme';
import { darkTheme } from './src/theme/darkTheme';
import { useColorScheme } from 'react-native';
import SettingScreen from './src/screens/SettingScreen';




const Stack = createNativeStackNavigator();

function App() {
  const scheme = useColorScheme();

  // we have to sync it up with the system theme
  
  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Stack.Navigator screenOptions={{
        headerShown: true
      }}>
        <Stack.Screen name="PROFILE SCREEN" component={ProfileScreen} />
        <Stack.Screen name="SETTING SCREEN" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;