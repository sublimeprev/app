import React from 'react';
import Missao from '../../img/teamwork-makes-the-dream-work.jpg';
import Visao from '../../img/visao.jpg';
import Valores from '../../img/valores.jpg';
import './MissaoVisaoValores.css';

export default function MissaoVisaoValores(){
    return (
        <section className="missaoVisaoValores">
            <div className="missao" >
                <img className="imgMissaoVisaoValore" src={Missao} alt="img missão"/>
                <h1>MISSÃO</h1>
                <p>
                    Atuar a favor de mamães que buscam o seu direito ao salário maternidade.
                </p>
            </div>
            <div className="visao" >
                <img className="imgMissaoVisaoValore" src={Visao} alt="img visao"/>
                <h1>VISÃO</h1>
                <p>
                     Ser referência nacional entre as mamães para a busca e garantia do salário maternidade.  
                </p>
            </div>
            <div className="valores" >
                <img className="imgMissaoVisaoValore" src={Valores} alt="img valores"/>
                <h1>VALORES</h1>
                <p>Serenidade</p>
                <p>Responsabildade</p>
                <p>Respeito</p>
                <p>Carinho</p>
            </div>
        </section>
    )
}