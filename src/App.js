import { Component } from 'react'
import './App.css';
import Banner from './Components/banner/Banner'
import Contact from './Components/contact/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Contact />
      </div>
    )
  }
}

export default App;
