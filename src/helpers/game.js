export const getGames = async html => {
  const newGames = [];

  newGames.push(getGame(html));
  html = html.substring(html.indexOf("<h3 class=' default tier4Header'>"));
  html = html.substring(html.indexOf('/div>'));
  newGames.push(getGame(html));

  return newGames;
};

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
