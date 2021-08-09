import React from 'react';
import GoogleLogin from 'react-google-login';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.user;
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
                <div className="head">
                    <h3>Join BlowUp!</h3>
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
                <p>{this.renderErrors()}</p>
                <p>Already have an account? <strong>{this.props.navLink}</strong></p>
            </div>

                        
        );
    }
}

export default SignUpForm;

