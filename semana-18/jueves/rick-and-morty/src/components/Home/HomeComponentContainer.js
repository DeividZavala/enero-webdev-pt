import React, {Component} from 'react';
import axios from 'axios';
import Countdown from '../common/Countdown';
import UIkit from 'uikit';
import CardComponent from '../common/CardComponent';

class HomeComponentContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            characters: [],
            meta: {}
        };
    }

    componentWillMount(){}

    render(){
        const { characters } = this.state;
        return (
            <div>

                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-grid-match uk-grid-small uk-child-width-1-4" uk-grid="true">
                            {characters.map(
                                (character, index) => 
                                    <CardComponent key={index} {...character} />
                                )
                            }
                        </div>
                        <div className="uk-margin uk-flex uk-flex-center">
                            <Countdown/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){

        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
            const { info:meta, results:characters} = res.data;
            this.setState({meta, characters});
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