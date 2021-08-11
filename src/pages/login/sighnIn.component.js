import React, { useContext, useState } from 'react'
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

import { firebaseAuth } from '../../providers/authProvider';

const SighnIn = () => {
    const [loading, setLoading] = useState(false)

    const {
        handleSignin,
        inputs,
        setInputs,
        errors,
        setErrors } = useContext(firebaseAuth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        setLoading(true)
        await handleSignin();
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
                            <h2 className="text-center mb-4">Log In</h2>
                            {errors.length > 0 ? errors.map(error => <Alert variant="danger">{error}</Alert>) : null}
                            <Form onSubmit={handleSubmit}>
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
                                <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </>
            </div>
        </Container>
    );
}

export default SighnIn
