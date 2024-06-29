import React from 'react';
import mylogo from './logo.jpeg'
import './App.css';
import ResponsiveAppBar from './components/navbar';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
        <div>
        <ResponsiveAppBar/>
        </div>
        <div className="footer">
          <Typography>Designed and developed by: Vitaly Gorelik</Typography>
        </div>
        {/* <img src={mylogo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
