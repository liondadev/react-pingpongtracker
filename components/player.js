import React from 'react'
import styles from '../styles/components/player.module.scss';

function Player(props) {
    const [ points, setPoints ] = React.useState(0);

    return (
        <div className={styles.playerCard}>
            <h1>{props.emoji}</h1>
            <h2>{props.name}</h2>
            <h3>{points}</h3>

            <div className={styles.buttons}>
                <button onClick={() => {
                    setPoints(points + 1)
                }} className={styles.addButton}>
                    <span className='material-icons'>add</span>
                </button>
                <button onClick={() => {
                    setPoints(points - 1)
                }} className={styles.removeButton}>
                    <span className='material-icons'>remove</span>
                </button>
            </div>
        </div>
    )
}

export default Player;
