// importing Fragment as I want to return several components side by side
import { Fragment } from "react";

// Components
import CountryScoreTable from "./components/CountryScoreTable/CountryScoreTable";
import WorldWideTable from "./components/WorldWideTable/WorldWideTable";

const App = () => (
  <Fragment>
    <WorldWideTable />
    <CountryScoreTable />
  </Fragment>
);

export default App;
