import { createContext, useEffect, useRef, useState } from "react";

export const PlayerContext = createContext<any>(null);

const PlayerContextProvider = (props: any) => {
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

  const play = () => {
    audioRef.current?.play();
    setPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  const playWithId = async (id: number) => {
    await setActiveSongId(id);
    await audioRef.current?.play();
    setPlaying(true);
  };

  const seekSong = async (e: any) => {
    if (audioRef.current && seekBgRef.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekBgRef.current.offsetWidth) *
        audioRef.current?.duration;
    }
  };

  useEffect(() => {
    setTimeout(() => {
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
  }, [audioRef]);

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
