import PlayerTurns from "./PlayerTurns"
import { useState } from "react"

export default function PlayerInfo({ playerNumber }) {
    const [playerName, setPlayerName] = useState("Insert Name");
    

    const handleNameChange = (e) => {
        setPlayerName(e.target.value);
      }


    return (
        <div className='PlayerInfo'>
            <PlayerTurns />
            <input 
                type="text"
                value={playerName}
                onChange={handleNameChange}
                className="PlayerName"
                />
            <p className="PlayerScore">
                Score: 0
            </p>
        </div>
    )
}