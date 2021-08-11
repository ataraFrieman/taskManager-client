import React, { useState } from 'react';
import { authMethods } from '../pages/login/login.service';

const AuthProvider = (props) => {

    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(null)

    const handleSignup = () => {
        return authMethods.signup(inputs.email, inputs.password, setErrors, setToken)
    }

    const handleSignin = () => {
        authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
    }
    return (
        <div>
            <firebaseAuth.Provider
                value={{
                    //replaced test with handleSignup
                    handleSignup,
                    handleSignin,
                    inputs,
                    setInputs,
                    errors,
                    setErrors
                }}>
                {props.children}

            </firebaseAuth.Provider>
        </div>
    );
};

export default AuthProvider;
export const firebaseAuth = React.createContext()

