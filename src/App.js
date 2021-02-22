import { Component } from 'react'
import './App.css';
import Banner from './Components/banner/Banner'
import Projects from './Components/projects/Projects'
import Contact from './Components/contact/Contact'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Banner />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default App;
