import React from 'react';
import ButtonDefault from '../../components/buttons/button_default/ButtonDefault';
import './Parallax.css';

export default function Parallax(){
    return (
        <section id="home" className="homeImage">
            <h1 className="titleImg">
                Salario Maternidade
            </h1>
            <p className="pImg">
                Saiba como receber o seu agora mesmo
            </p>

            <ButtonDefault name="Fale com um consultor"/>
        </section>
    )
}