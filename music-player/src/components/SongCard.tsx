import { useContext, useRef } from "react";
import { Song } from "../types";
import { PlayerContext } from "../context/PlayerContext";

type SongCardProps = {
  song: Song;
};

const SongCard = ({ song }: SongCardProps) => {
  const {
    activeSongId,
    setActiveSongId,
    setPlaying,
    play,
    pause,
    playWithId,
    time,
  } = useContext(PlayerContext);

  const localSongRef = useRef<HTMLAudioElement>(null);

  return (
    <div
      onClick={() => {
        playWithId(song.id);
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
      <div className="text-xl font-light opacity-50">
        {Math.floor(localSongRef.current?.duration / 60)}:
        {Math.floor(localSongRef.current?.duration % 60)}
      </div>
      <audio src={song.url} ref={localSongRef}></audio>
    </div>
  );
};

export default SongCard;
