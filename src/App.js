import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Nestle from './components/Nestle/Nestle';
import DemandTracker from './components/DemandTracker/DemandTracker';
import RASReport from './components/RASReport/RASReport';
import FulfillmentTracker from './components/FulfillmentTracker/FulfillmentTracker';
import Tracks from './components/Financial/Tracks/Tracks';
import SubTracks from './components/Financial/SubTracks/SubTracks';
import About from './components/About/About';
import DashboardSummary from './components/DashboardSummary/DashboardSummary';
import ForecastRevenue from './components/ForecastRevenue/ForecastRevenue';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <div className='App__Content'>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard-summary' />} />
          <Route path='/dashboard-summary' element={<DashboardSummary />} />
          <Route path='/nestle' element={<Nestle />} />
          <Route path='/demand-tracker' element={<DemandTracker />} />
          <Route path='/ras-report' element={<RASReport />} />
          <Route path="/fulfillment-tracker" element={<FulfillmentTracker />} />
          <Route path="/financial/ADI" element={<Tracks />} />
          <Route path="/financial/MSE" element={<SubTracks showTitle={true} />} />
          <Route path="/financial/CFS" element={<SubTracks showTitle={true}/>} />
          <Route path="/forecast-revenue" element={<ForecastRevenue />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <div className='App__Footer'>
        &#169; 2022 All rights reserved. Privacy Policy
      </div>
    </div>
  );
}

export default App;
