import logo from './logo.svg';
import './App.css';

const list = [
  {
      "id": 1,
      "title": "Read The Alchemist",
      "body": "A chapter a day keeps the nihilism away"
  },
  {
      "id": 2,
      "title": "Lmao",
      "body": "I purpose to laugh my prosterior out"
  },
  {
      "id": 3,
      "title": "Dubs in Fo",
      "body": "Steph Curry With the shot"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
    </div>
  );
}

export default App;
