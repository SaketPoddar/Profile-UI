/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => {
  return {
    NavigationContainer: ({children}: {children: React.ReactNode}) => children,
    DefaultTheme: {
      dark: false,
      colors: {
        primary: '#000000',
        background: '#ffffff',
        card: '#ffffff',
        text: '#000000',
        border: '#cccccc',
        notification: '#ff0000',
        iconPrimary: '#000000',
        iconSecondary: '#ababab',
        iconWhite: '#ffffff',
        orange: '#ee8924',
        textPrimary: '#262422',
        textSecondary: '#ababab',
      },
    },
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useTheme: () => ({
      colors: {
        iconPrimary: '#000000',
        iconSecondary: '#ababab',
        iconWhite: '#ffffff',
        orange: '#ee8924',
        textPrimary: '#262422',
        textSecondary: '#ababab',
        background: '#ffffff',
      },
    }),
  };
});

jest.mock('@react-navigation/native-stack', () => {
  const mockReact = require('react');
  const mockReactNative = require('react-native');

  return {
    createNativeStackNavigator: () => ({
      Navigator: ({children}: {children: React.ReactNode}) => children,
      Screen: ({component: Component}: {component: React.ComponentType}) =>
        Component
          ? mockReact.createElement(Component)
          : mockReact.createElement(mockReactNative.Text, null, 'Missing screen'),
    }),
  };
});

it('renders correctly', () => {
  const tree = renderer.create(<App />);

  tree.unmount();
});
