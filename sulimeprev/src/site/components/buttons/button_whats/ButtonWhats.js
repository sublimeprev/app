import React from 'react';
import IconWhats from '../../../img/whats.svg';
import './ButtonWhats.css';

export default function ButtonWhats(){
    return (
        <div>
            <a href="https://api.whatsapp.com/send?&amp;phone=555195185439&amp;text=Olá!%20Vim%20do%20seu%20Site%20e%20gostaria%20de%20saber%20se%20tenho%20direito,pode%20verificar%20para%20mim?" target="_bla'1nk">
                <img className="bntWhatsFixo" src={IconWhats} alt="icone whats"/>
            </a>
        </div>
    )
}