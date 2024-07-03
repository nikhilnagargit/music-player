const Search = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: (text: string) => void;
}) => {
  return (
    <div className="relative">
      <input
        name="search"
        type="text"
        className="block w-full p-4 text-md rounded-lg bg-white/10 placeholder:text-white/50 outline-none placeholder:text-xl placeholder:font-light"
        placeholder="Search Song, Artist"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <div className="absolute cursor-pointer top-2 end-4 flex items-center">
        <svg
          width="38"
          height="38"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <path
              d="M25.6668 25.6666L20.6668 20.6666L25.6668 25.6666ZM6.33343 14.6666C6.33343 10.0643 10.0644 6.33331 14.6668 6.33331C19.2692 6.33331 23.0001 10.0643 23.0001 14.6666C23.0001 19.269 19.2692 23 14.6668 23C10.0644 23 6.33343 19.269 6.33343 14.6666Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Search;
