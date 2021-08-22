import React, { useState } from 'react';
import { authMethods } from '../pages/login/login.service';

const AuthProvider = (props) => {

    const [inputs, setInputs] = useState({userName:'', email: '', password: '' })
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(null)

    const handleSignup = () => {
        return authMethods.signup(inputs, setErrors, setToken)
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

