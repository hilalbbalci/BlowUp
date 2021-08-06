import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';


const mapStateToProps = (state) => {
    return {
        errors: state.sessionErrors,
        user: {
            username: '',
            password: ''
        },
        formType: 'Sign up',
        navLink: <Link to="/login">Log in</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
