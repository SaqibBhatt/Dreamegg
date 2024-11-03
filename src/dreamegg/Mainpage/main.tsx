import { useState } from "react";
import { Button, Row, Col, Modal } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductImage from "../img/main-page.jpg";
import { VscTriangleRight } from "react-icons/vsc";
import ReactPlayer from "react-player"; // Import ReactPlayer

const MainPage = () => {
    // State for modal visibility
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Function to open the modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Function to close the modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };

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
                                <ShopNowButton>
                                    <Link to="/">Shop Now</Link>
                                </ShopNowButton>
                                <WatchVideoButton onClick={showModal}>
                                    <IconWrapper>
                                        <VscTriangleRight />
                                    </IconWrapper>
                                    Watch Video
                                </WatchVideoButton>
                            </ButtonContainer>
                        </TextContent>
                    </Col>
                </Row>
            </Overlay>

            <Modal
                title="Sleepless Night?"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                centered
                width={800}
                bodyStyle={{ padding: 0 }} // Optional adjustment if needed
            >
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=J2Lv0UZ4vbs" // Ensure full URL
                    width="100%"
                    controls={true}
                />
            </Modal>
        </MainContainer>
    );
};

export default MainPage;

// Styled components
const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    background-image: url(${ProductImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - 190px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Overlay = styled.div`
    padding: 10px;
    max-width: 800px;
    position: absolute;
    left: 150px;
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

const ShopNowButton = styled(Button)`
    background-color: #ff7f50;
    border: 2px solid #ff7f50;
    color: white;
    font-size: 20px;
    padding: 20px 30px;
    border-radius: 25px;

    &:hover {
        background-color: #e67e22 !important;
        border: 2px solid #e67e22 !important;
        color: white !important;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const WatchVideoButton = styled(Button)`
    background-color: transparent;
    border: 2px dotted #ff7f50;
    color: black;
    font-size: 20px;
    padding: 20px 30px;
    border-radius: 25px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: transparent !important;
        border: 2px dotted #ff7f50 !important;
        color: black !important;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const IconWrapper = styled.span`
    color: #ff7f50;
    margin-right: 8px;
`;
