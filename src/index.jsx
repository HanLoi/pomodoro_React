import { render } from 'react-dom';
import React, { useEffect, useState } from 'react';

function Pomodoro() {
  const [time, setTime] = useState(300);
  const [timer, setTimer] = useState(null);
  const [button, setButton] = useState(true);

  function StartStop() {
    useEffect(() => { document.getElementById('titre').innerHTML = `${Math.floor(time / 60)} minutes and ${time - (Math.floor(time / 60)) * 60}`; });

    function bomb() {
      setTime((t) => t - 1);
    }

    function start() {
      setTimer(window.setInterval(() => { bomb(); }, 1000));
      setButton(false);
    }

    function stop() {
      clearInterval(timer);
      setButton(true);
    }
    return button ? <button onClick={() => start()}> Start </button> : <button onClick={() => stop()}> Stop </button>;
  }
  return (
    <div>
      <StartStop />
      <button onClick={() => setTime(time + 60)}> + </button>
      <button onClick={() => setTime(time - 60)}> - </button>
      <button onClick={() => setTime(300)}> Réinitialiser  </button>
    </div>
  );
}

render(
  <div>
    <p id="titre"></p>
    <Pomodoro />
  </div>,
  document.getElementById('root'),
);
