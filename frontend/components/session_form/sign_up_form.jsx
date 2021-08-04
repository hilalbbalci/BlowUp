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


    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <div className="login-form">
                    Join BlowUp!
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <GoogleLogin
                            clientId='659316375025-oef0r356n7ltan2662lbdj3s2cnjbjrb.apps.googleusercontent.com'
                            buttonText='login'
                            cokkiePolicy={'single_host_origin'}

                        />
                        <p>Already have an account? {this.props.navLink}</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;

