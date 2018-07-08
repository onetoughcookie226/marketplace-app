import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      jobs: [],
      users: []
    };
  }

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

        <div className="container-fluid">
          <div className="row">
                <div className="col-xs-1">   
                </div>
                <div className="col-xs-10">
                    <div className="search-results">
                        <div>
                          <div className="title"><h3>{this.props.title}</h3></div>
                          
                          <small className="text-muted">Gummies muffin International</small>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. dolore eu fugiat nulla pariatu.
                          </p> 
                          <button type="submit" className="btn btn-default btn-retract">Retract</button>
                        </div>
                    </div>

                    <div className="search-results">
                        <div>
                            <h3>Head Chet</h3>
                            <small className="text-muted">Lemon drops Amsterdam</small>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. dolore eu fugiat nulla pariatu.
                            </p> 
                            <button type="submit" className="btn btn-success btn-save">Apply</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-1">
                </div>
          </div>
      </div>

      </div>
    );
  }


}
// App.propTypes= {
//   title:propTypes.string,
//   id:propTypes.number,
//   company: propTypes.string,
// }

export default App;
