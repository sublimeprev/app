import React from 'react';
import ButtonWhats from '../components/buttons/button_whats/ButtonWhats';
import Header from '../components/header/index';
import Parallax from './parallax/Parallax';
import Home from './home/Home';

export default function Site(){
    return (
        <>
            <ButtonWhats/>
            <Header/>
            <Parallax/>
            <Home/>
        </>
    )
}