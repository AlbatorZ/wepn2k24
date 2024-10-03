import React from 'react';
import './Header.css'; // Assure-toi que le fichier CSS est importé

export default function Header() {
    return (
        <header className="header">
            <h1>Shotgun WEPN</h1>
            <img 
                src="/logo512.png" 
                alt="WACS" 
                style={{ width: '300px', height: '300px', marginRight: '10px' }}
            />
            <p>Le WEPN (Week-end Premières Neiges) aura lieu du 30 novembre au 1er décembre 2024 wouhouw</p>
        </header>
    );
}
