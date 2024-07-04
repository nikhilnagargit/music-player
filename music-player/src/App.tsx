import { useContext, useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import TrackList from "./components/TrackList";
import { Song, Tab } from "./types";
import { PlayerContext } from "./context/PlayerContext";
import useFetchSongs from "./hooks/useFetchSongs";
import { searchFilter, tabFilter } from "./utils/helpers";

function App() {
  //getting data from custom hook
  const { songs, isLoading } = useFetchSongs(
    "https://cms.samespace.com/items/songs"
  );

  //managing root level states
  const [searchText, setSearchText] = useState<string>("");
  const [activeTab, setActiveTab] = useState<Tab>("forYou");
  //mobile responsiveness state
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  //audio state
  const { audioRef, activeSongId } = useContext(PlayerContext);

  let filteredSongs;
  //apply tab filter
  filteredSongs = tabFilter(songs, activeTab);
  //apply search filter
  filteredSongs = searchFilter(filteredSongs, searchText);

  //get the index and data of current active song
  const activeSongIdx = songs.findIndex((song: Song) => {
    return song.id === activeSongId;
  });
  const activeSong = songs[activeSongIdx];

  return (
    <div
      className={`h-screen lg:pr-24 lg:py-12 lg:justify-between p-6 flex lg:flex-row flex-col lg:gap-24 gap-6 text-white tracking-wider`}
      style={{
        background: `linear-gradient(to right,${activeSong?.accent},black)`,
      }}
    >
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {isLoading ? (
        <div className="animate-spin text-white self-center">Loading...</div>
      ) : (
        <>
          <TrackList
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            searchText={searchText}
            setSearchText={setSearchText}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            filteredSongs={filteredSongs}
          />
          <Player
            openMenu={openMenu}
            activeSong={activeSong}
            filteredSongs={filteredSongs}
          />
        </>
      )}
      <audio src={activeSong?.url} ref={audioRef} preload="auto"></audio>
    </div>
  );
}

export default App;
