import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import View from './View';
import ReviewCreate from './ReviewCreate';
import ReviewEdit from './ReviewEdit';
import ReviewList from './ReviewList';

function App() {
    return (
        <Router>
            <div className="container">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/create">Create Tea</Link>
                    <Link to="/reviews">Reviews</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/create" element={<Create/>} />
                    <Route path="/edit/:id" element={<Edit/>} />
                    <Route path="/view/:id" element={<View/>} />
                    <Route path="/reviews" element={<ReviewList/>} />
                    <Route path="/review/create" element={<ReviewCreate/>} />
                    <Route path="/review/edit/:id" element={<ReviewEdit/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
