import React from 'react';
import ButtonWhats from '../components/buttons/button_whats/ButtonWhats';
import Header from '../components/header/index';
import Parallax from './parallax/Parallax';
import Home from './home/Home';
import QuemSomos from  './quem_somos/QuemSomos';
import History from './history/History';
import MissaoVisaoValores from './missao_valores_visao/MissaoVisaoValores';

export default function Site(){
    return (
        <>
            <ButtonWhats/>
            <Header/>
            <Parallax/>
            <Home/>
            <QuemSomos/>
            <History/>
            <MissaoVisaoValores/>
        </>
    )
}