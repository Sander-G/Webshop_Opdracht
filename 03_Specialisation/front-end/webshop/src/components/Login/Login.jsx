import { React, useState } from 'react';
import styled from 'styled-components';
import { app } from '../../utils/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export default function Login({ setLoggedIn }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.length === 0 || password.length === 0) return;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
           
                const user = userCredential.user;
                setEmail('');
                setPassword('');
                // = reset inputs
                console.log(user);
                console.log(userCredential);
                setLoggedIn(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });
    }
    return (
        <Container>
            <form onSubmit={handleLogin}>
                <h3>Login here:</h3>
                <input type="email" name="email" placeholder="Your Email" 
                id="email" autoComplete="username" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Your Password"
                id="password" autoComplete="current-password" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login!</button>

            </form>

        </Container>
    )
};






const Container = styled.div`
  width: 100%;
  padding-top: 7rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;


