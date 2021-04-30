import React from 'react';
import '../styles/css/Category.css'

function Category(props) {
    return (
        <div className="Category">
            <div className="List">
                <p className="List-Name"> 트레드링스</p>
                <hr/>
            </div>
            <div className="List">
                <p className="List-Name"> Rule Note </p>
                <hr/>
            </div>
            <div className="List">
                <p className="List-Name"> 청첩장 프로젝트</p>
                <hr/>
            </div>
        </div>
    );
}

export default Category;