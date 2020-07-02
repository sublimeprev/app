import React from  'react';
import BannerHistory from '../../img/history_img.png';
import './History.css';

export default function History(){
    return(
        <section className="history">
            <img className="bannerHistory" src={BannerHistory} alt="img history"/>
            <div className="pHistory">
                <p>
                    Somos uma empresa especializada em salário maternidade, que conta com uma equipe de consultores altamente treinados e capacitados para poder estar prestando o melhor atendimento do Brasil.
                </p>
                <p>
                    Com uma grande aliada ao nosso favor à tecnologia, hoje podemos atender em todos os cantos desse nosso Brasil.
                </p>
                <p>
                    Possuimos uma vasta experiência com a busca pelo beneficio, fazendo muitas mamães felizes ao poder receber o salário maternidade. 
                </p>
            </div>
            
        </section>
    )
}