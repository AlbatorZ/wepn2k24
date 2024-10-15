import React from 'react';
import Snowfall from 'react-snowfall'; // Importer la bibliothèque
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <Snowfall
                snowflakeCount={200} // Le nombre de flocons de neige
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
            />
            <h1>Shotgun WEPN</h1>
            <img 
                src="/logo512.png" 
                alt="WACS" 
                style={{ width: '300px', height: '300px', marginRight: '10px' }}
            />
            <p>Le WEPN, c'est un week-end de pure glisse <strong>le 30 novembre et 1 décembre</strong> où on va fêter l’ouverture d’une station pour la saison, c’est l’occasion rêvée de profiter de ses potes et de retrouver les meilleures sensations du monde !</p>
        </header>
    );
}
