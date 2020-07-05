import React from 'react';
import './servico.css';

export default function Servico(){
    return (
        <section className="servico">
            <div className="contentServico">
                <h1>
                    Estou desempregada tenho direito a receber?
                </h1>
                <p>
                    Sim, a segurada desempregada ou para aquela que cessou as contribuições terá direito ao salário-maternidade, desde que o nascimento ou adoção tenham ocorrido dentro do período de manutenção da qualidade de segurada.
                </p>

                <h1>
                    Adotei uma criança, tenho direito ao salário maternidade?
                </h1>
                <p>
                    Sim, você poderá encaminhar o salário maternidade.
                </p>

                <h1>
                    Quanto tempo dura o salário maternidade?
                </h1>
                <p>
                    120 dias - Parto, adoção, feto natimorto (quando o bebê nasce no momento do parto ou dentro do útero da mãe).
                   
                </p>
                <p>
                    14 dias -  Aborto não criminoso.
                </p>

            </div>
            <div className="contentServico">
                <h1>
                    Meu filho já tem dois anos, posso encaminhar o salário maternidade?
                </h1>
                <p>
                Sim, é possível realizar a cobrança de créditos do INSS dos últimos 5 anos, ou seja, é possível cobrar salário-maternidade de filhos que não tenham ainda completado os cinco anos de idade, se na época do nascimento você estava na condição de segurada do INSS, você tem direito ao salário maternidade.
                </p>

                <h1>
                   Sou contribuinte individual, tenho direito ao salário maternidade?
                </h1>
                <p>
                    Sim, desde que você tenha carência de 10 meses, ou seja, é necessário ter contribuído por 10 meses antes do nascimento do filho ou adoção.
                </p>
            </div>
        </section>
    )
}