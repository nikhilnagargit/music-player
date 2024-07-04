import { useState, useEffect } from "react";
import { Song } from "../types";

//custom hook for data fetching
const useFetchSongs = (url: string) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null | Error>(null);

  // to fetch songs on mount `https://cms.samespace.com/items/songs`
  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setSongs(responseJSON.data);
    };
    fetchSongs();
  }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setSongs(jsonData.data);
        setError(null);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  //only exposing the required state properties
  return { songs, isLoading, error };
};

export default useFetchSongs;
