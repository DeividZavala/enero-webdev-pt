import React, {Component} from 'react';
import Router from './Router';
import NavBar from './components/common/Navbar';

class App extends Component{
    render(){
        return(
            <div className="App">

            <NavBar/>

            <div className="uk-section">
                <Router/>
            </div>

            </div>
        )
    }
}

export default App;