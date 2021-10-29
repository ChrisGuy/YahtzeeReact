import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix, FaHome, FaStar } from "react-icons/fa";

export default function ScoreCard({ scoreCard, setScoreClick}) {
    return (
        <div className="ScoreCard">
            <div className="Ones SCIcon">
                <FaDiceOne />
            </div>
            <div className="Twos SCIcon">
                <FaDiceTwo />
            </div>
            <div className="Threes SCIcon">
                <FaDiceThree />
            </div>
            <div className="Fours SCIcon">
                <FaDiceFour />
            </div>
            <div className="Fives SCIcon">
                <FaDiceFive />
            </div>
            <div className="Sixes SCIcon">
                <FaDiceSix />
            </div>
            <div className="ThreeX SCIcon">
                <p>3X</p>
            </div>
            <div className="FourX SCIcon">
                <p>4X</p>
            </div>
            <div className="FullHouse SCIcon">
                <FaHome />
            </div>
            <div className="SmStraight SCIcon">
                <p>SM</p>
            </div>
            <div className="LgStraight SCIcon">
                <p>LG</p>
            </div>
            <div className="Yahtzee SCIcon">
                <FaStar />
            </div>
            <div className="Chance SCIcon">
                <p>CH</p>
            </div>

            <button 
                id="0"
                className=
                {`
                    OnesLabel 
                    SCLabel 
                    ${scoreCard[0].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Ones
            </button>
            <button 
                id="1"
                className=
                {`
                    TwosLabel 
                    SCLabel 
                    ${scoreCard[1].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Twos
            </button>
            <button 
                id="2"
                className=
                {`
                    ThreesLabel 
                    SCLabel 
                    ${scoreCard[2].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Threes
            </button>
            <button 
                id="3"
                className=
                {`
                    FoursLabel 
                    SCLabel 
                    ${scoreCard[3].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Fours
            </button>
            <button 
                id="4"
                className=
                {`
                    FivesLabel 
                    SCLabel 
                    ${scoreCard[4].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Fives
            </button>
            <button 
                id="5"
                className=
                {`
                    SixesLabel 
                    SCLabel 
                    ${scoreCard[5].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Sixes
            </button>
            <button 
                id="6"
                className=
                {`
                    ThreeXLabel 
                    SCLabel 
                    ${scoreCard[6].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                3 of a Kind
            </button>
            <button 
                id="7"
                className=
                {`
                    FourXLabel 
                    SCLabel 
                    ${scoreCard[7].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                4 of a Kind
            </button>
            <button 
                id="8"
                className=
                {`
                    FullHouseLabel 
                    SCLabel 
                    ${scoreCard[8].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Full House
            </button>
            <button 
                id="9"
                className=
                {`
                    SmStraightLabel 
                    SCLabel 
                    ${scoreCard[9].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Sm Straight
            </button>
            <button 
                id="10"
                className=
                {`
                    LgStraightLabel 
                    SCLabel 
                    ${scoreCard[10].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Lg Straight
            </button>
            <button 
                id="11"
                className=
                {`
                    YahtzeeLabel 
                    SCLabel 
                    ${scoreCard[11].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Yahtzee
            </button>
            <button 
                id="12"
                className=
                {`
                    ChanceLabel 
                    SCLabel 
                    ${scoreCard[12].set ? "set" : ""}
                `}
                onClick={setScoreClick}
            >
                Chance
            </button>

            <div 
                className=
                    {`
                        OnesScore 
                        SCScore 
                        ${scoreCard[0].set ? "set" : ""}
                    `}
            >
                {scoreCard[0].score}
            </div>
            <div 
                className=
                    {`
                        TwosScore 
                        SCScore 
                        ${scoreCard[1].set ? "set" : ""}
                    `}
            >
                {scoreCard[1].score}
            </div>
            <div 
                className=
                    {`
                        ThreesScore 
                        SCScore 
                        ${scoreCard[2].set ? "set" : ""}
                    `}
            >
                {scoreCard[2].score}
            </div>
            <div 
                className=
                    {`
                        FoursScore 
                        SCScore 
                        ${scoreCard[3].set ? "set" : ""}
                    `}
            >
                {scoreCard[3].score}
            </div>
            <div 
                className=
                    {`
                        FivesScore 
                        SCScore 
                        ${scoreCard[4].set ? "set" : ""}
                    `}
            >
                {scoreCard[4].score}
            </div>
            <div 
                className=
                    {`
                        SixesScore 
                        SCScore 
                        ${scoreCard[5].set ? "set" : ""}
                    `}
            >
                {scoreCard[5].score}
            </div>
            <div 
                className=
                    {`
                        ThreeXScore 
                        SCScore 
                        ${scoreCard[6].set ? "set" : ""}
                    `}
            >
                {scoreCard[6].score} 
            </div>
            <div 
                className=
                    {`
                        FourXScore 
                        SCScore 
                        ${scoreCard[7].set ? "set" : ""}
                    `}
            >
                {scoreCard[7].score}
            </div>
            <div 
                className=
                    {`
                        FullHouseScore 
                        SCScore 
                        ${scoreCard[8].set ? "set" : ""}
                    `}
            >
                {scoreCard[8].score}
            </div>
            <div 
                className=
                    {`
                        SmStraightScore 
                        SCScore 
                        ${scoreCard[9].set ? "set" : ""}
                    `}
            >
                {scoreCard[9].score}
            </div>
            <div 
                className=
                    {`
                        LgStraightScore 
                        SCScore 
                        ${scoreCard[10].set ? "set" : ""}
                    `}
            >
                {scoreCard[10].score}
            </div>
            <div 
                className=
                    {`
                        YahtzeeScore 
                        SCScore 
                        ${scoreCard[11].set ? "set" : ""}
                    `}>
                {scoreCard[11].score}
            </div>
            <div 
                className=
                    {`
                        ChanceScore 
                        SCScore 
                        ${scoreCard[12].set ? "set" : ""}
                    `}
                >
                {scoreCard[12].score}
            </div>

        </div>
    )
}