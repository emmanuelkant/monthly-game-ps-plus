import React from 'react';
import { View, Text } from 'react-native';

export const Game = props => {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Description: {props.description}</Text>
    </View>
  );
};
