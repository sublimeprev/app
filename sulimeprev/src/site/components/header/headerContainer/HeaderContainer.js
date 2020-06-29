import React from 'react';
import './HeaderContainer.css';

export default function HeaderContainer(props){
    return (
        <div className="headerContainer">
            {props.children}
        </div>
    );
}