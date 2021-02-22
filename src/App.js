import { Component } from 'react'
import './App.css';
import Banner from './Components/banner/Banner'
import Projects from './Components/projects/Projects'
import Contact from './Components/contact/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Contact />
        <Projects />
      </div>
    )
  }
}

export default App;
