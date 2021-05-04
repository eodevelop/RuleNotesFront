import React from 'react';
import '../styles/css/Sidebar.css'
import AddOn from './AddOn';
import Category from './Category';
import Title from './Title';

function Sidebar(props) {
    return (
        <div className="Sidebar">
            <Title/>
            <Category/>
            <AddOn/>
        </div>
    );
}

export default Sidebar;