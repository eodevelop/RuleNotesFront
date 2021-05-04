import React from 'react';
import '../styles/css/AddOn.css'

function AddOn(props) {
    return (
        <div className='AddOn'>
            <a className='AddOn-Button' href=""> 카테고리 설정 </a>
            <a className='AddOn-Button' href=""> 글쓰기 </a>
        </div>
    );
}

export default AddOn;