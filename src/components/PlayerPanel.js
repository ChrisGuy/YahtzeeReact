import PlayerInfo from "./PlayerInfo"
import ScoreCard from "./ScoreCard"

export default function PlayerPanel() {
    return (
        <div className='PlayerPanel'>
            <PlayerInfo />
            <button>Roll Dice</button>
            <ScoreCard />
        </div>
    )
}