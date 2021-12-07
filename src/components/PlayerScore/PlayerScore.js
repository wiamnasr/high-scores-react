// Style
import classes from "./PlayerScore.module.css";

const PlayerScore = ({ playerName, playerScore }) => {
  return (
    <tr className={classes.row} key={Math.random().toString()}>
      <th>{playerName}</th>
      <th>{playerScore}</th>
    </tr>
  );
};

export default PlayerScore;
