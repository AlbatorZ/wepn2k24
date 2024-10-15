export default function BoutonShotgun() {
    const handleClick = () => {
        window.location.href = 'https://forms.viarezo.fr/paps/2xyso8'; // Remplacer par le lien du shotgun VR
    }

    return (
        <>
            <button 
                onClick={handleClick}
            >
                SHOTGUN
            </button>

            <p style={{
                fontSize: '24px',
                lineHeight: '1.6',
                textAlign: 'center',
                maxWidth: '90rem',
                margin: '0 auto',
                color: '#fff',
                padding:'2rem'
            }}>
                <strong>Pour shotgun :</strong> Connectez-vous sur le site, entrez vos identifiants VR et votre adresse e-mail<br/>
                <strong>Paiement :</strong> Une fois le shotgun réussi, vous avez 24h pour payer et signer la charte après avoir reçu le mail de confirmation
            </p>
        </>
    );
}
