import React, { useEffect, useState } from 'react';
import convert from 'xml-js'
import './Game.scss';

const Game = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGamesJson();
    getGamesXml();
  }, []);

  // Trying different options for rendering to choose the optimal one
  // Render using JSON
  async function getGamesJson() {
    const response = await fetch('https://www.boardgamegeek.com/xmlapi2/thing?id=1406,320');
    const xml = await response.text();
    const gamesString = convert.xml2json(xml, {compact: false, spaces: 2});
    const games = JSON.parse(gamesString)
      .elements[0].elements;
    setGames(games);
  }

  // Render using XML
  async function getGamesXml() {
    const response = await fetch('https://www.boardgamegeek.com/xmlapi2/collection?username=samort7&subtype=boardgame&own=1');
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
      games.appendChild(tempName);
    }
  }

  const isJson = false;

  if(isJson) {
    return (
      <ul>
        {games.map((game, i) => (
          <li key={i}>
            <div>Type: {game.attributes.type}</div>
            {
              game.elements.map((gameProp, j) => (
                <div key={j}>Name: {gameProp.name}</div>
              ))
            }
          </li>
        ))}
      </ul>
    )
  }
  else {
    return (
      <>
        <h2>Collection of samort7</h2>
        <div id="games"/>
      </>
    );
  }
}

export default Game;
