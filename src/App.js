import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';
import UpdateCar from './components/UpdateCar';

function App() {
    return (
        <Router>
            <div className='container is-fluid'>
                <Routes>
                    <Route path="/" element={<>
                        <CarForm />
                        <CarSearch />
                        <CarList />
                        <CarValue />
                    </>} />
                    <Route path="/update/:id" element={<UpdateCar />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
