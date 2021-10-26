import PlayerTurns from "./PlayerTurns"

export default function PlayerInfo() {
    return (
        <div className='PlayerInfo'>
            <PlayerTurns />
            <h2>Player Name</h2>
            <p className="PlayerScore">
                Score: 0
            </p>
        </div>
    )
}