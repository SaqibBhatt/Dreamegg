// Import necessary modules
import { useState } from "react";
import { Button, Row, Col, Modal } from "antd";
import { Link } from "react-router-dom";
import { VscTriangleRight } from "react-icons/vsc";
import ReactPlayer from "react-player";
import styled, { css } from "styled-components";
import ProductImage from "../Rest Well/img/main-page.jpg";

// MainPage component
const Restwell = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <MainContainer isModalVisible={isModalVisible}>
                <Overlay>
                    <Row gutter={16} align="middle">
                        <Col xs={24} md={12}>
                            <TextContent>
                                <h1>Rest Well</h1>
                                <p>
                                    Wake up refreshed with Dreamegg Sunrise 1 – the gentle way to
                                    start your day. Customize your sleep routine with soothing
                                    sounds, a simulated sunrise, and a dimmable night light for a
                                    perfect night’s rest.
                                </p>
                                <ButtonContainer>
                                    <StyledButton>
                                        <Link to="/">Shop Now</Link>
                                    </StyledButton>
                                    <StyledButton onClick={showModal}>
                                        <IconWrapper>
                                            <VscTriangleRight />
                                        </IconWrapper>
                                        Watch Video
                                    </StyledButton>
                                </ButtonContainer>
                            </TextContent>
                        </Col>
                    </Row>
                </Overlay>

                <Modal
                    title="Sleepless Night?"
                    open={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    centered
                    width={800}
                    bodyStyle={{
                        padding: "0",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=J2Lv0UZ4vbs&t=1s"
                        width="100%"
                        controls
                    />
                </Modal>
            </MainContainer>
        </>
    );
};

export default Restwell;

// Styled components
interface MainContainerProps {
    isModalVisible: boolean;
}

const MainContainer = styled.div<MainContainerProps>`
    margin: 0;
    padding: 0;
    background-image: url(${ProductImage});
    background-size: cover;
    background-position: center;
    height: calc(100vh - 190px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  
    ${({ isModalVisible }) =>
        isModalVisible &&
        css`
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
      `}
  `;

const Overlay = styled.div`
    padding: 20px;
    max-width: 800px;
    position: relative;
    z-index: 2;
  `;

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

const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
  `;

const StyledButton = styled(Button)`
    padding: 10px 20px;
    background-color: #ff7f50;
    color: white;
    border-radius: 20px;
    border: none;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  
    &:hover {
      background-color: #e67e22;
    }
  
    a {
      text-decoration: none;
      color: inherit;
    }
  `;

const IconWrapper = styled.div`
    font-size: 1.2em;
    margin-right: 5px;
  `;

const StyledLink = styled(Link)`
    font-weight: bold;
    font-size: 0.8em; /* Adjust text size to medium (approx. 19px if 1em = 16px) */
    color: black;
    text-decoration: none; /* Remove default underline */
  
    &:hover {
      text-decoration: underline; /* Add underline on hover */
      text-decoration-color: black; /* Ensure the underline is black */
    }
  `;