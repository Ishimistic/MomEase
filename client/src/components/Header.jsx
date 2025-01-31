import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header-container">
            <h1 className="header-title">Workshops</h1>
            <div 
                className="profile-circle" 
                onClick={() => navigate('/workshop')}
            ></div>
        </div>
    );
};

export default Header;