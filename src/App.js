import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import MacbookFrame from './components/modalMacbookFrame/macbookFrame/MacbookFrame';
import PhoneFrame from './components/modalPhoneFrame/phoneFrame/PhoneFrame';
import PhoneLandscapeFrame from './components/modalPhoneLandscapeFrame /phoneLandscapeFrame/PhoneLandscapeFrame';
import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <div className="mobile">
        <Error />
      </div>
      <div className="conditional">
        <div className="container">
          <div className="header" style={{ background: 'dodgerblue', maxHeight: '124px' }}>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand className="brand">
                <div>
                  <img className="octicon octicon-mark-github v-align-middle" style={{ width: '11%', marginTop: '1%', marginLeft: '-4%' }} src={require('./components/assets/images/GitHub-profil.png')} alt="github-logo" />
                  <b style={{ marginLeft: '-4%', fontSize: '17px', color: 'white' }}>Media Devices Demo Site</b>
                </div>
                <hr />
              </Navbar.Brand>&emsp;
      <Nav className="mr-auto hidden-phone">
              </Nav>

            </Navbar>
          </div>
          <div style={{ paddingTop: '10px' }}>
            <b>MacBook</b>
          </div>
          <div>
            <hr />
            <MacbookFrame />
          </div>
          <br />
          <br />
          <hr />
          <b>Iphone 8</b>
          <hr />
          <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <PhoneFrame />
            </div>
            <br />
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <PhoneLandscapeFrame />
            </div>
          </div>
        </div>
        <div className="footer">
          <hr />
          <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', listStyle: 'none', paddingTop: '7px' }}>
            <li style={{ marginRight: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/rodolphe37/pwa-react-project" target='new'>Le Repository Github</a></li>
            <li style={{ marginRight: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://my-github-pwa.netlify.app/" target="new">La demo</a></li>
            <li><a style={{ textDecoration: 'none', color: 'white' }} href="https://www.rodolphe-augusto.fr/" target="new">Mon Portfolio</a></li>
          </ul>
          <small className="d-block mb-3 link-footer brand-footer" style={{ color: 'white' }}>Copyright &copy; Rodolphe Augusto 2020</small>
        </div>
      </div>
    </div>
  );
}

export default App;
