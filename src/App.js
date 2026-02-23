import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { HeroSection } from './components/HeroSection';
import { TopControls } from './components/TopControls';
import { PrototypeGrid } from './components/PrototypeGrid';
import { PROTOTYPES } from './data/prototypes';
import GuruDashboardApp from './projects/guru-dashboard/index.jsx';
import './App.css';

function HomePage() {
  const [search, setSearch] = useState('');
  const filtered = PROTOTYPES.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <HeroSection />
      <Container maxWidth="lg" sx={{ pt: 2, pb: 8 }}>
        <TopControls search={search} onSearch={setSearch} />
        <PrototypeGrid prototypes={filtered} />
      </Container>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guru-dashboard/*" element={<GuruDashboardApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

