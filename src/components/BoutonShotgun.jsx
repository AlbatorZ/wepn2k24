export default function BoutonShotgun() {
    const handleClick = () => {
        window.location.href = 'https://linkcs.fr'; // mettre le lien du shotgun lydia
    }

    return (
        <>
            <button onClick={handleClick}> SHOTGUN </button>
        </>
    );
}
