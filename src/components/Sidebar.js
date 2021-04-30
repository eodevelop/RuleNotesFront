import React from 'react';
import '../styles/css/Sidebar.css'
import Category from './Category';
import Title from './Title';

function Sidebar(props) {
    return (
        <div className="Sidebar">
            <Title/>
            <Category/>
        </div>
    );
}

export default Sidebar;