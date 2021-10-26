import Dice from "./Dice";

export default function DiceColumn() {
    return (
        <div className="DiceColumn">
            <Dice 
                active='true'
                number = "1" 
            />
            <Dice 
                active='true'
                number = "2"  
            />
            <Dice 
                active='true'
                number = "1"  
            />
            <Dice 
                active='false'
                number = "5"  
            />
            <Dice 
                active='false'
                number = "1"  
            />
        </div>
    )
}