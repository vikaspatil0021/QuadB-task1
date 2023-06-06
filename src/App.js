import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import EachShow from './components/EachShow/EachShow';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/shows/:showId" exact element={<EachShow />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
