import React,{ Component } from 'react';
import Navbar from './Navbar';
import Maincontent from './MainContent';
// import Footer from './Footer';
import background from './bg.jpg';

class App extends Component{
  render(){
    return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">
        <img src={background} alt="Background" className="col-12 p-0"/>
        <Navbar repos={this.state.repos} />
          <div className="col-12 col-md-12 col-xl-12 p-0 bg-dark text-light">
            <Maincontent repos={this.state.repos}/>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
      
      
    </div>
  )}
  state = {
    repos: []
  };
  componentDidMount() {
    fetch('https://scpdb-b827.restdb.io/rest/scpfiles', {
      method: 'GET',
      headers: {"content-type": "application/json",
      "x-apikey": "60a6339ce3b6e02545edaac6",
      "cache-control": "no-cache",}
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ repos: data })
    })
    .catch(console.log)
  }
}

export default App;
