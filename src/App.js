import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';  // Ensure this import statement is correct

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Table from './Contacts/Table';
import { ThemeProvider } from 'react-bootstrap';
import { ColorModeContext, useMode } from './theme';
// import { Table } from 'react-bootstrap';
// import Contacts from './Contacts';
// import Chart from './components/Chart';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <Router>
      <div id="wrapper">
        <Sidebar/>
        
        {/* <Chart/> */}
        {/* <Contacts/> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* Add other routes as needed */}
              </Routes>
            </div>
          </div>
          <Table/>
          <Footer />
        </div>
      </div>
    </Router>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


