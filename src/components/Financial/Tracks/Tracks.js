import { useState } from 'react';
import SubTracks from '../SubTracks/SubTracks';

import classes from './Tracks.module.css';

const Tracks = () => {
  const [isATChecked, setIsATChecked] = useState(false);
  const [isDAPSChecked, setIsDAPSChecked] = useState(false);
  const [isBSIChecked, setIsBSIChecked] = useState(false);
  const [isA4AChecked, setIsA4AChecked] = useState(false);
  const [selectedTracks, setSelectedTracks] = useState([]);

  const atTrackHandler = () => {
    if(!isATChecked){
      let object = selectedTracks.find((obj) => obj === "AT");
      if(object === undefined) {
          selectedTracks.push("AT");
      }
    } else {
      let index = selectedTracks.findIndex((obj) => obj === "AT");
      selectedTracks.splice(index, 1);
    }    
    setSelectedTracks(selectedTracks);
    setIsATChecked(!isATChecked);
  };

  const dapsTrackHandler = () => {
    if(!isDAPSChecked){
      let object = selectedTracks.find((obj) => obj === "DAPS");
      if(object === undefined) {
          selectedTracks.push("DAPS");
      }
    } else {
      let index = selectedTracks.findIndex((obj) => obj === "DAPS");
      selectedTracks.splice(index, 1);
    }
    setSelectedTracks(selectedTracks);
    setIsDAPSChecked(!isDAPSChecked);
  };

  const bsiTrackHandler = () => {
    if(!isBSIChecked){
      let object = selectedTracks.find((obj) => obj === "BSI");
      if(object === undefined) {
          selectedTracks.push("BSI");
      }
    } else {
      let index = selectedTracks.findIndex((obj) => obj === "BSI");
      selectedTracks.splice(index, 1);
    }
    setSelectedTracks(selectedTracks);
    setIsBSIChecked(!isBSIChecked);
  };

  const a4aTrackHandler = () => {
    if(!isA4AChecked){
      let object = selectedTracks.find((obj) => obj === "A4A");
      if(object === undefined) {
          selectedTracks.push("A4A");
      }
    } else {
      let index = selectedTracks.findIndex((obj) => obj === "A4A");
      selectedTracks.splice(index, 1);
    }
    setSelectedTracks(selectedTracks);
    setIsA4AChecked(!isA4AChecked);
  };

  return (
    <div className="container-fluid">
      <h1 className={classes.title}>FINANCIALS</h1>
      <div className="row">
        <div className="col-md-3">
          <button 
            className={`btn ${classes.button} ${isATChecked && classes.active}`} 
            onClick={(event) => atTrackHandler(event)}
          >
            AT
          </button> 
        </div>
        <div className="col-md-3">
          <button 
            className={`form-check-label btn ${classes.button} ${isDAPSChecked && classes.active}`} 
            onClick={(event) => dapsTrackHandler(event)}
          >
            DAPS
          </button> 
        </div>
        <div className="col-md-3">
          <button 
            className={`btn ${classes.button} ${isBSIChecked && classes.active}`} 
            onClick={(event) => bsiTrackHandler(event)}
          >
            BSI
          </button> 
        </div>
        <div className="col-md-3">
          <button 
            className={`btn ${classes.button} ${isA4AChecked && classes.active}`} 
            onClick={(event) => a4aTrackHandler(event)}
          >
            A4A
          </button> 
        </div> 
      </div>
      {(isATChecked || isDAPSChecked || isBSIChecked || isA4AChecked) && (
        <div className="row">
          <SubTracks selectedTracks={selectedTracks} />
        </div>
      )}
    </div>
  );
};

export default Tracks;