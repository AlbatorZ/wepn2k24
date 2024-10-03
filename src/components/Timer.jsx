import React, { useState, useEffect } from 'react';

export default function Timer() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-10-15T15:00:00'); // date et heure du shotgun 15/10/2024 à 15h
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

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    return (
        <div style={{ textAlign: 'center', fontSize: '24px' }}>
            <h2>Compte à rebours avant le shotgun</h2>
            <div>
                {timeLeft.days} jours {timeLeft.hours} heures {timeLeft.minutes} minutes {timeLeft.seconds} secondes
            </div>
        </div>
    );
}
