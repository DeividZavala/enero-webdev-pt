import React, {Component} from 'react';
import AuthForm from './AuthForm';
import {login, register} from '../../services/auth';

class AuthFormContainer extends Component{

    state = {
        auth: {
            email: "",
            password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {auth} = this.state;
        const {pathname} = this.props.location;
        if(!auth.email.length) return this.setState({error: "Debes agregar una tarea"})
        pathname === "/login" ? this.onLogin() : this.onRegister();
      }

      onLogin = () => {
        const {auth} = this.state;
        login(auth)
        .then(({token, user}) => {
            localStorage.setItem("TOKEN", token);
            localStorage.setItem("USER", JSON.stringify(user))
        })
        .catch()
      }

    render(){
        console.log(this.props);
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