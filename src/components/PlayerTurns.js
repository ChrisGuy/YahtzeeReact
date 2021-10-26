import { FaDiceD6 } from "react-icons/fa";

export default function PlayerTurns({ turns, active }) {
    const playerTurns = [];
    function getTurns() {
        for (let i = 0; i < turns; i++) {
            playerTurns.push(
                <li key={i}>
                    <FaDiceD6 />
                </li>)
        }
        return playerTurns;
    }
    return (
        <div className='PlayerTurns'>
            <ul>
                {
                    !active
                    ? ""
                    : turns
                    ? getTurns()  
                    : ""
                }
            </ul>
        </div>
    )
}

