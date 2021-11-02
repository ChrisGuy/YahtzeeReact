import PlayerTurns from "./PlayerTurns"
import { useState } from "react"

export default function PlayerInfo({ playerScore, turns, active }) {
    const [playerName, setPlayerName] = useState("Insert Name");
    

    const handleNameChange = (e) => {
        setPlayerName(e.target.value);
      }

    return (
        <div className='PlayerInfo'>
            <PlayerTurns 
                turns={turns}
                active={active}
            />
            <input 
                type="text"
                value={playerName}
                onChange={handleNameChange}
                className="PlayerName"
                />
            <p className="PlayerScore">
                Score: {playerScore}
            </p>
        </div>
    )
}