import React, {Component} from 'react';
import axios from 'axios';
import Countdown from '../common/Countdown';
import UIkit from 'uikit';

class HomeComponentContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            characters: []
        };
    }

    componentWillMount(){

    }

    render(){
        return (
            <div>

                
                <Countdown/>
            </div>
        )
    }

    componentDidMount(){

        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
            console.log(res.data);
        })


        const element = document.getElementById("homeCountdown");
        UIkit.countdown(element).start(); 
    }

    componentWillUnmount(){
        const element = document.getElementById("homeCountdown");
        UIkit.countdown(element).stop();
    }

}

export default HomeComponentContainer;