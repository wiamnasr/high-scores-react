// Style:
// import classes from "./WorldWideTable.module.css";

// Components
import PlayerScore from "../PlayerScore/PlayerScore";

// data
import allCountryScores from "../../scores";

const WorldWideTable = () => {
  const allScores = [];
  // extracting the scores from the countries
  allCountryScores.map((country) =>
    country.scores.forEach((score) => allScores.push(score))
  );

  console.log(allScores);
  console.log(allCountryScores);
  return (
    <table>
      <tbody>
        {allScores
          .sort((a, b) => parseFloat(b.s) - parseFloat(a.s))
          .map((score) => {
            return <PlayerScore playerName={score.n} playerScore={score.s} />;
          })}
      </tbody>
    </table>
  );
};

export default WorldWideTable;
