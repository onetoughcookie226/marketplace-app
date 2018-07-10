import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      jobs: [
        {
          "id":1,
          "title": "",
          "Company": "",
          "description": "",
          "hasApplication": false
        }
      ],
      users: [
        {
          "id": 1,
          "name": "Jonnie walker"
        }
      ]
    };
  }
  

  // componentDidMount() {
  //   axios.get('/user', {
  //     params: {
  //       ID: 12345
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   })
  // }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">   
          <div className="container-fluid">
              <ul className="navbar-header">
                  <li><a className="glyphicon glyphicon-briefcase"  href="#"></a></li>            
                  <li><span className="navbar-brand" href="#">Job Marketplace</span></li>
                  <li><a className="glyphicon glyphicon-user" href="#"></a></li> 
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
                          <small className="text-muted">{this.props.company}</small>
                          <div className=""><p>{this.props.description}</p> </div>
                          <button type="submit" className="btn btn-default btn-retract">Retract</button>
                        </div>
                    </div>

                    <div className="search-results">
                        <div>
                            {/* <h3>Head Chet</h3> */}
                            <div className="title"><h3>{this.props.title}</h3></div>

                            <small className="text-muted"></small>
                            <p className="">{}</p> 
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

// class Navbar extends React.Component{
//   constructor(props) {
//     super(props);

//   }

//   render () {
//     return
  
//   }
// }
// App.propTypes= {
//   title:propTypes.string,
//   id:propTypes.number,
//   company: propTypes.string,
// }

export default App;
