import logo from './logo.svg';
import './App.css';
import Giscus from '@giscus/react';
import { Navbar, Comment, Home, Topics } from './components'
import {TGit, TJavascript, TReact} from './pages'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/topics/git' element={<TGit />} />
          <Route path='/topics/javascript' element={<TJavascript />} />
          <Route path='/topics/reactjs' element={<TReact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
