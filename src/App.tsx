import './Bootstrap.css';
import './App.css';
import API from '../src/pages/API';
import Nav from '../src/pages/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="hero-section">
        <h1 className="text-white text-center nasa-hero-text">NASA API</h1>
      </div>
      <API />
    </div>
  );
}

export default App;
