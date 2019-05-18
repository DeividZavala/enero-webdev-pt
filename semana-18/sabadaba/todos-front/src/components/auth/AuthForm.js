import React from 'react';

const AuthForm = () => (
    <div className="uk-width-1-2">
        <form className="uk-form-stacked">

            <div className="uk-margin">
                <label class="uk-form-label" for="email">Email:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input className="uk-input" type="email" />
                </div>
            </div>

            <div className="uk-margin">
                <label class="uk-form-label" for="password">Password:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                    <input className="uk-input" type="password" />
                </div>
            </div>

            <div>
                <button className="uk-button uk-button-primary">Login</button>
            </div>

        </form>
    </div>
)

export default AuthForm;