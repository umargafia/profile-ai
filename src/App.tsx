import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Profile/Dashboard';

// Headshot Flow
import HeadshotUpload from './pages/Headshot/HeadshotUpload';
import HeadshotStyle from './pages/Headshot/HeadshotStyle';
import HeadshotCustomize from './pages/Headshot/HeadshotCustomize';
import HeadshotPreview from './pages/Headshot/HeadshotPreview';

// Resume Flow
import ResumeTemplates from './pages/Resume/ResumeTemplates';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Headshot Generator Flow */}
              <Route path="/headshot" element={<HeadshotUpload />} />
              <Route path="/headshot/style" element={<HeadshotStyle />} />
              {/* TODO: Re-enable customize step when needed */}
              {/* <Route path="/headshot/customize" element={<HeadshotCustomize />} /> */}
              <Route path="/headshot/preview" element={<HeadshotPreview />} />
              
              {/* Resume Builder Flow */}
              <Route path="/resume" element={<ResumeTemplates />} />
              
              {/* Protected Routes */}
              <Route path="/profile" element={<Dashboard />} />
              
              {/* Placeholder Routes */}
              <Route path="/features" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-900 dark:text-white">Features Page Coming Soon</h1></div>} />
              <Route path="/pricing" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pricing Page Coming Soon</h1></div>} />
              
              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;