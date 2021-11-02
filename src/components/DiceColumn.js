import Dice from "./Dice";

export default function DiceColumn({ dice, handleDiceClick, turns, activePlayer}) {
    
return (
        <div className="DiceColumn">
            <Dice 
                id = "0"
                active = {dice[0].active}
                number = {dice[0].number}
                handleDiceClick = {handleDiceClick}
                turns = {turns}
            />
            <Dice 
                id = "1"
                active = {dice[1].active}
                number = {dice[1].number}
                handleDiceClick = {handleDiceClick}   
                turns = {turns}
            />
            <Dice 
                id = "2"
                active = {dice[2].active}
                number = {dice[2].number}
                handleDiceClick = {handleDiceClick}   
                turns = {turns}
            />
            <Dice 
                id = "3"
                active = {dice[3].active}
                number = {dice[3].number}
                handleDiceClick = {handleDiceClick}  
                turns = {turns}
            />
            <Dice 
                id = "4"
                active = {dice[4].active}
                number = {dice[4].number}
                handleDiceClick = {handleDiceClick} 
                turns = {turns} 
            />
        </div>
    )
}