import logo from './logo.svg';
import './App.css';
import cloud from "./assets/images/cloud.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Images</h1>
      <img src={cloud} />
      <img src={cloud} />
      <img src={cloud} />
      <h1>Images</h1>
      <img src={cloud} />
      <img src={cloud} />
      <img src={cloud} /> <img src={cloud} />
      <img src={cloud} />
      <img src={cloud} />
    </div>
  );
}

export default App;
