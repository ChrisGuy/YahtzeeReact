import DiceColumn from "./DiceColumn"
import PlayerPanel from "./PlayerPanel"
import PlayerData from "../PlayerData"
import DiceData from "../DiceData"

import { useState } from "react"

export default function Wrapper() {

    const [playerData, setPlayerData] = useState(PlayerData)

    const [dice, setDice] = useState(DiceData)

    const handleRollClick = (e) => {
        e.preventDefault();
        const tempTurns = playerData[e.target.id].turns
        setPlayerData([
            ...playerData,
            playerData[e.target.id].turns = tempTurns - 1 ]
        )
        
        for (let i = 0; i < 5; i++) {
            // Identifies "held" dice and skips the roll on them
            if (dice[i].active) {
              continue
            } else {
                setDice([
                    ...dice,
                    dice[i].number = (Math.floor(Math.random() * 6) + 1)
                ])
              
            }
          }
        
    }

    const handleDiceClick = (e) => {
        const tempActive = dice[e.target.id].active
        setDice([
            ...dice,
            dice[e.target.id].active = !tempActive
        ])
    }

    console.log(dice);

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
            <DiceColumn 
                handleDiceClick = {handleDiceClick}
                dice = {dice}
            />
        </div>
    )
}