import React, {Component} from 'react';
import Router from './Router';

class App extends Component{
    render(){
        return(
            <div className="App">

            <div className="uk-section">
                <Router/>
            </div>

            </div>
        )
    }
}

export default App;