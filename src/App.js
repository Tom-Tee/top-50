import logo from './logo.svg';
import './App.css';

function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div className="container">
      <div>
        <header className="the-header">
          <h1>THE TOP 50</h1>
        </header>
        <div className = "input-search">
          <h3>SEARCH</h3>
          <input type="text" />
        </div>

      <table>
        <thead>
          <tr>Artist</tr>
          <tr>Song</tr>
        </thead>
      </table>

      </div>
    </div>
  );
}

export default App;
