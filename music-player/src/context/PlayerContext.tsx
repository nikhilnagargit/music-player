import { createContext, useEffect, useRef, useState } from "react";

export const PlayerContext = createContext<any>(null);

const PlayerContextProvider = (props: any) => {
  //setting up required states for the player component
  const audioRef = useRef<HTMLAudioElement>(null);
  const seekBgRef = useRef<HTMLDivElement>(null);
  const seekBarRef = useRef<HTMLDivElement>(null);
  const [activeSongId, setActiveSongId] = useState<number>(1);
  const [playing, setPlaying] = useState<boolean>(false);
  const [time, setTime] = useState<any>({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // play the current audio
  const play = () => {
    audioRef.current?.play();
    setPlaying(true);
  };

  //pasue the current audio
  const pause = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  //play audio with specific id of song
  const playWithId = async (id: number) => {
    await setActiveSongId(id);
    await audioRef.current?.play();
    setPlaying(true);
  };

  // change the song current time based on seek bar clicks
  const seekSong = async (e: any) => {
    if (audioRef.current && seekBgRef.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekBgRef.current.offsetWidth) *
        audioRef.current?.duration;
    }
  };

  // update song's current time every one second
  useEffect(() => {
    const timeoutid = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = () => {
          if (seekBarRef.current && audioRef.current) {
            seekBarRef.current.style.width =
              Math.floor(
                (audioRef.current.currentTime / audioRef.current.duration) * 100
              ) + "%";

            setTime({
              currentTime: {
                second: Math.floor(audioRef.current.currentTime % 60),
                minute: Math.floor(audioRef.current.currentTime / 60),
              },
              totalTime: {
                second: Math.floor(audioRef.current.duration % 60),
                minute: Math.floor(audioRef.current.duration / 60),
              },
            });
          }
        };
      }
    }, 1000);

    //clearing out the timer for cleanup
    return () => {
      clearTimeout(timeoutid);
    };
  }, [audioRef]);

  //assembling all the context state and functions
  const contextValue = {
    audioRef,
    seekBgRef,
    seekBarRef,
    playing,
    setPlaying,
    time,
    setTime,
    play,
    pause,
    activeSongId,
    setActiveSongId,
    playWithId,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
