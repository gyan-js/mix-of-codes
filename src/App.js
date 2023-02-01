import logo from './logo.svg';
import './App.css';
import Giscus from '@giscus/react';
import {Navbar, Comment, Home} from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
