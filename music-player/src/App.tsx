import { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import TrackList from "./components/TrackList";
import { Song, Tab } from "./types";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("forYou");
  const [activeSongId, setActiveSongId] = useState<number>(1);

  //function to filter the songs based on selected tab
  const tabFilter = (songs: Song[]) => {
    const result = songs.filter((song) => {
      if (activeTab === "forYou") {
        return true;
      }
      if (activeTab === "topTracks" && song.top_track) {
        return true;
      }
      return false;
    });
    return result;
  };

  //function to filter the songs based on search text input
  const searchFilter = (songs: Song[]) => {
    const result = songs.filter((song) => {
      if (searchText === "") {
        return true;
      }
      return (
        song.name.toLowerCase().includes(searchText.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    return result;
  };

  // to fetch songs on mount
  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(`https://cms.samespace.com/items/songs`);
      const responseJSON = await response.json();
      setSongs(responseJSON.data);
    };
    fetchSongs();
  }, []);

  // business logic and custom variables to manipulate data
  let filteredSongs;

  //apply tab filter
  filteredSongs = tabFilter(songs);
  //apply search filter
  filteredSongs = searchFilter(filteredSongs);

  return (
    <div className=" bg-gradient-to-r from-gray-900 to-black h-screen p-12 flex gap-36 flex-row text-white tracking-wider">
      <Sidebar />
      <TrackList
        searchText={searchText}
        setSearchText={setSearchText}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filteredSongs={filteredSongs}
        activeSongId={activeSongId}
        setActiveSongId={setActiveSongId}
      />
      <Player activeSongId={activeSongId} songs={songs} />
    </div>
  );
}

export default App;
