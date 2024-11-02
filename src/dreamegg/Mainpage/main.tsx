// MainPage.js
import React from "react";
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductImage from "../img/main-page.jpg"; // Replace with the actual path to your image

const MainPage = () => {
    return (
        <MainContainer>
            <Overlay>
                <Row gutter={16} align="middle">
                    <Col xs={24} md={12}>
                        <TextContent>
                            <h1>Rest Well</h1>
                            <p>
                                Wake up refreshed with Dreamegg Sunrise 1 – the gentle way to start your day. Customize your sleep routine with soothing sounds, a simulated sunrise, and a dimmable night light for a perfect night’s rest.
                            </p>
                            <ButtonContainer>
                                <StyledButton type="primary">
                                    <Link to="/">Shop Now</Link>
                                </StyledButton>
                                <StyledButton type="default">Watch Video</StyledButton>
                            </ButtonContainer>
                        </TextContent>
                    </Col>
                </Row>
            </Overlay>
        </MainContainer>
    );
};

export default MainPage;

// Styled components
const MainContainer = styled.div`
    margin: 0; /* Remove any margin */
    padding: 0; /* Remove any padding */
    background-image: url(${ProductImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - 190px); /* Adjust height based on your navbar's height */
    display: flex;
    align-items: center;
    justify-content: center;
`;


// Semi-transparent overlay for text readability
const Overlay = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 40px;
    border-radius: 8px;
    max-width: 800px;
`;

// Text styling
const TextContent = styled.div`
    h1 {
        font-size: 2.5em;
        font-weight: bold;
        color: #333;
    }
    p {
        font-size: 1.1em;
        color: #595959;
        line-height: 1.6;
        margin-bottom: 20px;
    }
`;

// Button container with spacing
const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
`;

// Styled button with specific colors
const StyledButton = styled(Button)`
    &.ant-btn-primary {
        background-color: #ff7f50;
        border-color: #ff7f50;
        font-size: 16px;
    }
    &.ant-btn-default {
        border-color: #ff7f50;
        color: #ff7f50;
        font-size: 16px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;
