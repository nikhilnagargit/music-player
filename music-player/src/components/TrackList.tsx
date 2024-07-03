import { Song, Tab } from "../types";
import Search from "./Search";
import SongCard from "./SongCard";

interface TrackListProps {
  setActiveTab: (tab: Tab) => void;
  activeTab: Tab;
  filteredSongs: Song[];
  searchText: string;
  setSearchText: (text: string) => void;
}

const TrackList = ({
  setActiveTab,
  activeTab,
  filteredSongs,
  searchText,
  setSearchText,
}: TrackListProps) => {
  return (
    <div className="w-[35%] max-w-[500px] flex flex-col gap-10">
      <div className="flex  gap-10 font-semibold text-3xl">
        <h2
          onClick={() => {
            setActiveTab("forYou");
          }}
          className={
            activeTab == "forYou"
              ? "cursor-pointer"
              : "opacity-50 cursor-pointer  hover:font-bold"
          }
        >
          For You
        </h2>
        <h2
          onClick={() => {
            setActiveTab("topTracks");
          }}
          className={
            activeTab == "topTracks"
              ? "cursor-pointer"
              : "opacity-50 cursor-pointer hover:font-bold"
          }
        >
          Top Tracks
        </h2>
      </div>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <div className="flex flex-col gap-10 overflow-scroll pr-4">
        {filteredSongs.map((song, idx) => {
          return <SongCard key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
};

export default TrackList;
