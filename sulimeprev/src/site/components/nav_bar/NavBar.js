import React from 'react';
import ButtonHeader from '../header/buttonHeader/ButtonHeader';
import './NavBar.css';

export default function NavBar(){
    return(
        <nav className="nav">
            <ButtonHeader name="HOME" href="#home"/>
            <ButtonHeader name="QUEM SOMOS" href="#quemSomos"/>
            <ButtonHeader name="SERVIÇOS" href="#servicos"/>
            <ButtonHeader name="CONTATO" href="#contato"/>
            <ButtonHeader name="ÁREA DA MAMÃE"/>
        </nav>
    ) 
}