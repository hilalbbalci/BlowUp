import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            user: {
                username: this.props.user.username,
                password: this.props.user.password
            },
            showErrors: false
        } 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
        // this.update = this.update.bind(this);
    }
    
   
    // update(field) {
    //     return e => {
    //         e.preventDefault();
    //         this.setState({
    //         user: {
    //             [field]: e.currentTarget.value
    //             }
    //         });
    //      };
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state.user);
        this.setState({showErrors : true});
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
                {this.props.errors ? this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                )) : null}
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
                                value={this.state.user.username}
                                onChange={(text)=> {this.setState({user : {username: text.target.value, password: this.state.user.password}})}}
                                className="login-input"
                            />
                        </label>
                        <label>Password
                            <br />
                            <input type="password"
                                value={this.state.user.password}
                                onChange={(text) => { this.setState({ user: { username: this.state.user.username, password: text.target.value } })}}
                                className="login-input"
                            />
                        </label> 
                        <input className="session-submit" type="submit" value={this.props.formType} />       
                </form> 
                <button onClick={this.demoUser.bind(this)} className="demo-user">Demo User</button>

                <p className="errors">{this.state.showErrors ? this.renderErrors() : null}</p>
                <p>Don't have an account? <strong>{this.props.navLink}</strong></p>
            </div> 
        )
    }
}

const mapStateToProps = (state = {}) => {
    return {
        errors: Object.values(state.sessionErrors),
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

