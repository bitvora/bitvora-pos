/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

const CURRENCIES = [
  {
    label: 'USD',
    image: (
      <Image
        source={require('../assets/usa.png')}
        style={{width: 15, height: 15, marginLeft: 10}}
      />
    ),
  },
  {
    label: 'CAD',
    image: (
      <Image
        source={require('../assets/canada.png')}
        style={{width: 15, height: 15, marginLeft: 10}}
      />
    ),
  },
];

export default CURRENCIES;
