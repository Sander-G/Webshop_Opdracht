// Firebase
import { auth } from "../../utils/firebase"
import { createUserWithEmailAndPassword } from "../../utils/firebase/auth"

// wachtwoord validatie
const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
        if (password !== confirmPassword) {
            isValid = false
            setError('Passwords do not match!')
        }
    }
    return isValid
};

// nieuwe user registreren (als validatePassword true is)
const register = e => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user)
            })
            .catch(err => setError(err.message))
    };
    setEmail('')
    setPassword('')
    setConfirmPassword('')
};

return (
    <>
        <h1> Register </h1>
            <form onSubmit={register} name="registrationForm">
                <input type="email" value={email} placeholder="Enter your Email"
                    onChange={e => setEmail(e.target.value)} required />
                <input type="password" value={password} placeholder="Enter your Password"
                    onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Register!</button>
            </form>
            
        <span> Already registered?
        <Link to="../../pages/Login/Login">Login!</Link>
        </span>
    </>

)

export default register;