import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix, FaHome, FaStar } from "react-icons/fa";

export default function ScoreCard({ scoreCard }) {
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

            <div className="OnesLabel SCLabel">
                Ones
            </div>
            <div className="TwosLabel SCLabel">
                Twos
            </div>
            <div className="ThreesLabel SCLabel">
                Threes
            </div>
            <div className="FoursLabel SCLabel">
                Fours
            </div>
            <div className="FivesLabel SCLabel">
                Fives
            </div>
            <div className="SixesLabel SCLabel">
                Sixes
            </div>
            <div className="ThreeXLabel SCLabel">
                3 of a Kind 
            </div>
            <div className="FourXLabel SCLabel">
                4 of a kind
            </div>
            <div className="FullHouseLabel SCLabel">
                Full House
            </div>
            <div className="SmStraightLabel SCLabel">
                Sm Straight
            </div>
            <div className="LgStraightLabel SCLabel">
                Lg Straight
            </div>
            <div className="YahtzeeLabel SCLabel">
                Yahtzee
            </div>
            <div className="ChanceLabel SCLabel">
                Chance
            </div>

            <div className="OnesScore SCScore">
                {scoreCard.ones.score}
            </div>
            <div className="TwosScore SCScore">
                {scoreCard.twos.score}
            </div>
            <div className="ThreesScore SCScore">
                {scoreCard.threes.score}
            </div>
            <div className="FoursScore SCScore">
                {scoreCard.fours.score}
            </div>
            <div className="FivesScore SCScore">
                {scoreCard.fives.score}
            </div>
            <div className="SixesScore SCScore">
                {scoreCard.sixes.score}
            </div>
            <div className="ThreeXScore SCScore">
                {scoreCard.threeX.score} 
            </div>
            <div className="FourXScore SCScore">
                {scoreCard.fourX.score}
            </div>
            <div className="FullHouseScore SCScore">
                {scoreCard.fullHouse.score}
            </div>
            <div className="SmStraightScore SCScore">
                {scoreCard.smStraight.score}
            </div>
            <div className="LgStraightScore SCScore">
                {scoreCard.lgStraight.score}
            </div>
            <div className="YahtzeeScore SCScore">
                {scoreCard.yahtzee.score}
            </div>
            <div className="ChanceScore SCScore">
                {scoreCard.chance.score}
            </div>

        </div>
    )
}