import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RoomList from './pages/RoomList';
import RoomDetail from './pages/RoomDetail';
import Admin from './pages/Admin';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/rooms/:slug" element={<RoomDetail />} />
          
          {/* Placeholders for other routes mentioned in nav */}
          <Route path="/amenities" element={<Navigate to="/rooms" />} /> 
          <Route path="/location" element={<Navigate to="/" />} />
          <Route path="/gallery" element={<Navigate to="/rooms" />} />

          {/* Admin Route - In real app, protect this with AuthGuard */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
