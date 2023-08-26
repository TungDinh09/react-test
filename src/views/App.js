import logo from "./logo.svg";
import "./App.scss";
import Example from "./Example/example";
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
          adu
        </a>
        {<Example></Example>}
      </header>
    </div>
  );
}

export default App;
