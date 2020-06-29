import React from 'react';
import './HeaderContent.css';
import Logo from '../../../img/logo_transparente.png';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import ListIcon from '@material-ui/icons/List';
import Sublime from '../../../img/sublime.png';
import HeaderContainer from '../headerContainer/HeaderContainer';
import ButtonHeader from '../buttonHeader/ButtonHeader';

export default function HeaderContent(){
    return (
        <>
            <HeaderContainer>
                <div className="logo">
                    <img className="simbolLogo" src={Logo} alt="website logo"/>
                    <img className="sublimeLogo" src={Sublime} alt="website logo"/>  
                </div>
                <div className="nav">
                    <ButtonHeader name="HOME" href="#home"/>
                    <ButtonHeader name="QUEM SOMOS" href="#quemSomos"/>
                    <ButtonHeader name="SERVIÇOS" href="#servicos"/>
                    <ButtonHeader name="CONTATO" href="#contato"/>
                    <ButtonHeader name="ÁREA DA MAMÃE"/>
                    <div className="menuHamburguer">
                        <ListIcon style={{fontSize: "3.0rem"}}/>
                    </div>
                </div>
            </HeaderContainer>
        </>
    )
}