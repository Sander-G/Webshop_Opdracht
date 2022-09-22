
import { React, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';


import styled from 'styled-components'
import { toggleModal } from '../../features/displayReducer'
import { SignIn, SignUp } from './Form/Form'




export default function Modal() {
    const closeBtnRef = useRef(null);
    const containerRef = useRef(null);
    const dispatch = useDispatch();
    const [showSignUp, setShowSignUp] = useState(false);

    const handleToggle = (e) => {
        if (e.target === closeBtnRef.current || e.target === containerRef.current) {
            dispatch(toggleModal())
        }
    };

    return (
        <Container ref={containerRef} onClick={handleToggle}>
            <ModalWrapper>
                <CloseButton ref={closeBtnRef} onClick={handleToggle}>X</CloseButton>

                {showSignUp ? <SignIn setShowSignUp={setShowSignUp} /> :
                    <SignUp setShowSignUp={setShowSignUp} />}

            </ModalWrapper>
        </Container>
    )
}


// Styled Components
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
`;

const ModalWrapper = styled.div`
    color: black;
    display: flex;
    padding: 2rem;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
    
`;

const CloseButton = styled.button`
    align-self: flex-end;
    height: 1.5rem;
    width: 1.5rem;
    
`;

