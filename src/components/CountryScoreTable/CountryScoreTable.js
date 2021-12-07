// Styles
import { Wrapper } from "./CountryScoreTable.styles";

// components
import allCountryScores from "../../../src/scores";
import PlayerScore from "../PlayerScore/PlayerScore";

const CountryScoreTable = () => {
  return (
    <Wrapper>
      {allCountryScores
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((country) => {
          return (
            <div className="scoresTable">
              <h2 className="countryName">{country.name}</h2>
              <table>
                <tbody>
                  {country.scores.map((score) => {
                    return (
                      <PlayerScore playerName={score.n} playerScore={score.s} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default CountryScoreTable;
