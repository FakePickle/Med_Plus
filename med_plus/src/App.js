import logo from './logo.svg';
import './App.css';

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
        <form action="http://localhost:5000/api" method="post" encType="multipart/form-data">
        First name:<input type="text" name = "first_name" /><br />
        Last name:<input type="text" name = "last_name" />
        <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
