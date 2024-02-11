import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <div className="title">
          <h2>Playlist</h2>
        </div>
        <div className="input">
          <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        </div>
        <div className="track-list-population">
          <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        </div>
        <div className="Playlist-save">
          <button onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div>
      </div>
    );
  }
}

export default Playlist;