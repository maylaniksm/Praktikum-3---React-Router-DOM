import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
    <div>
    <nav class="navbar navbar-dark bg-dark">
    <div class="card-header">
    <ul class="nav nav-tabs">
    <button><li class="nav-item" class="btn btn-success">
    <a class="nav-link active " >
    <Link to="/">Beranda</Link></a>
    </li></button>
    <button><li class="nav-item" class="btn btn-warning">
    <a class="nav-link active" href="#">
    <Link to="/tentangsaya"> Tentang Saya</Link></a>
    </li></button>
    <button><li class="nav-item" class="btn btn-danger">
    <a class="nav-link active" href="#">
    <Link to="/karya"> Karya</Link></a>
    </li></button>
    <button><li class="nav-item" class="btn btn-info">
    <a class="nav-link active" href="#">
    <Link to="/kontak"> Kontak</Link></a>
    </li></button>
    </ul>
    </div>
     </nav>
    <div class="card-body">
    <p><Utama /></p>
    </div>
     </div>
    
    );
  }
}

export default App;
