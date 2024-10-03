export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#2998e350', padding: '20px', textAlign: 'center' }}>
            <h2>WEPN 2024</h2>
            <p>
                Organisé par WACS (Winter Association Centrale Supélec)
                <br />
                Alpe d'Huez - 30 novembre au 1er décembre 2024
            </p>

            <div style={{ marginTop: '20px' }}>
                <h3>Contact</h3>
                
                <div>
                    <a 
                        href="https://www.instagram.com/wacs_centralesupelec/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#000', marginRight: '20px' }}
                    >
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                            alt="Instagram" 
                            style={{ width: '30px', height: '30px', marginRight: '10px' }}
                        />
                        Instagram
                    </a>

                    <a 
                        href="https://wacs.cs-campus.fr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#000' }}
                    >
                        <img 
                            src="/logo192.png" 
                            alt="Site Web" 
                            style={{ width: '30px', height: '30px', marginRight: '10px' }}
                        />
                        Site Web
                    </a>
                </div>
            </div>
        </footer>
    );
}
