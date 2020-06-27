import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components';
import { fetchHTML } from '../helpers/http';
import { getGames } from '../helpers/game';
import { connect } from 'react-redux';
import { Game } from './Game';
import { Ads } from './Ads';

const DumbComponent = () => {
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
    <ScrollViewUi>
      {renderGames()}
      <AdsUi />
    </ScrollViewUi>
  );
};

const ScrollViewUi = styled(ScrollView)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: red;
`;

const AdsUi = styled(Ads)`
  margin-top: 300px;
`;

export const MonthlyGames = connect()(DumbComponent);
