import React, { Component } from 'react';

//components
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

class Donate extends Component {
  render(){
    return(
      <div>
        <Navbar/>
      
        <div>
          <div>
            <h1>Hero Img</h1>
          </div>
          
          <div>
            <h1>Content</h1>
          </div>

          <Sidebar/>
          
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Donate;