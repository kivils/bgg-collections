import React, { useEffect, useState } from 'react';
import convert from 'xml-js'
import styles from './Game.scss';

const Game = () => {
  const [games, setGames] = useState([]);
  const isJson = true; // We'll use json over xml. XML - as a reference from official docs

  useEffect(() => {
    getGamesJson();
    getGamesXml();
  }, []);

  // Trying different options for rendering to choose the optimal one
  // Render using JSON
  async function getGamesJson() {
    const response = await fetch('https://www.boardgamegeek.com/xmlapi2/collection?username=sever79&subtype=boardgame&own=1');
    const xml = await response.text();
    const gamesString = convert.xml2json(xml, {compact: true, spaces: 2});
    const games = JSON.parse(gamesString).items.item
      // .elements[0].elements;
    setGames(games);
    console.log(games[0]);
  }

  // Render using XML
  async function getGamesXml() {
    const response = await fetch('https://www.boardgamegeek.com/xmlapi2/collection?username=sever79&subtype=boardgame&own=1');
    const xml = await response.text();
    renderGameData(xml);
  }

  const renderGameData = (text) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");

    //Get the number of items - we know this will be two because we only passed in two IDs
    var numberOfNames = xmlDoc.getElementsByTagName("item").length;

    //Create an array of the two items
    var items = xmlDoc.getElementsByTagName("item");

    for (let i=0; i<numberOfNames; i++) {
      //Create a new paragraph tag
      const tempName = document.createElement("p");

      //Get the primary (first) name of the game
      //Set the contents of the paragraph tag to the game name
      tempName.innerHTML = items[i].getElementsByTagName('name')[0].innerHTML;

      //Add the paragraph tag to the div in the body
      const games = document.getElementById("games");
      if (games) {
        games.appendChild(tempName);
      }
    }
  }

  if(isJson) { // getGamesJson
    return (
      <>
        <h2>Коллекция пользователя sever79 ({games.length} игр)</h2>
        {
          games.length ?
          <ul className={styles['list']}>
            {Object.keys(games).map(game => (
              <li key={game} className="item">
                <div className="imgWrapper"><img src={games[game].thumbnail._text} className="img" /></div>
                <div className="info">
                  <div className="name">
                    <a href={'https://boardgamegeek.com/boardgame/' + games[game]._attributes.objectid + '/'} target="_blank">{games[game].name._text}</a>
                  </div>
                  <div className="year">{games[game].yearpublished._text}</div>
                  {games[game].wishlistcomment && <div className="comment">Комментарий: {games[game].wishlistcomment._text}</div>}
                  <div className="count">Сыграно партий: {games[game].numplays._text}</div>
                </div>
              </li>
            ))}
          </ul>
          : null
        }
      </>
    )
  }
  else {
    return (
      <>
        <h2>Collection of sever79</h2>
        <div id="games"/>
      </>
    );
  }
}

export default Game;
