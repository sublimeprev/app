import React from 'react';
import BannerHome from '../../img/banner_home.png';
import './Home.css';

export default function Home(){
    return (
        
        <section className="home">
            <div className="contentHome">
                <h1>
                    Salario Maternidade
                </h1>
                <p>
                    Para muitas pessoas, ter ou adotar um filho é uma nova etapa da vida… toda a criação, ensinamentos, educação e felicidade que você dá a criança, não há dinheiro que pague.
                </p>
                <p>
                    Mas você sabia que você tem direito a um auxílio previdenciário chamado Salário Maternidade? É isso mesmo!
                </p>
                <p>
                    Se você pensa em ter ou adotar um filho, saiba que você terá direito a um valor mensal para cobrir as eventuais despesas que você terá com a criança, ainda mais que você não vai poder trabalhar neste período.
                </p>
                <p>
                    Nas hipóteses mais tristes, como aborto não criminoso ou em casos de fetos natimortos (que morreram na hora do nascimento ou no útero da mãe), você também tem direito ao benefício.
                </p>
            </div>
            <img className="bannerHome" src={BannerHome} alt="Banner Home"/>
        </section>
        
    )
}