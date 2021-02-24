import { Component } from 'react'
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Banner from './Components/banner/Banner'
import Projects from './Components/projects/Projects'
import Contact from './Components/contact/Contact'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Banner />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default App;
