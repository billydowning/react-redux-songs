import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Jump', duration: '3:25' },
    { title: 'Wild Wild Life', duration: '3:35' },
    { title: 'Jump Around', duration: '3:45' },
    { title: 'Panama', duration: '3:55' },

  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
