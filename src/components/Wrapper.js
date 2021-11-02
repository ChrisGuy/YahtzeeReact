import DiceColumn from "./DiceColumn"
import PlayerPanel from "./PlayerPanel"
import PlayerData from "../PlayerData"
import DiceData from "../DiceData"

import { useState, useEffect } from "react"

export default function Wrapper() {

    const [playerData, setPlayerData] = useState(PlayerData)
    const [dice, setDice] = useState(DiceData)
    const [activePlayer, setActivePlayer] = useState(0)
    const [activeDice, setActiveDice] = useState(0)


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
          threeOfAKindScore()
          yahtzeeScore()
          chanceScore()
          totalScore()        
        }

// Hold and un-hold dice
    const handleDiceClick = (e) => {
        
        if (playerData[activePlayer].turns > 0 && playerData[activePlayer].turns < 3){
            const tempActive = dice[e.target.id].active
            let tempDice = dice
            let tempActiveDice = activeDice
            tempDice = [
                ...tempDice,
                dice[e.target.id].active = !tempActive
            ]
            if (tempActive === false){
                tempActiveDice++
            }
            else {
                tempActiveDice--
            }
            // Update dice data with temp dice hold values
            setDice(tempDice.splice(0,5))
            setActiveDice(tempActiveDice)
        }
    }

// Clear the hold setting on dice as active player changes
    const resetActiveDice = () => {
        for (let i = 0; i < 5; i++) {
            setDice([
                ...dice,
                dice[i].active = false
            ])
        }
        setActiveDice(0)
    }

// Save the score
    const setScore = (e) => {
        e.preventDefault()
        let tempSet = playerData[activePlayer].scorecard[e.target.id].set
        setPlayerData([
            ...playerData,
            playerData[activePlayer].scorecard[e.target.id].set = !tempSet
        ])
               
        console.log(playerData);
        totalScore()
        clearTempScores()  
        toggleActive()
    }

// Calculate the total score
    const totalScore = ()  => {
        let tempTotalScore = [[0],[0]]
        let p1ScoreTotal = "0"
        let p2ScoreTotal = "0"
        for (let j = 0; j < 2; j++) {
            for (let i = 0; i < 13; i++) {
                if(playerData[j].scorecard[i].set){
                    tempTotalScore[j].push(playerData[j].scorecard[i].score)
                    p1ScoreTotal = tempTotalScore[0].reduce((a, b) => a + b)
                    p2ScoreTotal = tempTotalScore[1].reduce((a, b) => a + b)
                }
            }
            setPlayerData([
                ...playerData,
                playerData[0].totalScore = p1ScoreTotal,
                playerData[1].totalScore = p2ScoreTotal
            ])
        }
        tempTotalScore = [[0],[0]]
    }

// Clear temporary scores on active player change
    const clearTempScores = () => {
        for (let i = 0; i < 13; i++) {
            if (playerData[activePlayer ? 1 : 0].scorecard[i].set === false) {
                setPlayerData([
                    ...playerData,
                    playerData[activePlayer ? 1 : 0].scorecard[i].score = "0"
                ])
            }
        }
        console.log(playerData);
    }

//Switch between active players
    const toggleActive = () => {
        let tempPlayerData = playerData.splice(0, 2)
        if (!activePlayer) {
            setActivePlayer(1)
            setPlayerData([
                ...tempPlayerData,
                tempPlayerData[0].active = 0,
                tempPlayerData[1].active = 1,
                tempPlayerData[1].turns = 3,
                tempPlayerData[0].turns = 3
            ])
        }
        else {
            setActivePlayer(0)
            setPlayerData([
                ...tempPlayerData,
                tempPlayerData[1].active = 0,
                tempPlayerData[0].active = 1,
                tempPlayerData[0].turns = 3,
                tempPlayerData[1].turns = 3
            ])
        }
        resetActiveDice()       
        console.log(dice);
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

// THREE OF A KIND
    const threeOfAKindScore = () => {
        let threeOfAKind = []
        let scoreCalc 

        for (let i = 0; i < 5; i++) {
            threeOfAKind.push(dice[i].number)
            scoreCalc = threeOfAKind.reduce((a, b) => a + b)
        }

        for (let j = 1; j < 7; j++) {
            let result = threeOfAKind.filter(num => num === j)

            if (result.length >= 3) {
                setPlayerData([
                    ...playerData,
                    playerData[activePlayer].scorecard[6].score = scoreCalc
                ])
            }
        }
        
    }

// YAHTZEE
    const yahtzeeScore = () => {
    let yahtzeeArr = []
    // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[11].set) {
            yahtzeeArr.push(dice[0].number)
            for (let i = 1; i < 5; i++) {
                if (dice[i].number === yahtzeeArr[0]) {
                    yahtzeeArr.push(dice[i].number)
                    if (yahtzeeArr.length === 5) {
                        setPlayerData([
                            ...playerData,
                            playerData[activePlayer].scorecard[11].score = 50
                        ])
                    }
                } else {
                    yahtzeeArr = []
                }
            }
            
    }
}

    const chanceScore = () => {
        // Check if a score has been applied already, if not, update
        if (!playerData[activePlayer].scorecard[12].set) {
            let tempArr = dice.splice(0, 5)
            let scoreCalc = tempArr.map(dice => {
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
                heldDice= {activeDice}
            />
            <PlayerPanel 
                playerNumber = '2'
                active = {playerData[1].active}
                turns = {playerData[1].turns}
                scorecard = {playerData[1].scorecard}
                totalScore = {playerData[1].totalScore}
                onRollClick = {handleRollClick}
                setScoreClick = {setScore}
                heldDice= {activeDice}
            />
            <DiceColumn 
                handleDiceClick = {handleDiceClick}
                dice = {dice}
                activePlayer = {activePlayer}
                turns = {playerData[activePlayer].turns} 
            />
        </div>
    )
}