import styled from 'styled-components';
import { Field } from './components/Field'
import { useState } from 'react';

// const game = {
//   isStarted: false,
//   isPaused: true,
//   score: null,
//   speed: null,
//   density: null,
//   timer: null,
//   startedTime: null,
//   intervalId: null,
//   updateTime: null,
//   densityStep: null,
//   balloonsArray: null,
//   // update() {
//   //   updateGame();
//   // }
// }

// function initGame() {
//   game.isPaused = true;
//   game.score = 0;
//   game.speed = 0.01;
//   game.density = 10/40;
//   game.remainingLives = 5;
//   game.updateTime = 50;
//   game.densityStep = 1;
//   game.balloonsArray = [];
//   game.scoreElem = document.getElementById('score-count');
// }

const StartBTN = styled.button`
margin: 250px 250px;
width:100px;
height:50px;
`


function App() {

  const [isStarted, setIsStarted] = useState(false)

  function startGame () {
    setIsStarted(true);
  }
  
  return (
    <div className="App">
      {!isStarted && <StartBTN 
      onClick={()=>{
        startGame()}}
      >Start</StartBTN>}
      {isStarted && <Field/>}
    </div>
  );
}

export default App;
