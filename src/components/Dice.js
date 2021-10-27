import dice1 from '../assets/images/dice-1.png'
import dice2 from '../assets/images/dice-2.png'
import dice3 from '../assets/images/dice-3.png'
import dice4 from '../assets/images/dice-4.png'
import dice5 from '../assets/images/dice-5.png'
import dice6 from '../assets/images/dice-6.png'

export default function Dice({active, number, handleDiceClick, id, turns}) {
    const dice = [
        dice1, dice2, dice3, dice4, dice5, dice6
    ]
    
    return (
        <img 
            src={dice[number-1]}
            alt={'Dice' + number}
            className={`Dice ${active ? "active" : ""} ${turns && turns !== 3 ? "Dicehover" : ""}`}
            onClick={handleDiceClick}
            id = {id}
        />
    )
}