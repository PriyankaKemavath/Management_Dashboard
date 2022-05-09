import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Overview from './components/Overview/Overview';
import DemandTracker from './components/DemandTracker/DemandTracker';
import RASReport from './components/RASReport/RASReport';
import FulfillmentTracker from './components/FulfillmentTracker/FulfillmentTracker';
import Tracks from './components/Financial/Tracks/Tracks';
import SubTracks from './components/Financial/SubTracks/SubTracks';

function App() {
  const tracks = ['AT', 'DPS', 'BSI', 'A4A'];

  return (
    <div className="App">
      <NavigationBar />
      <div className='App__Content'>
        <Routes>
          <Route path='/' element={<Navigate to='/overview' />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/demand-tracker' element={<DemandTracker />} />
          <Route path='/ras-report' element={<RASReport />} />
          <Route path="/fulfillment-tracker" element={<FulfillmentTracker />} />
          <Route path="/financial/ADI" element={<Tracks tracks={tracks} />} />
          <Route path="/financial/MSE" element={<SubTracks showTitle={true} />} />
          <Route path="/financial/CFS" element={<SubTracks showTitle={true}/>} />
        </Routes>
      </div>
      <div className='App__Footer'>
        &#169; 2022 All rights reserved. Privacy Policy
      </div>
    </div>
  );
}

export default App;
