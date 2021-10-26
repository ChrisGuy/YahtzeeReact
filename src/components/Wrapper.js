import DiceColumn from "./DiceColumn"
import PlayerPanel from "./PlayerPanel"
import PlayerData from "../PlayerData"

import { useState } from "react"

export default function Wrapper() {

    const [playerData, setPlayerData] = useState(PlayerData)

    const handleRollClick = (e) => {
        e.preventDefault();
        const tempTurns = playerData[e.target.id].turns
        console.log(playerData[e.target.id].turns);
        setPlayerData([
            ...playerData,
            playerData[e.target.id].turns = tempTurns - 1 ]
        )
    }

    return (
        <div id="Wrapper">
            <PlayerPanel 
                playerNumber = '1'
                active = {playerData[0].active}
                turns = {playerData[0].turns}
                scorecard = {playerData[0].scorecard}
                totalScore = {playerData[0].totalScore}
                onRollClick = {handleRollClick}
            />
            <PlayerPanel 
                playerNumber = '2'
                active = {playerData[1].active}
                turns = {playerData[1].turns}
                scorecard = {playerData[1].scorecard}
                totalScore = {playerData[1].totalScore}
                onRollClick = {handleRollClick}
            />
            <DiceColumn />
        </div>
    )
}