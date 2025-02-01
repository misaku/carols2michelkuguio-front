import styled from 'styled-components'

import minhaFoto from '../../assets/groom-putting-ring-bride-s-finger.jpg'

import  { useState, useEffect } from "react";
import {  intervalToDuration, parseISO } from "date-fns";



export const CountdownWrapper = styled.div`
  font-family: 'Helvetica', sans-serif;
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 100px; 
  padding: 10px;
  border-radius: 10px;
  width: 60%; 
  display: flex;
  justify-content: center; 
  align-items: center;;
`;

const CountdownSection = styled.div`
  display: inline-block;
  margin: 0 10px;
  text-align: center;

  .number {
    font-size: 2.8rem;
    font-weight: 700;
    color: white;
  }

  .text {
    font-size: 1.5rem;
    color: white;
    margin-top: 5px;
  }

  .separator {
    margin: 5px 0;
    border-top: 2px solid white;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

`;

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(133, 129, 129, 0.5), rgba(0, 0, 0, 0.5)), url(${minhaFoto}); /* Adiciona o gradiente com a imagem */
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 120vh; /* O header ocupa 30% da tela */
  justify-content: flex-start
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 10%; /* A nav ocupa 30% do Header */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif; /* Aplica a fonte Roboto na nav */
  
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 2.0rem
  }
`;


const HeaderText = styled.div`
  font-family: 'Dancing Script', cursive;
  color: white;
  font-size: 3.5rem; /* Tamanho grande */
  font-weight: 700;
  text-align: center;
  margin-top: 450px; /* Distância entre o texto e o contador */
  text-transform: uppercase;
  letter-spacing: 10px;
`;

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = intervalToDuration({
        start: new Date(),
        end: parseISO(targetDate),
      });
      
      const months = (new Date(targetDate).getFullYear() - new Date().getFullYear()) * 12 + (new Date(targetDate).getMonth() - new Date().getMonth());
      
      setTimeLeft({months: months, days:duration.days, hours:duration.hours, minutes: duration.minutes, seconds:duration.seconds});
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <CountdownWrapper>
      <div>
        <CountdownSection>
          <div className="number">{timeLeft.months}</div>
          <div className="text">Meses</div>
        </CountdownSection>
        <CountdownSection>
          <div className="number">{timeLeft.days}</div>
          <div className="text">Dias</div>
        </CountdownSection>
        <CountdownSection>
          <div className="number">{timeLeft.hours}</div>
          <div className="text">Horas</div>
        </CountdownSection>
        <CountdownSection>
          <div className="number">{timeLeft.minutes}</div>
          <div className="text">Minutos</div>
        </CountdownSection>
        <CountdownSection>
          <div className="number">{timeLeft.seconds}</div>
          <div className="text">Segundos</div>
        </CountdownSection>
      </div>
    </CountdownWrapper>
  );
};




export const Header = () => {
  const targetDate = "2025-09-27T17:00:00Z";
  return (
    <>
    <HeaderWrapper>
      <NavBar>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Quem Somos</a></li>
          <li><a href="#">Nossa História</a></li>
          <li><a href="#">Confirmação</a></li>
          <li><a href="#">Conheça os Padrinhos</a></li>
          <li><a href="#">O Casamento</a></li>
          <li><a href="#">Local</a></li>
          <li><a href="#">Galeria</a></li>
        </ul>
      </NavBar>
      <HeaderText>Carol e Michel</HeaderText> {/* Texto com nome dos noivos */}
      <Countdown targetDate={targetDate} />
    </HeaderWrapper>
    </>
     
  );
};