import { useState } from 'react';
import SubTracks from '../SubTracks/SubTracks';

import classes from './Tracks.module.css';

const Tracks = () => {
  const [isATChecked, setIsATChecked] = useState(false);
  const [isDPSChecked, setIsDPSChecked] = useState(false);
  const [isBSIChecked, setIsBSIChecked] = useState(false);
  const [isA4AChecked, setIsA4AChecked] = useState(false);

  const atTrackHandler = () => {
    setIsATChecked(!isATChecked);
  };

  const dpsTrackHandler = () => {
    setIsDPSChecked(!isDPSChecked);
  };

  const bsiTrackHandler = () => {
    setIsBSIChecked(!isBSIChecked);
  };

  const a4aTrackHandler = () => {
    setIsA4AChecked(!isA4AChecked);
  };

  return (
    <div className="container-fluid">
      <h1 className={classes.title}>Financials</h1>
      <div className="row">
        <div className="col-md-3">
          <button className={`btn ${classes.button} ${isATChecked && classes.active}`} onClick={(event) => atTrackHandler(event)}>AT</button> 
        </div>
        <div className="col-md-3">
          <button className={`form-check-label btn ${classes.button} ${isDPSChecked && classes.active}`} onClick={(event) => dpsTrackHandler(event)}>DPS</button> 
        </div>
        <div className="col-md-3">
          <button className={`btn ${classes.button} ${isBSIChecked && classes.active}`} onClick={(event) => bsiTrackHandler(event)}>BSI</button> 
        </div>
        <div className="col-md-3">
          <button className={`btn ${classes.button} ${isA4AChecked && classes.active}`} onClick={(event) => a4aTrackHandler(event)}>A4A</button> 
        </div> 
      </div>
      {(isATChecked || isDPSChecked || isBSIChecked || isA4AChecked) && (
        <div className="row">
          <SubTracks />
        </div>
      )}
    </div>
  );
};

export default Tracks;