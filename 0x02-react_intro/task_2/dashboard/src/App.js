import logo from './logo.jpg';
import './App.css';
import {getFullYear , getFooterCopy} from './utils';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard:</p>
        <label>Email:<input type="email" id="email" name="email"/></label>
        <label>Password:<input type="password" id="password" name="password"/></label>
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
