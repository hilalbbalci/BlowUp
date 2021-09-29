import React from 'react';
import GoogleLogin from 'react-google-login';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: props.user.username,
                password: props.user.password
            },
            showErrors: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // update(field) {
    //     return e => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }
    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state.user);
        this.setState({ showErrors: true });
    }
    // handleSubmit(e) {
    //     // e.preventDefault();
    //     const user = Object.assign({}, this.state.user);
    //     this.props.processForm(user);
    //     this.setState({showErrors: true});
    // }
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
                            onChange={(text) => { this.setState({ user: { username: text.target.value, password: this.state.user.password } }) }}
                            className="login-input"
                        />
                    </label>
                    <label>Password
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={(text) => { this.setState({ user: { username: this.state.user.username, password: text.target.value } }) }}
                            className="login-input"
                        />
                    </label>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                </form>
                <p className="errors">{this.state.showErrors ? this.renderErrors() : null}</p>
                <p>Already have an account? <strong>{this.props.navLink}</strong></p>
            </div>

                        
        );
    }
}

export default SignUpForm;

