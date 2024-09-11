// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './AuthContext';
import { IdeasProvider } from './contexts/IdeasContext';

ReactDOM.render(
  <AuthProvider>
    <IdeasProvider>
      <App />
    </IdeasProvider>
  </AuthProvider>,
  document.getElementById('root')
);
