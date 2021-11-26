// Styles
import { Wrapper } from "./CountryScoreTable.styles";

// components
import allCountryScores from "../../../src/scores";

const CountryScoreTable = () => {
  return (
    <Wrapper>
      {allCountryScores.map((country) => {
        return (
          <div>
            <h2>{country.name}</h2>
            <table>
              {country.scores.map((score) => {
                return (
                  <tr>
                    <th>{score.n}</th>
                    <th>{score.s}</th>
                  </tr>
                );
              })}
            </table>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default CountryScoreTable;
