var  playlist = {
  artist:"song"
};


function updatePlaylist(playlist, artistName, songTitle){
  delete playlist.artistName;
  return playlist;
}

function removeFromPlaylist(playlist, artistName)
{ delete playlist[artistName] return playlist; }
