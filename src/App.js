import logo from './logo.svg';
import Header from './components/Header';
import Tasks from './components/Tasks';

import './App.css';

function App() {


  return (
    <div className="container">
      <Header title="Tracker"/>
      <Tasks/>
    </div>
  );
}

export default App;
