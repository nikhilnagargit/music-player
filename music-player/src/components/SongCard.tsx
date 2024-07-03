import { Song } from "../types";

type SongCardProps = {
  song: Song;
  activeSongId: number;
  setActiveSongId: (id: number) => void;
};

const SongCard = ({ song, activeSongId, setActiveSongId }: SongCardProps) => {
  return (
    <div
      onClick={() => {
        setActiveSongId(song.id);
      }}
      className={`flex gap-5 items-center cursor-pointer rounded-lg p-4 ${
        activeSongId === song.id ? "bg-opacity-10 bg-white" : ""
      }`}
    >
      <img
        src={`https://cms.samespace.com/assets/${song.cover}`}
        alt="img"
        className="h-16 w-16 rounded-full"
      ></img>
      <div className="flex-1">
        <h3 className="text-2xl font-light">{song.name}</h3>
        <h4 className="text-lg opacity-50 font-light">{song.artist}</h4>
      </div>
      <div className="text-xl font-light opacity-50">4:34</div>
    </div>
  );
};

export default SongCard;
