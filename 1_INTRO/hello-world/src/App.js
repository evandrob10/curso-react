import React from 'react';
//Components
import GamesToPlay from './components/GamesToPlay';
//imgs
import Honor from './assets/honor-of-kings.jpg';
import League from './assets/league-of-legends.jpeg';
//Styles
import './App.css';

function App() {
  const Games = [
    {
      name: "League Of Legends",
      img: League,
      GameLink: "https://www.leagueoflegends.com/pt-br/"
    },
    {
      name: "Honor",
      img: Honor,
      GameLink: "https://www.honorofkings.com/br/"
    }
  ]

  const Game = () =>{
    const games = [];
    for(let Game of Games){
      games.push(<GamesToPlay img={Game.img} altImg={Game.name} link={Game.GameLink} />);
    }
    return games;
  }

  return (
    <div className="App">
      {Game()}
    </div>
  );
}


export default App;
