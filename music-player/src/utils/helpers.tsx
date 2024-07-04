import { Song, Tab } from "../types";

//function to filter the songs based on selected tab
export const tabFilter = (songs: Song[], activeTab: Tab) => {
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
export const searchFilter = (songs: Song[], searchText: string) => {
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
