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
          onesScore()
          twosScore()  
          threesScore()
          foursScore()
          fivesScore()
          sixesScore()
          chanceScore()           
        }

// Hold and un-hold dice
    const handleDiceClick = (e) => {

        if (playerData[activePlayer].turns > 0 && playerData[activePlayer].turns < 3){
            const tempActive = dice[e.target.id].active
            let tempDice = dice
            tempDice = [
                ...tempDice,
                dice[e.target.id].active = !tempActive
            ]
            // Update dice data with temp dice hold values
            setDice(tempDice.splice(0,5))
        }
    }

// Save the score
    const setScore = (e) => {
        let tempSet = playerData[activePlayer].scorecard[e.target.id].set
        setPlayerData([
            ...playerData,
            playerData[activePlayer].scorecard[e.target.id].set = !tempSet
        ])
        toggleActive()
    }

    //Switch between active players
    const toggleActive = () => {
        if (!activePlayer) {
            setActivePlayer(1)
            setPlayerData([
                ...PlayerData,
                playerData[0].active = 0,
                playerData[1].active = 1,
                playerData[1].turns = 3
            ])
            console.log(activePlayer);
            console.log(playerData);
        }
        else {
            setActivePlayer(0)
            setPlayerData([
                ...playerData,
                playerData[1].active = 0,
                playerData[0].active = 1,
                playerData[0].turns = 3
            ])
            console.log(activePlayer);
            console.log(playerData);
        }
    }

    const onesScore = () => {
        // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[0].set) {
            let scoreCalc = dice.filter(dice => {
                return dice.number === 1
            })
            if (scoreCalc.length > 0) {

                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[0].score = scoreCalc.length
                ])
            }
            else 
            {
                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[0].score = 0
                ])
            }
        }
    }

    const twosScore = () => {
        // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[1].set) {
            let scoreCalc = dice.filter(dice => {
                return dice.number === 2
            })
            if (scoreCalc.length > 0) {

                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[1].score = scoreCalc.length * 2
                ])
            }
            else 
            {
                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[1].score = 0
                ])
            }
        }
    }

    const threesScore = () => {
        // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[2].set) {
            let scoreCalc = dice.filter(dice => {
                return dice.number === 3
            })
            if (scoreCalc.length > 0) {

                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[2].score = scoreCalc.length * 3
                ])
            }
            else 
            {
                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[2].score = 0
                ])
            }
        }
    }

    const foursScore = () => {
        // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[3].set) {
            let scoreCalc = dice.filter(dice => {
                return dice.number === 4
            })
            if (scoreCalc.length > 0) {

                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[3].score = scoreCalc.length * 4
                ])
            }
            else 
            {
                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[3].score = 0
                ])
            }
        }
    }

    const fivesScore = () => {
        // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[4].set) {
            let scoreCalc = dice.filter(dice => {
                return dice.number === 5
            })
            if (scoreCalc.length > 0) {

                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[4].score = scoreCalc.length * 5
                ])
            }
            else 
            {
                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[4].score = 0
                ])
            }
        }
    }

    const sixesScore = () => {
        // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[5].set) {
            let scoreCalc = dice.filter(dice => {
                return dice.number === 6
            })
            if (scoreCalc.length > 0) {

                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[5].score = scoreCalc.length * 6
                ])
            }
            else 
            {
                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[5].score = 0
                ])
            }
        }
    }

    const chanceScore = () => {
        // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[12].set) {
            let scoreCalc = dice.map(dice => {
                return dice.number
            }).reduce((a, b) => a + b)
            setPlayerData([
                ...playerData,
                playerData[activePlayer].scorecard[12].score = scoreCalc
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
                setScoreClick = {setScore}
            />
            <PlayerPanel 
                playerNumber = '2'
                active = {playerData[1].active}
                turns = {playerData[1].turns}
                scorecard = {playerData[1].scorecard}
                totalScore = {playerData[1].totalScore}
                onRollClick = {handleRollClick}
                setScoreClick = {setScore}
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