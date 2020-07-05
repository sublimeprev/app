import React from 'react';
import './Deposition.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DepositionCarousel(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    const carousel = () => {
        return (
            <Slider {...settings}>
          <div>
            <p>Andreia Frois Granja</p>
            <h3 className="depositionText">"Só tenho elogios a fazer. São super comprometidos, competentes, se preocupam com a satisfação do cliente,atenciosos. Eu super indico.."</h3>
            <p>ABAETÉ / MINAS GERAIS</p>
          </div>
          <div>
            <p>Izabella Ramos</p>
            <h3 className="depositionText">"Recomendo! Empresa séria, muito profissionalismo envolvido. Sensíveis às necessidades de cada clientes; se adaptam a realidade de cada um. Parabéns à toda equipe galera educada! EU RECOMENDO!."</h3>
            <p>CAMPINA GRANDE / PARAÍBA</p>
          </div>
          <div>
            <p>Rayane Travassos</p>
            <h3 className="depositionText">"Só tenho há agradecer a toda a equipe do SublimePrev, pois me atenderam super bem."</h3>
            <p>PASSO FUNDO / RIO GRANDE DO SUL</p>
          </div>
          <div>
            <p>Vitória Borba Fortunato</p>
            <h3 className="depositionText">"Pessoal altamente qualificado e responsável, sendo o ponto maior o atendimento e a preocupação em fazer algo que realmente a mãe precise.
                                            À toda equipe, parabéns por tanta dedicação e ficou comprovado: vocês amam o que fazem!."</h3>
            <p>VILA VELHA / ESPÍRITO SANTO</p>
          </div>
          <div>
            <p>Alana Soares</p>
            <h3 className="depositionText">"Eu agradeço pelo trabalho bem feito, também avalio como ótimo o atendimento, esclarecendo dúvidas, sempre ligando para avisar sobre o processo, enfim eu recomendo e desejo muito sucesso para vocês.."</h3>
            <p>DUQUE DE CAXIAS / RIO DE JANEIRO</p>
          </div>
          <div>
            <p>Olivia Freire</p>
            <h3 className="depositionText">"Primeiramente gostaria de agradecer a todo apoio dado e paciência para comigo. Fiquei muito feliz. Obrigada.."</h3>
            <p>CURITIBA / PARANÁ</p>
          </div>
        </Slider>
        )
    }
     
    return (
      <section className="deposition">
        <h2> Depoimentos de Mamães satisfeitas</h2>
        {carousel()}
      </section>
    );
}