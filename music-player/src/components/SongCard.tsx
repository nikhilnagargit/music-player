import { useContext, useRef } from "react";
import { Song } from "../types";
import { PlayerContext } from "../context/PlayerContext";

type SongCardProps = {
  song: Song;
};

const SongCard = ({ song }: SongCardProps) => {
  const { activeSongId, playWithId } = useContext(PlayerContext);

  const localSongRef = useRef<HTMLAudioElement>(null);

  return (
    <div
      onClick={() => {
        playWithId(song.id);
      }}
      className={`flex transition-all duration-300 lg:gap-5 gap-3 items-center cursor-pointer rounded-lg lg:p-4 p-2 ${
        activeSongId === song.id ? "bg-opacity-10 bg-white" : ""
      }`}
    >
      <img
        src={`https://cms.samespace.com/assets/${song.cover}`}
        alt="img"
        className="lg:h-16 lg:w-16 h-12 w-12 rounded-full"
      ></img>
      <div className="flex-1">
        <h3 className="lg:text-2xl text-lg font-light">{song.name}</h3>
        <h4 className="lg:text-lg text-md opacity-50 font-light">
          {song.artist}
        </h4>
      </div>
      {localSongRef.current && (
        <div className="lg:text-xl text-lg font-light opacity-50">
          {Math.floor(localSongRef.current?.duration / 60)}:
          {Math.floor(localSongRef.current?.duration % 60)}
        </div>
      )}
      <audio src={song.url} ref={localSongRef}></audio>
    </div>
  );
};

export default SongCard;
