import React from "react";

import './reserva.css';
import '../App.css'
import {HiOutlineClipboardCheck} from 'react-icons/hi' 
import 'aos/dist/aos.css'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Reserva = () => {

  return (

    <>
    <Navbar />
    <section className='home'>
        
        <div className="homeContent container">
          
          <div className="textDiv">
            <span className="smallText">
              Bienvenido
            </span>
  
            <h1 className="homeTitle">
              Reserva tu Hotel
            </h1>
          </div>
  
          <div className="cardDiv grid">
            <div className="nombresInput">
              <label htmlFor="name">Ingresa tu Nombre y Apellidos: </label>
              <div className="input flex">
                <input
                  id="namefilter"
                  type="text"
                  placeholder="Introduzca su nombre"                
                />              
              </div>
            </div>
            
            <div className="emailInput">
              <label htmlFor="email">Ingresa tu Correo: </label>
              <div className="input flex">
                <input
                  id="emailfilter"
                  type="text"
                  placeholder="Introduzca su correo"                
                />              
              </div>
            </div>
  
            <div className="celularInput">
              <label htmlFor="celular">Ingresa tu celular: </label>
              <div className="input flex">
                <input
                  id="celularfilter"
                  type="text"
                  placeholder="Introduzca su celular"                
                />              
              </div>
            </div>
            
            <div className="habitacionesInput">
              <label htmlFor="habitaciones">Ingresa N° de habitaciones: </label>
              <div className="input flex">
                <input
                  id="habitacionesfilter"
                  type="text"
                  placeholder="Introduzca N° habitaciones"                
                />              
              </div>
            </div>
  
            <div className="dateInput">
              <label htmlFor="date">Seleccione la fecha Inicio: </label>
              <div className="input flex">
                <input type="date"/>
              </div>
            </div>
  
            <div className="dateInput">
              <label htmlFor="date">Seleccione la fecha Fin: </label>
              <div className="input flex">
                <input type="date"/>
              </div>
            </div>
  
            <div className="searchOptions flex">
            <HiOutlineClipboardCheck className = 'icon'/>
              <span>ENVIAR</span>
            </div>
          </div>
  
          <div className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
  
            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
    
  );
};

export default Reserva;
