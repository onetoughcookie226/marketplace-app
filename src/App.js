import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">   
          <div className="container-fluid">
              <ul className="navbar-header">
                  <li><span className="glyphicon glyphicon-briefcase"></span></li>            
                  <li><span className="navbar-brand" href="#">Job Marketplace</span></li>
                  <li><span className="glyphicon glyphicon-user"></span></li> 
              </ul>
          </div>
        </nav>


        <div class="container-fluid">
          <div class="row">
                <div class="col-xs-1">   
                </div>
                <div class="col-xs-10">
                    <div class="search-results">
                        <div>
                            <h3>Resturant Manager</h3>
                            <small class="text-muted">Gummies muffin International</small>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. dolore eu fugiat nulla pariatu.
                            </p> 
                            <button type="submit" className="btn btn-default btn-retract">Retract</button>
                        </div>
                    </div>

                    <div class="search-results">
                        <div>
                            <h3>Head Chet</h3>
                            <small class="text-muted">Lemon drops Amsterdam</small>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. dolore eu fugiat nulla pariatu.
                            </p> 
                            <button type="submit" className="btn btn-success btn-save">Apply</button>
                        </div>
                    </div>
                </div>
                <div class="col-xs-1">
                </div>
          </div>
      </div>

      </div>
    );
  }
}

export default App;
