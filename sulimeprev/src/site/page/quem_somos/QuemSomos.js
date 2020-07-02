import React from 'react';
import ButtonDefault from '../../components/buttons/button_default/ButtonDefault';
import './QuemSomos.css';

export default function QuemSomos(){
    return (
        <section id="quemSomos" className="contentQuemSomos">
            <h1 className="titleQuemSomos">Estamos aqui para ajudar você</h1>
            <p className="pQuemSomos">
                Uma empresa especializada no salário maternidade.
            </p>
            <ButtonDefault name="Fale com um consultor"/>
        </section>
    )
}