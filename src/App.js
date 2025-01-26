import './App.css';
import Header from './components/Header';
import Map from './components/Map' ;
import Footer from './components/Footer';
import PhotoBook from './components/PhotoBook';

function App() {
  return (
    <div>
    <div className="App">
      <Header />
    </div>
      {/* <Map /> */}
      <PhotoBook />
      <Footer />
    </div>
  );
}

export default App;
