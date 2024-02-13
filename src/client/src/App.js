import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBarComponent from './components/AppBar';
import AppRoutes from './routes';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <AppBarComponent />
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;
