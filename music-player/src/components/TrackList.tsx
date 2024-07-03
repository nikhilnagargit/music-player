import { Song, Tab } from "../types";
import Search from "./Search";
import SongCard from "./SongCard";

interface TrackListProps {
  setActiveTab: (tab: Tab) => void;
  activeTab: Tab;
  filteredSongs: Song[];
  searchText: string;
  setSearchText: (text: string) => void;
  openMenu: boolean;
  setOpenMenu: (item: boolean) => void;
}

const TrackList = ({
  setActiveTab,
  activeTab,
  filteredSongs,
  searchText,
  setSearchText,
  openMenu,
}: TrackListProps) => {
  return (
    <div
      className={`${
        openMenu ? "flex" : "hidden"
      } relative lg:w-[33%] w-full max-w-[450px] lg:flex flex-col lg:gap-8 gap-6 scroll-smooth`}
    >
      <div className="flex  gap-8 font-semibold lg:text-3xl text-xl">
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
      <div className="flex flex-col overflow-scroll">
        {filteredSongs.map((song) => {
          return <SongCard key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
};

export default TrackList;
