import React, {Component} from 'react';
import AuthForm from './AuthForm';

class AuthFormContainer extends Component{
    render(){
        return(
            <div>
                <div className="uk-flex uk-flex-center">
                    <AuthForm/>
                </div>
            </div>
        )
    }
}

export default AuthFormContainer;