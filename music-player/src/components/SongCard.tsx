const SongCard = () => {
  return (
    <div className="flex gap-5 items-center ">
      <div className="h-16 w-16 rounded-full bg-pink-600"></div>
      <div className="flex-1">
        <h3 className="text-2xl font-light">Starboy</h3>
        <h4 className="text-lg opacity-50 font-light">The Weeknd</h4>
      </div>
      <div className="text-2xl font-light opacity-50">4:16</div>
    </div>
  );
};

export default SongCard;
