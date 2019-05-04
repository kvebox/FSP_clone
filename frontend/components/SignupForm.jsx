import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field){
        
        return(e) =>{
            console.log('hello');
            this.setState({[field]: e.target.value});
        };
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state);
            // .then(() => this.props.history.push('/profile')); // redirect if successful signup
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: ""
        };
    }

    demoLogin(e) {
        e.preventDefault();
        let demoUser = {
            email: "nd@gmail.com",
            first_name: "n",
            last_name: "d",
            password: "password"
        };
        this.props.login(demoUser)
            .then(() => this.props.history.push('/profile'));
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render () {
        // debugger
        return (
            <>
            <div className="signup-container">
                <form className="signup-form" onSubmit={(e) => this.handleSubmit(e)}>
                   <h1>Create a new account</h1>
                        {this.renderErrors()}
                        <input className='input' type='text' 
                               onChange={this.update('first_name')} 
                               value={this.state.first_name}
                               placeholder="First name"/>
                        <input className='input' type='text' 
                               onChange={this.update('last_name')} 
                               value={this.state.last_name}
                               placeholder="Last name"/>
                        
                    <br />
                        <input className='input_long' type='text' 
                               onChange={this.update('email')} 
                               value={this.state.email}
                            placeholder="Email"/>
                    <br />
                        <input className='input_long' type='password' 
                               onChange={this.update('password')} 
                               value={this.state.password}
                               placeholder="Password"/>
                    <br />
                    <button type="submit" value="submit">Create Account</button>
                    <button onClick={(e) => this.demoLogin(e)} value="submit">Demo Login</button>
                </form>
            </div>
            </>
        )
    }

};

export default withRouter(SignupForm);