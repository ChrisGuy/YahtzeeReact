import PlayerInfo from "./PlayerInfo"
import ScoreCard from "./ScoreCard"

export default function PlayerPanel({ playerNumber }) {
    return (
        <div className='PlayerPanel'>
            <PlayerInfo
                playerNumber = {playerNumber}    
            />
            <button>Roll Dice</button>
            <ScoreCard />
        </div>
    )
}