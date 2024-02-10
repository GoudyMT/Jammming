import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

function TrackList() {
  // This will later take tracks as a prop and map over them
  return (
    <div className="TrackList">
      <Track />
      <Track />
      {/* More <Track /> components will go here */}
    </div>
  );
}

export default TrackList;