import PlayerInfo from "./PlayerInfo"
import ScoreCard from "./ScoreCard"
import PlayerData from "../PlayerData"

export default function PlayerPanel({ playerNumber }) {
    return (
        <div 
            className={`PlayerPanel ${PlayerData[playerNumber-1].active ? "active" : ""}`}
            >
            <PlayerInfo
                playerNumber = {playerNumber}
                playerScore = {PlayerData[playerNumber-1].totalScore}   
                turns =  {PlayerData[playerNumber-1].turns} 
                active = {PlayerData[playerNumber-1].active}
            />
            <button>Roll Dice</button>
            <ScoreCard />
        </div>
    )
}