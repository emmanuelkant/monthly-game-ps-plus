import React from 'react';
import { View, Text } from 'react-native';

export const Game = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};
