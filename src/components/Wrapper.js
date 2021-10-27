import DiceColumn from "./DiceColumn"
import PlayerPanel from "./PlayerPanel"
import PlayerData from "../PlayerData"
import DiceData from "../DiceData"

import { useState } from "react"

export default function Wrapper() {

    const [playerData, setPlayerData] = useState(PlayerData)
    const [dice, setDice] = useState(DiceData)
    const [activePlayer, setActivePlayer] = useState(0)


// Roll the dice and reduce turn count
    const handleRollClick = (e) => {
        e.preventDefault()
        const tempTurns = playerData[e.target.id].turns
        // Reduce active player's turn count
        setPlayerData([
            ...playerData,
            playerData[e.target.id].turns = tempTurns - 1 ]
        )
        // Loop through the dice
        for (let i = 0; i <= 4 ; i++) {
            let tempDice = dice
            // Identifies "held" dice and skips the roll on them
            if (dice[i].active) {
                continue 
            }
            // Generate random number on un-held dice
            else 
            {
                tempDice = [
                    ...tempDice,
                    dice[i].number = (Math.floor(Math.random() * 6) + 1)
                ]
            }
            // Update dice data with temp dice values
            setDice (tempDice.splice(0,5))
          }
        toggleActive()
        }

// Hold and un-hold dice
    const handleDiceClick = (e) => {
        const tempActive = dice[e.target.id].active
        let tempDice = dice
        tempDice = [
            ...tempDice,
            dice[e.target.id].active = !tempActive
        ]
        // Update dice data with temp dice hold values
        setDice(tempDice.splice(0,5))
    }

    //Switch between active players
    const toggleActive = () => {
        if (!activePlayer) {
            setActivePlayer(1)
            setPlayerData([
                ...PlayerData,
                playerData[0].active = 1,
                playerData[1].active = 0,
                playerData[1].turns = 3
            ])
        }
        else {
            setActivePlayer(0)
            setPlayerData([
                ...PlayerData,
                playerData[1].active = 1,
                playerData[0].active = 0,
                playerData[0].turns = 3
            ])
        }
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
            <DiceColumn 
                handleDiceClick = {handleDiceClick}
                dice = {dice}
                activePlayer = {playerData}
                turns = {playerData}
            />
        </div>
    )
}