import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
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
    demoUser() {
        // e.preventDefault();
        const demoUser = {
            username: "Taha Bebek",
            password: "password"
        }
        this.props.processForm(demoUser);
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
                <div className="head">
                    <h3> Log in to BlowUp </h3>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form-box">      
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
                </form> 
                <button onClick={this.demoUser.bind(this)} className="demo-user">Demo User</button>

                <p className="errors">{this.renderErrors()}</p>
                <p>Don't have an account? <strong>{this.props.navLink}</strong></p>
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

