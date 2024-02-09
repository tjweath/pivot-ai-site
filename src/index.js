import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App/App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(  
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);



