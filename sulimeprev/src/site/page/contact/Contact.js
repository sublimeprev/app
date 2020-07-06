import React from 'react';
import ImgContact from '../../img/contact_img.png';
import ImgRedeSocial from '../../img/redes_sociais.png';
import {AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import LogoSystem from '../../img/logo_transparente.png';
import './contact.css';

export default function Contact(){
    return (
        <section id="contato" className="contactSite">
            <div className="contentGeral">
                <img className="bannerContac" src={ImgContact} alt="Banner Contact"/>
                <div className="contactContent">
                   
                    <h1>
                        Email:
                    </h1>
                    
                    <p >
                        <MdEmail style={{margin:"-0.5%", marginRight:"2%"}}/>    sublimePrevSalarioMaternidade@gmail.com
                    </p>
                    
                    <h1>
                        Whats:
                    </h1>
                   
                    <p>
                        <AiOutlineWhatsApp style={{margin:"-0.5%", marginRight:"2%"}}/> 51 98451-2571
                    </p>
                    <h1>
                        Whats:
                    </h1>
                   
                    <p>
                        <AiOutlineWhatsApp style={{margin:"-0.5%", marginRight:"2%"}}/> 51 99518-5439
                    </p>
                    {/* <h1>
                        Telefone:
                    </h1>
                    <p>
                        <FiPhone style={{margin:"-0.5%", marginRight:"2%"}}/> 51 3035-5547
                    </p> */}
                </div>
            </div>
            <div className="contentGeral">
                <img className="bannerContac" src={ImgRedeSocial} alt="Banner Contact"/>
                <div className="contactContent">
                    <h1 className="links">
                        <a className="redeSocial" href="https://www.facebook.com/sublimePrevSalariomaternidade/" target="_blank">
                            <FaFacebook/>
                        </a>
                    </h1>
                    <h1 className="links">
                        <a className="redeSocial" href="https://www.instagram.com/invites/contact/?i=nny2ub04nmva&utm_content=hgmww8g" target="_blank">
                            <AiFillInstagram/>
                        </a>
                    </h1>
                </div>
                <a className="redeSocial" target="_blank">
                        <img className="logoSyst" src={LogoSystem} alt="Logo sistema"/>
                </a>
            </div>
        </section>
    )
}