import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Tracks from './components/Financial/Tracks/Tracks';
import SubTracks from './components/Financial/SubTracks/SubTracks';
import AboutUs from './components/AboutUs/AboutUs';
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
          <Route path="/financial/ADI" element={<Tracks />} />
          <Route path="/financial/MSE" element={<SubTracks showTitle={true} />} />
          <Route path="/financial/CFS" element={<SubTracks showTitle={true}/>} />
          <Route path="/forecast-revenue" element={<ForecastRevenue />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </div>
      <div className='App__Footer'>
        &#169; 2022 All rights reserved. Privacy Policy
      </div>
    </div>
  );
}

export default App;
