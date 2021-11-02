import PlayerInfo from "./PlayerInfo"
import ScoreCard from "./ScoreCard"

export default function PlayerPanel({ playerNumber, active, totalScore, scorecard, turns, onRollClick, setScoreClick, heldDice }) {

    return (
        <div 
            className={`PlayerPanel ${active ? "active" : ""}`}
            >
            <PlayerInfo
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
                    disabled={heldDice === 5 ? true : false}
                >
                    {heldDice === 5 ? "All Dice Held" : "Roll Dice"}
                </button>
                : <button disabled>No more turns</button>
            }
            

            <ScoreCard 
                playerNumber = {playerNumber}
                scoreCard = {scorecard}
                active = {active}   
                turns =  {turns}
                setScoreClick = {setScoreClick}
            />
        </div>
    )
}