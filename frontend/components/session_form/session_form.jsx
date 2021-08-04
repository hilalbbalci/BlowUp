import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        return (
            <div className="login-form-container">
                
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                        <h2> Log in to BlowUp </h2>
                        <label>Username
                            <br />
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <label>Password
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label> 
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        {/* <GoogleLogin
                            clientId='659316375025-oef0r356n7ltan2662lbdj3s2cnjbjrb.apps.googleusercontent.com'
                            buttonText='login'
                            cokkiePolicy={'single_host_origin'}

                        /> */}
                        <div className="errors">{this.renderErrors()}</div>
                        <p>Don't have an account?{this.props.navLink}</p>
                    </div>
                </form>
               
                
            </div> 
        );
    }
}

const mapStateToProps = ({sessionErrors}) => {
    return {
        errors: sessionErrors,
        user: {
            username: '',
            password: ''
        },
        formType: 'Log in',
        navLink: <Link to="/signup">Sign up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

