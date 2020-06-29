import React from 'react';
import './ButtonDefault.css';

export default function ButtonDefault({
    name
}){
    return (
                <a className="buttonDefault" href="https://api.whatsapp.com/send?&amp;phone=555195185439&amp;text=Olá!%20Vim%20do%20seu%20Site%20e%20gostaria%20de%20saber%20se%20tenho%20direito,pode%20verificar%20para%20mim?" target="_bla'1nk">
                     {name}
                </a>
    )
}