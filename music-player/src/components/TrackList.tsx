import Search from "./Search";
import SongCard from "./SongCard";

const TrackList = () => {
  return (
    <div className="w-[35%] max-w-[550px] flex flex-col gap-10">
      <div className="flex font-semibold text-3xl gap-12">
        <h2>For You</h2>
        <h2 className="opacity-50">Top Tracks</h2>
      </div>
      <Search />
      <div className="flex flex-col gap-10">
        {[1, 2, 3, 4, 5, 6].map((song, idx) => {
          return <SongCard key={idx} />;
        })}
      </div>
    </div>
  );
};

export default TrackList;
