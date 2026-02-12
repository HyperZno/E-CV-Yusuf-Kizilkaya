import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skills />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
