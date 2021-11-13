import React from 'react';
import Player from '../components/player';
import buttonstyles from '../styles/button.module.scss';
import styles from '../styles/index.module.scss';

export default function Home() {

  return (
    <div>
      <h1 className={styles.title}>🏓 Current Players</h1>
      <div className={styles.players}>
        <Player name='Team One' emoji='1️⃣' />
        <Player name='Team Two' emoji='2️⃣' />
      </div>

      {/* <button className={buttonstyles.button} onClick={() => {
        let plys = document.querySelector('.players');
        let newElement = document.createElement('div');
        plys.appendChild(newElement);

        ReactDOM.render(curChilds, newElement);
      }}>Add Player</button> */}
    </div>
  )
}
