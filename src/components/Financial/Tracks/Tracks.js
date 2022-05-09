import { useState } from 'react';
import SubTracks from '../SubTracks/SubTracks';

import classes from './Tracks.module.css';

const Tracks = ({ tracks }) => {
  const [subTrackShow, setSubTrackShow] = useState(false);

  const trackHandler = (event, track) => {
    event.preventDefault();
    //console.log("Track - ", track);
    setSubTrackShow(true);
  };

  return (
      <div className="container">
        <h1 className={classes.title}>Financials</h1>
        <div className="row">
          {tracks.map((track, index) => (
            <div key={index} className="col-md-3">
              <button className={`btn ${classes.button}`} onClick={(event) => trackHandler(event, track)}>{track}</button>
            </div>
          ))}
        </div>
        {subTrackShow && (
          <div className="row">
            <SubTracks />
          </div>
        )}
      </div>
  );
};

export default Tracks;