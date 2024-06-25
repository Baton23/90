import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Business from './components/Business';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/business" element={<Business />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
