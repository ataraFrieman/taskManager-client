import React, { useContext, useState } from 'react'
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

import { firebaseAuth } from '../../providers/authProvider';

const SighnUp = () => {
    const [cnfirmPassword, setConfimPassword] = useState(null);
    const [loading, setLoading] = useState(false)
    
    const {
        handleSignup,
        inputs,
        setInputs,
        errors,
        setErrors } = useContext(firebaseAuth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (inputs.password !== cnfirmPassword)
            return setErrors(["Passwords do not match"])
        setLoading(true)
        await handleSignup();
        setLoading(false)
        setErrors([]);
    }

    const handleChange = e => {
        setErrors([]);
        const { name, value } = e.target
        setInputs(prev => ({ ...prev, [name]: value }))
    }

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {errors.length > 0 ? errors.map(error => <Alert variant="danger">{error}</Alert>) : null}
                            <Form onSubmit={handleSubmit}>
                            <Form.Group id="userName">
                                    <Form.Label>Choose a username</Form.Label>
                                    <Form.Control type="text" onChange={handleChange} name="userName" placeholder='Choose a username'
                                        value={inputs.username} required />
                                </Form.Group>
                                <br />
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" onChange={handleChange} name="email" placeholder='email'
                                        value={inputs.email} required />
                                </Form.Group>
                                <br />
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={handleChange} name="password"
                                        placeholder='password'
                                        value={inputs.password} required />
                                </Form.Group>
                                <br />
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" onChange={(e) => {
                                        setErrors([]);
                                        setConfimPassword(e.target.value)
                                    }}
                                        placeholder='password confirmation'
                                        value={cnfirmPassword} required />
                                </Form.Group>
                                <br />
                                <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">
                            Log In
                    </Link>
                    </div>
                </>
            </div>
        </Container>
    );
}

export default SighnUp
