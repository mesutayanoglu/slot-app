import "./App.css";
import PlayButton from "./PlayButton";
import Slots from "./Slots";
function App() {
  return (
    <>
      <h1 style={{ color: "white", fontSize: 40 }}>
        MST Bet Slot Machine v1.0
      </h1>
      <Slots />
      <PlayButton />
    </>
  );
}

export default App;
