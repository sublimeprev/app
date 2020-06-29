import React from 'react';
import './ButtonHeader.css';

export default function ButtonHeader({
    name,
    href
}){
    return (
        <a className="buttonHeader" href={href}>
            {name}
        </a>
    )
}