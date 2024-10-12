import './App.css';
import Header from './components/Header'
import Container from './components/Container'
import BoutonShotgun from './components/BoutonShotgun';
import Footer from './components/Footer';
import Timer from './components/Timer'
function App() {
  return (
    <>
    <Header/>
    <main>
      <Container/>
      <Timer/>
      <BoutonShotgun/>
      
    </main>
    <Footer />
    </>
  );
}

export default App;
