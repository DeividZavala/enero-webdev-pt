import React, { Component } from 'react'
import Router from './Router'
import NavBar from './components/common/Navbar'

class App extends Component {
  state = {
    user: {}
  }

  setUser = user => {
    this.setState({ user })
  }

  logout = () => {
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('USER')
    let { user } = this.state
    user = {}
    this.setState({ user })
    window.location.reload()
  }

  componentWillMount () {
    const user = JSON.parse(localStorage.getItem('USER'))
    if (user) {
      this.setState({ user })
    }
  }

  render () {
    const { user } = this.state
    return (
      <div className='App'>
        <NavBar {...user} logout={this.logout} />

        <div className='uk-section'>
          <Router setUser={this.setUser} user={user} />
        </div>
      </div>
    )
  }
}

export default App
