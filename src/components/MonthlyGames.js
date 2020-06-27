import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { fetchHTML } from '../helpers/http';
import { getGames } from '../helpers/game';
import { connect } from 'react-redux';
import { Game } from './Game';
import { Ads } from './Ads';

const DumbComponent = props => {
  const [games, setGames] = useState([]);

  const getMonthlyGames = async () => {
    let html = await fetchHTML();
    const newGames = await getGames(html);
    setGames(newGames);
  };

  useEffect(() => {
    getMonthlyGames();
  }, []);

  const renderGames = () => {
    if (games.length === 0) {
      return <Text>Loading</Text>;
    }
    return games.map(game => (
      <Game key={game.name} name={game.name} description={game.description} />
    ));
  };

  return (
    <ScrollView>
      {renderGames()}
      <Ads />
    </ScrollView>
  );
};

export const MonthlyGames = connect()(DumbComponent);
