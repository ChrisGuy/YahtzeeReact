import PlayerInfo from "./PlayerInfo"
import ScoreCard from "./ScoreCard"

export default function PlayerPanel({ playerNumber, active, totalScore, scorecard, turns, onRollClick }) {

    return (
        <div 
            className={`PlayerPanel ${active ? "active" : ""}`}
            >
            <PlayerInfo
                playerNumber = {playerNumber}
                playerScore = {totalScore}   
                turns =  {turns} 
                active = {active}
            />
            {
                turns
                ? <button
                    className = {!active ? "hidden" : ""}
                    onClick = {onRollClick}
                    id={playerNumber - 1}
                >
                    Roll Dice
                </button>
                : <button disabled>No more turns</button>
            }
            

            <ScoreCard 
                scoreCard = {scorecard}
                active = {active}
            />
        </div>
    )
}