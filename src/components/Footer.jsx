export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#2998e350', padding: '20px', textAlign: 'center' }}>
            <h2>WEPN 2024</h2>
            <p>
                Organisé par la WACS (Winter Association Centrale Supélec)
                <br />
                Alpe d'Huez - 30 novembre au 1er décembre 2024
            </p>

            <div style={{ marginTop: '20px' }}>
                <h3>Contact</h3>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/wacs_centralesupelec/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#fff', textAlign: 'center' }} // Centrer le texte et image
                    >
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                            alt="Instagram" 
                            style={{ width: '30px', height: '30px', display: 'block', margin: '0 auto 10px' }} // Image centrée en bloc
                        />
                        Instagram
                    </a>

                    {/* Site Web */}
                    <a 
                        href="https://wacs.cs-campus.fr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#fff', textAlign: 'center' }}
                    >
                        <img 
                            src="/logo192.png" 
                            alt="Site Web" 
                            style={{ width: '30px', height: '30px', display: 'block', margin: '0 auto 10px' }} 
                        />
                        Site Web
                    </a>
                </div>

                {/* Adresse mail */}
                <div style={{ marginTop: '10px' }}>
                    <a 
                        href="mailto:wacs.wepn@ml.viarezo.fr"
                        style={{ textDecoration: 'none', color: '#fff' }} 
                    >
                        wacs.wepn@ml.viarezo.fr
                    </a>
                </div>
            </div>
        </footer>
    );
}
