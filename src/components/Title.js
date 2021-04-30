import React from 'react';
import '../styles/css/Title.css'

function Title(props) {
    return (
        <div className='Title'>
            <h2 className='Title-Img'> Rule Note </h2>
            <p className='Title-Category'> 트레드링스 </p>
            <p className='Title-Posting-Name'> [DB] 삭제 명명 </p>
        </div>
    );
}

export default Title;