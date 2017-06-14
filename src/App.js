import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import bg from './bg.png';
import data from './seriesData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: {
      }
    }
    this.handleSide = this.handleSide.bind(this);
  }

  handleSide(e) {
    e.preventDefault();
    this.setState((prevState) => {
      prevState.sidebar = {
        transform: (prevState.sidebar.transform === 'translateX(100%)' ? 'translateX(-100%)' : 'translateX(100%)')
      }
    });
  }

  render() {
    const bgs = {
      background: `no-repeat center url('${bg}')`,
      backgroundSize: 'cover'
    };
    const list = this.state.sidebar;

    return (
      <div>
        <nav>
          <div className='logo-container'>
            <img src={logo} className='logo' alt='logo' />
          </div>
        </nav>
        <div className='bg' style={bgs}>
        </div>
        <div className='info'>
          <div className='text'>
            <h1>Spotted Flower</h1>
            <h3>SHIMOKU KIO</h3>
            <p>A story about a pregnant woman and her otaku husband.</p>
            <a href=''>READ</a> - DOWNLOAD<br /><br />
            SHOW ME ANOTHER<br />
            <button onClick={this.handleSide}>SEE ENTIRE CATALOG</button>
          </div>
        </div>
        <div className='seriescontainer' style={list}>
          <div className='serieslist'>
            {data.list.sort((a, b) => {
              if (a.updated.getTime() < b.updated.getTime())
                return 1;
              else if (a.updated.getTime() > b.updated.getTime())
                return -1;
              else return 0;
            }).map((e, index) => (
              <div key={index} className='series'>
                <div>{e.title}</div>
                <small>Last updated {e.updated.toLocaleDateString()}</small>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
