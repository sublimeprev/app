import React from 'react';
import ButtonDefault from '../../components/buttons/button_default/ButtonDefault';
import './serviceParallax.css';

export default function ServiceParallax(){
    return (
        <section id="servicos" className="service">
            <h1 className="titleImg">
                Receber benefício
            </h1>
            <p className="pImg">
                Tire todas as suas dúvidas agora mesmo.
            </p>
            <ButtonDefault name="Fale com um consultor"/>
        </section>
    )
}