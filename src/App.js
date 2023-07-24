import React from 'react';
import Leftbar from './Components/Leftbar/Leftbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App" style={{display:'flex'}}>
    <Leftbar/>
    <Header/>
    </div>
  );
}
export default App;

