import React, { useState } from "react";
import styled from "styled-components";

const SubscriptionLetter = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubscribed(true); // Show the success message
    };

    return (
        <SubscriptionContainer>
            {!isSubscribed ? (
                <>
                    <Header>
                        <h2>Subscribe to Newsletter</h2>
                        <Underline />
                        <p>Sign up to get the latest news, deals, and more...</p>
                    </Header>
                    <FormContainer>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="emailInput" style={{ display: "none" }}>
                                Email Address
                            </label>
                            <Input
                                id="emailInput"
                                type="email"
                                placeholder="Enter your email address..."
                                required
                            />
                            <Button type="submit">Sign Up</Button>
                        </form>
                    </FormContainer>
                </>
            ) : (
                <MessageContainer aria-live="polite">
                    <h2>Thanks for Subscribing!</h2>
                    <p>Check your email for a confirmation message.</p>
                </MessageContainer>
            )}
        </SubscriptionContainer>
    );
};

export default SubscriptionLetter;

// Styled Components
const SubscriptionContainer = styled.div`
    text-align: center;
    background: #fcf4eb;
    padding: 5.5rem 1rem;

    @media (max-width: 768px) {
        padding: 4rem 1rem;
    }
`;

const Header = styled.div`
    margin-bottom: 1.5rem;

    h2 {
    font-size: 3rem; /* Smaller font size */
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: bold;
    text-align: center; /* Center align */
}

    p {
        font-size: 1.1rem;
        color: #666;
        margin-bottom: 1.5rem;
    }
`;

const Underline = styled.div`
  width: 100px;
  height: 3px;
  background-color: #ff8040;
  margin: 0.5rem auto 1rem auto;
  border-radius: 3px;
`;

const Input = styled.input`
flex: 1;
padding: 1rem 1rem; /* Adjusted padding for a balanced size */
width: 70%; /* Increased width for more space */
border: 1px solid #ccc;
border-right: none;
border-radius: 50px 0 0 50px;
font-size: 1rem;

&:focus {
    outline: none;
    border-color: #f69059;
}
`;

const Button = styled.button`
    padding: 0.2rem 1.5rem;
    background: #f69059;
    color: white;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 50px; /* Rounded right corners */
    box-shadow: none;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;

    &:hover {
        background: #e67a47;
    }

    &:focus {
        outline: none;
    }
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        width: 100%;
        max-width: 500px;
        background: white;
        border-radius: 50px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    form > button {
        margin-left: auto; /* Align button to the right */
    }
`;

const MessageContainer = styled.div`
    h2 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    p {
        font-size: 1rem;
        color: #666;
    }
`;
