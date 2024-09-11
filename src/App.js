import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext'; // Import AuthProvider and useAuth for authentication
import './App.css'; // Ensure you have global styles here
import Home from './Components/Home/Home';
import IdeasSubmit from './Components/Header/IdeasSubmit';
import IdeasGallery from './Components/Header/IdeasGallery';
import About from './Components/Header/About';


import Header from './Components/Header/Header'; // Import Header
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>
      <Header /> {/* Render the header only if authenticated */}
      {children}
    </>
  ) : (
    <Navigate to="/login" /> // Redirect to login if not authenticated
  );
};

const App = () => {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider for authentication */}
      <Router>
        <div className="app-container">
          <Routes>
            {/* Default route set to login */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ideas-submit" 
              element={
                <ProtectedRoute>
                  <IdeasSubmit />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ideas-gallery" 
              element={
                <ProtectedRoute>
                  <IdeasGallery />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/about" 
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              } 
            />

            {/* Redirect any unknown route to login */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
