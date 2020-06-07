import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { getHTML } from '../helpers/http';
import { connect } from 'react-redux';
import { Game } from './Game';

const DumbComponent = props => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchHtml = async () => {
      let html = await getHTML();
      const newGames = [];

      newGames.push(getGame(html));
      html = html.substring(html.indexOf("<h3 class=' default tier4Header'>"));
      html = html.substring(html.indexOf('/div>'));
      newGames.push(getGame(html));

      setGames(newGames);
    };
    fetchHtml();
  }, []);

  const getGame = html => {
    html = html.substring(html.indexOf("<h3 class=' default tier4Header'>"));
    let game = html.substring(0, html.indexOf('</div>'));

    const name = game
      .substring(game.indexOf('>') + 1, game.indexOf('</h'))
      .trim();
    const description = game
      .substring(game.indexOf('<p'))
      .replace(/<\w+>|<\/\w+>/g, ' ')
      .replace(/ {2}/g, ' ')
      .replace(/\n/g, '')
      .trim();

    return {
      name,
      description,
    };
  };

  return (
    <ScrollView>
      {games.length === 0 ? (
        <Text>Loading</Text>
      ) : (
        games.map(game => (
          <Game
            key={game.name}
            name={game.name}
            description={game.description}
          />
        ))
      )}
    </ScrollView>
  );
};

export const MonthlyGames = connect()(DumbComponent);
