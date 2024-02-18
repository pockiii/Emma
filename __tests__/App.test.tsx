/**
 * @format
 */
import 'react-native'
import HomeScreen from '../pages/HomeScreen';
import ProfileScreen from '../pages/ProfileScreen';
import React from 'react';
import App from '../App';
import { describe, it, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
