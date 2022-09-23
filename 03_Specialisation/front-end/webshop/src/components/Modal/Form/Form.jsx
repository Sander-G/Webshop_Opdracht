import React from 'react'
import styled from 'styled-components'
import { createNewAccount, loginToAccount } from '../../../utils/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function SignIn({ setShowSignUp }) {
    const [details, setDetails] = React.useState({
        email: '',
        password: '',
    })

    const handleSignIn = (e) => {
        e.preventDefault();
        loginToAccount(details.email, details.password)
    }

    return (
        <Form onSubmit={handleSignIn}>
            <FormHeader>
            Sign in here!
            </FormHeader>
            <FormWrapper>
                <Input onChange={(e) => setDetails(details => {
                    return {
                        ...details,
                        email: e.target.value
                    }
                })} value={details.email} type="email" placeholder="Email" />
                <Input onChange={(e) => setDetails(details => {
                    return {
                        ...details,
                        password: e.target.value
                    }
                })} value={details.password} type="password" placeholder="Password" />
            </FormWrapper>
            <FormWrapper>
                <ModalButton type="submit">Sign in</ModalButton>
                <SwitchSignInUp onClick={() => setShowSignUp(prevState => !prevState)}>Click here to Register</SwitchSignInUp>
            </FormWrapper>
        </Form>
    )
}

export function SignUp({ setShowSignUp }) {
    const [details, setDetails] = React.useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })


    const handleSignUp = (e) => {
        e.preventDefault();
        if (details.password !== details.confirm_password) 
        throw new Error('Passwords do not match') 
        createNewAccount(details.username, details.email, details.password)
    }

    return (
        <Form onSubmit={handleSignUp}>
            <FormHeader>
                Please sign up!
            </FormHeader>
            <FormWrapper>
                <Input value={details.username} onChange={(e) => setDetails(details => {
                    return {
                        ...details,
                        username: e.target.value
                    }
                })} type="text" placeholder="Username" />
                <Input value={details.email} onChange={(e) => setDetails(details => {
                    return {
                        ...details,
                        email: e.target.value
                    }
                })} type="email" placeholder="Email" />
                <Input value={details.password} onChange={(e) => setDetails(details => {
                    return {
                        ...details,
                        password: e.target.value
                    }
                })} type="password" placeholder="Password" />
                <Input type="password" onChange={(e) => setDetails(details => {
                    return {
                        ...details,
                        confirm_password: e.target.value
                    }
                })} placeholder="Confirm Password" />
                <FormWrapper>
                    <ModalButton type="submit">Sign up</ModalButton>
                    <SwitchSignInUp onClick={() => setShowSignUp(prevState => !prevState)}>Click here to Sign In.</SwitchSignInUp>
                </FormWrapper>
            </FormWrapper>
        </Form>


    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const FormHeader = styled.h2`
    font-size: 1rem;
    color: white;
    margin: 0;
`

const FormWrapper = styled.div`
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Input = styled.input`
    margin: 0.5rem;

`
const ModalButton = styled.button`
margin-bottom: 1rem;
cursor:pointer;

`
const SwitchSignInUp = styled.span`
cursor: pointer;
color: #4b70e2;
`
