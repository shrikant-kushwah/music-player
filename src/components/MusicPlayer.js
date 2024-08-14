import React, { useEffect, useState } from 'react';
import { Howl, Howler } from 'howler';
import { PlayIcon, PauseIcon, RewindIcon, FastForwardIcon } from '@heroicons/react/outline';

const MusicPlayer = ({ selectedSong, songs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);


  

  useEffect(() => {
    if (selectedSong) {
      const newSound = new Howl({
        src: [selectedSong.url],
        onend: () => setIsPlaying(false),
      });
      setSound(newSound);
    }
  }, [selectedSong]);

  const handlePlayPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex(song => song.id === selectedSong.id);
    if (currentIndex > 0) {
      Howler.stop();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex(song => song.id === selectedSong.id);
    if (currentIndex < songs.length - 1) {
      Howler.stop();
      setIsPlaying(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="flex items-center space-x-4">
        <RewindIcon className="w-6 h-6 cursor-pointer" onClick={handlePrevious} />
        <div onClick={handlePlayPause} className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full cursor-pointer">
          {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
        </div>
        <FastForwardIcon className="w-6 h-6 cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
};

export default MusicPlayer;
