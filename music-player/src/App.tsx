import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import TrackList from "./components/TrackList";

function App() {
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-black h-screen p-12 flex gap-36 flex-row text-white tracking-wider">
      <Sidebar />
      <TrackList />
      <Player />
    </div>
  );
}

export default App;
