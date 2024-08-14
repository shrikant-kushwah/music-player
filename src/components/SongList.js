import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SongList = ({ songs, setSongs, onSelectSong, selectedSong }) => {

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedSongs = Array.from(songs);
    const [removed] = reorderedSongs.splice(result.source.index, 1);
    reorderedSongs.splice(result.destination.index, 0, removed);
    setSongs(reorderedSongs);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="songs">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
            {songs.map((song, index) => (
              <Draggable key={song.id} draggableId={song.id.toString()} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => onSelectSong(song)}
                    className={`p-2 rounded cursor-pointer ${selectedSong?.id === song.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  >
                    {song.title}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default SongList;
