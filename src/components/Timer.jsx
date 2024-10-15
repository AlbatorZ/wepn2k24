import React, { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-10-17T13:00:00'); // date et heure du shotgun 18/10/2024 à 13h
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="timer-container">
            <h2>Shotgun boursier dans</h2>
            <div className="timer-numbers">
                {timeLeft.days} <span className="timer-labels">Jours</span> {' '}
                {timeLeft.hours} <span className="timer-labels">Heures</span> {' '}
                {timeLeft.minutes} <span className="timer-labels">Minutes</span> {' '}
                {timeLeft.seconds} <span className="timer-labels">Secondes</span>
            </div>
        </div>
    );
}
