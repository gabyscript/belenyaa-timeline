import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './countdown.css'

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Container className='countdown-container d-flex flex-column justify-content-center align-items-center min-vh-100' >
      <Container className='home-container p-5'>
        <h2 className='text-center font-weight-bold neon'>Próximo evento 👀</h2>
        <Container className='d-flex flex-row justify-content-center align-items-center py-4'>
          <Container className='d-flex flex-column neon'>
            <h2 className='text-center font-weight-bold'>{timeLeft.days}</h2>
            <h5 className='text-center'>Días</h5>
          </Container>
          <Container className='d-flex flex-column neon'>
            <h2 className='text-center'>{timeLeft.hours}</h2>
            <h5 className='text-center'>Horas</h5>
          </Container>
          <Container className='d-flex flex-column neon'>
            <h2 className='text-center'>{timeLeft.minutes}</h2>
            <h5 className='text-center'>Minutos</h5>
          </Container>
          <Container className='d-flex flex-column neon'>
            <h2 className='text-center'>{timeLeft.seconds}</h2>
            <h5 className='text-center'>Segundos</h5>
          </Container>
        </Container>
      </Container>
      
    </Container>
  );
};

export default Countdown