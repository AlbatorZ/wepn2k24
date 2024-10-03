import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Container from './components/Container'
import BoutonShotgun from './components/BoutonShotgun';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Header/>
    <main>
      <Container/>
      <BoutonShotgun/>
      
    </main>
    <Footer />
    </>
  );
}

export default App;
