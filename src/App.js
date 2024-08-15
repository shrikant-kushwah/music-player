import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, TrendingUpIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline';
import { FaPlay, FaPause, FaRandom, FaStepBackward, FaStepForward, } from 'react-icons/fa';
import { BsRepeat } from "react-icons/bs";
import Logo from './Assets/Logo.svg';
import Artist from './Assets/Artist.svg';
import MusicPlayer from './components/MusicPlayer';
import SongList from './components/SongList';
import Pic from './Assets/Pic.svg';
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import MusicApi from './components/MusicApi';


const App = () => {
  const initialSongs = [
    { id: 1, title: 'Chaska', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id: 2, title: 'Song Two', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { id: 3, title: 'Song Three', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  ];

  const [songs, setSongs] = useState(initialSongs);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex w-full h-screen bg-[#0E0E0E]">
      {/* Sidebar */}
      <div className="w-64 bg-[#0E0E0E] text-white flex flex-col p-4">
        <img className="w-[312px] h-[64px] mb-8" src={Logo} alt="MusicApp Logo" />
        <nav className="flex flex-col space-y-4 overflow-hidden">

          <div className="text-[15px] font-semibold p-2 rounded">
            <span>MENU</span>
          </div>
          <div>
            <Link to="#" className="flex items-center space-x-3 p-2 hover:bg-blue-700 rounded">
              <HomeIcon className="w-6 h-6 text-[#F42727]" />
              <span>Home</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 p-2 hover:bg-blue-700 rounded">
              <TrendingUpIcon className="w-6 h-6 text-[#F42727]" />
              <span>Trends</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 p-2 hover:bg-blue-700 rounded">
              <LibraryIcon className="w-6 h-6 text-[#F42727]" />
              <span>Library</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 p-2 hover:bg-blue-700 rounded">
              <SearchIcon className="w-6 h-6 text-[#F42727]" />
              <span>Discover</span>
            </Link>
          </div>
          <div className='py-28'>
            <div className="text-[15px] font-semibold p-2 rounded">
              <span>GENERAL</span>
            </div>
            <Link to="#" className="flex items-center space-x-3 p-2 hover:bg-blue-700 rounded">
              <IoSettings className='w-6 h-6 text-[#F42727]' />
              <span>Setting</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 p-2 hover:bg-blue-700 rounded">
              <MdLogout className='w-6 h-6 text-[#F42727]' />
              <span>Logout</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content - Top Menu*/}
      <div className="flex bg-gradient-to-t from-[#120101] to-[#7f0707]">
        <div className="flex-1 w-[700px] mx-auto p-9">
          <div className="flex items-center absolute justify-between w-[340px] h-[27px] mb-8">
            <div className="flex space-x-8">
              <Link to="#" className="text-[#F6F6F6] text-[18px] font-semibold hover:text-yellow-500">
                Music
              </Link>
              <Link to="#" className="text-[#F6F6F6] cursor-pointer text-[18px] font-semibold hover:text-yellow-500">
                Podcast
              </Link>
              <Link to="#" className="text-[#F6F6F6] text-[18px] font-semibold hover:text-yellow-500">
                Live
              </Link>
              <Link to="#" className="text-[#F6F6F6] text-[18px] font-semibold hover:text-yellow-500">
                Radio
              </Link>
            </div>
            <div className="relative justify-between text-[#f0f0f0] mx-10">
              <input
                type="text"
                className="bg-[#330b0b] w-[345px] h-[40px] text-[#f0f0f0] p-3 text-[15px] rounded-full pl-4 focus:outline-none focus:ring-2 focus:ring-gray-100"
                placeholder="Michael Jackson"
              />
              <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#f0f0f0] cursor-pointer" />
            </div>
          </div>

          <div className='py-6 w-[550px] justify-center items-center ml-14'>
            <img className='w-full h-[380px] -mt-8' src={Artist} alt="artist" />
          </div>
          <div className="p-2 -mt-20 shadow-lg h-auto">
            <div className='text-[#f0f0f0] text-[18px] font-semibold flex justify-between items-center py-4'>
              <h2>Popular</h2>
              <h2>See All</h2>
            </div>
            <SongList
              songs={songs}
              setSongs={setSongs}
              onSelectSong={setSelectedSong}
              selectedSong={selectedSong}
            />
          </div>
          <div className="mt-8">
            {selectedSong && (
              <div className="sticky bottom-0">
                <MusicPlayer selectedSong={selectedSong} songs={songs} />
              </div>
            )}
          </div>
        </div>

        <MusicApi/>
        {/* Right Sidebar with Music Player Card */}
        <div className="w-[300px] bg-[#1f0303] p-6 shadow-lg ml-6 flex flex-col justify-between">
          <div className="flex flex-col absolute w-[244px] h-[330px] items-center bg-[#6B0000] p-4 mt-56 rounded-lg">
            <h2 className='text-[#f0f0f0] text-[14px] -mt-4 py-2'>Now Playing</h2>
            <img
              src={Pic}
              alt="Album-Cover"
              className="w-[239px] h-[136px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl mt-40 absolute text-white font-bold mb-1 truncate">{selectedSong ? selectedSong.title : 'Beat it'}</h3>
            <p className="text-gray-400 text-[12px] mb-4 mt-8">{selectedSong ? 'Artist Name' : 'Michael Jackson'}</p>


            <div className="w-full flex items-center mt-[218px] justify-between text-gray-400 text-sm p-3 absolute mb-2">
              <span>02:15</span>
              <span>03:30</span> {/* Replace with actual song duration */}
            </div>
            <div className="w-full max-w-[140px] absolute mt-60 bg-gray-800 rounded-full h-1">
              <div className="bg-[#f0f0f0] h-full rounded-full w-[50%]">
              </div> {/* Adjust width based on song progress */}
            </div>

            <div className="flex items-center space-x-2 mt-8 mb-4">
              <button
                className=" text-white rounded-full p-3 transition duration-300"
              >
                <BsRepeat className="w-4 h-4" />
              </button>
              <button
                className=" text-white rounded-full p-3 transition duration-300"
              >
                <FaStepBackward className="w-4 h-4" />
              </button>
              <button
                onClick={togglePlayPause}
                className=" text-white rounded-full p-3 transition duration-300"
              >
                {isPlaying ? (
                  <FaPause className="w-8 h-8 bg-black p-2 bg-opacity-50 rounded-lg" />
                ) : (
                  <FaPlay className="w-8 h-8 bg-black p-2 bg-opacity-50 rounded-lg" />
                )}
              </button>
              <button
                className=" text-white rounded-full p-3 transition duration-300"
              >
                <FaStepForward className="w-4 h-4" />
              </button>

              <button
                className=" text-white rounded-full p-3 transition duration-300"
              >
                <FaRandom className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
