import DiceColumn from "./DiceColumn"
import PlayerPanel from "./PlayerPanel"

export default function Wrapper() {
    return (
        <div id="Wrapper">
            <PlayerPanel 
                playerNumber = '1'
            />
            <PlayerPanel 
                playerNumber = '2'
            />
            <DiceColumn />
        </div>
    )
}