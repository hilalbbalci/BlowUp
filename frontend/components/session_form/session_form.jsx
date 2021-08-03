import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
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
                    Welcome to BlowUp!
                    <br />
                    {this.props.navLink}

                    <div className="login-form">
                        <br />
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
        user: {
            username: '',
            password: ''
        },
        formType: 'login',
        navLink: <Link to="/signup">sign up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

