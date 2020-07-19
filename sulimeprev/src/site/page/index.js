import React, {useEffect} from 'react';
import ButtonWhats from '../components/buttons/button_whats/ButtonWhats';
import Header from '../components/header/index';
import Parallax from './parallax/Parallax';
import Home from './home/Home';
import QuemSomos from  './quem_somos/QuemSomos';
import History from './history/History';
import MissaoVisaoValores from './missao_valores_visao/MissaoVisaoValores';
import DepositionCarousel from './deposition/Deposition';
import ServiceParallax from './servicos_parallax/serviceParallax';
import Servico from './servico/servico';
import Contact from './contact/Contact';
import Footer from '../components/footer/footer';
import axios from 'axios';

export default function Site(){
    
    const upServidor = () => {
        axios.get(`https://sublime-prev.herokuapp.com/api/process-mothers/mother-client/${12}/${211}`,{
            }).then(res => {
            }).catch(error => {
            });
    }

    useEffect(()=>{
        upServidor()
    },[])
    return (
        <>
            <ButtonWhats/>
            <Header/>
            <Parallax/>
            <Home/>
            <QuemSomos/>
            <History/>
            <MissaoVisaoValores/>
            <DepositionCarousel/>
            <ServiceParallax/>
            <Servico/>
            <Contact/>
            <Footer/>
        </>
    )
}