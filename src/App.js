// importing Fragment as I want to return several components side by side
import { Fragment } from "react";

import CountryScoreTable from "./components/CountryScoreTable/CountryScoreTable";

const App = () => (
  <Fragment>
    <CountryScoreTable />
  </Fragment>
);

export default App;
