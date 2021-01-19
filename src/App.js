import logo from './logo.svg';
import './App.css';
import Table from './components/Tables.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Table/>
    </div>
          <div className="col-sm">
            One of three columns
    </div>
          <div className="col-sm">
            One of three columns
    </div>
        </div>
      </div>
    </div>
  );
}

export default App;
