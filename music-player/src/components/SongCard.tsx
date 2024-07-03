import { Song } from "../types";

type SongCardProps = {
  song: Song;
};

const SongCard = ({ song }: SongCardProps) => {
  return (
    <div className="flex gap-5 items-center cursor-pointer">
      <img
        src={`https://cms.samespace.com/assets/${song.cover}`}
        alt="img"
        className="h-16 w-16 rounded-full"
      ></img>
      <div className="flex-1">
        <h3 className="text-2xl font-light">{song.name}</h3>
        <h4 className="text-lg opacity-50 font-light">{song.artist}</h4>
      </div>
      <div className="text-2xl font-light opacity-50">4:34</div>
    </div>
  );
};

export default SongCard;
