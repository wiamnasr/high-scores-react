// Styles
import { Wrapper } from "./CountryScoreTable.styles";

// hooks
import { useState } from "react";

// data
import allCountryScores from "../../scores";

// components
import PlayerScore from "../PlayerScore/PlayerScore";

const CountryScoreTable = () => {
  // false for the initial descending state of the scores, true for ascending
  const [scoresOrder, setScoresOrder] = useState(false);
  console.log(scoresOrder);

  // making sure my scoresOrder is updated with every button click to the opposite of what it was
  const scoresOrderHandler = () => {
    setScoresOrder(() => !scoresOrder);
  };

  return (
    <Wrapper>
      {/* adding a button on the top of the page that toggles the order of every high scores table between asc and desc */}
      <button onClick={scoresOrderHandler}>Toggle Scores Order</button>
      {allCountryScores
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((country) => {
          return (
            <div className='scoresTable'>
              <h2 className='countryName'>{country.name}</h2>
              <table>
                <tbody>
                  {country.scores
                    .sort((a, b) =>
                      scoresOrder
                        ? parseFloat(a.s) - parseFloat(b.s)
                        : parseFloat(b.s) - parseFloat(a.s)
                    )
                    .map((score) => {
                      return (
                        <PlayerScore
                          playerName={score.n}
                          playerScore={score.s}
                        />
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
