import React from 'react';

const AuthForm = ({handleSubmit, handleChange, error, email, password}) => (
    <div className="uk-width-1-2">
        <form className="uk-form-stacked" onSubmit={handleSubmit}>

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="email">Email:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input 
                        value={email}
                        onChange={handleChange} 
                        className="uk-input" 
                        type="email" 
                        name="email" 
                    />
                </div>
            </div>

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="password">Password:</label>
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                    <input 
                        value={password}
                        onChange={handleChange} 
                        className="uk-input" 
                        type="password" 
                        name="password" 
                    />
                </div>
            </div>

            {error && (
                <div className="uk-alert-danger" uk-alert="true">
                    <p>{error}</p>
                </div>
            )}

            <div>
                <button className="uk-button uk-button-primary">Login</button>
            </div>

        </form>
    </div>
)

export default AuthForm;