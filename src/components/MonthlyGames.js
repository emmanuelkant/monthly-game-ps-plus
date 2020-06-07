import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Game } from './Game';

const DumbComponent = async props => {
  const [games, setGames] = useState([]);

  return (
    <View>
      {games.length === 0 ? (
        <Text>Loading</Text>
      ) : (
        games.map(game => {
          return <Game key={game.name} name={game.name} />;
        })
      )}
    </View>
  );
};

export const MonthlyGames = connect()(DumbComponent);
