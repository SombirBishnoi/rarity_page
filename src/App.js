import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Headder from "./components/Headder";
import Lodder from "./components/Lodder";
import Rarity from "./components/Rarity";
import Backtop from "./components/Backtop";
import Tokemonics from "./components/Tokemonics";
import Futter from "./components/Futter";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
function App() {
  return (
    <>
      <Lodder />
      <Backtop />
      <Headder />
      <Tokemonics />
      <Rarity />
      <Roadmap />
      <FAQ />
      <Futter />
    </>
  );
}

export default App;
