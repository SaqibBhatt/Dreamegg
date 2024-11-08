import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import ProductImage from "../img/main-page.jpg";

// MainPage component
const MainPage = () => {
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
        <Container>
            {/* Rest Well */}
            <Section className="rest-well">
                <BackgroundImage>
                    <TextContent>
                        <h2>Rest Well</h2>
                        <p>Wake up refreshed with Dreamegg Sunrise 1 – the gentle way to start your day. Customize your sleep routine with soothing sounds, a simulated sunrise, and a dimmable night light for a perfect night’s rest.</p>
                        <ButtonContainer>
                            <StyledButton><Link to="/">Shop Now</Link></StyledButton>
                            <StyledButton onClick={showModal}><Link to="/">Watch Video</Link></StyledButton>
                        </ButtonContainer>
                    </TextContent>
                </BackgroundImage>
            </Section>

            {/* Modal for video */}
            {isModalVisible && (
                <ModalOverlay>
                    <ModalContent>
                        <ReactPlayer url="https://www.youtube.com/watch?v=J2Lv0UZ4vbs&t=1s" controls />
                        <CloseButton onClick={handleCancel}>Close</CloseButton>
                    </ModalContent>
                </ModalOverlay>
            )}

            {/* Get Better Sleep */}
            <Section className="get-better-sleep">
                <h2>Get Better Sleep</h2>
                <ProductList>
                        <ProductCard>
                            <img src="" alt="" />
                            <div>
                                <p>For Adults</p>
                                <h3><Link to="/">Sunrise 1</Link></h3>
                                <Rating>
                                    <span>★★★★☆</span>
                                    <span>1 review</span>
                                </Rating>
                                <Price>$89.99</Price>
                                <StyledButton><a href="/">Shop Now</a></StyledButton>
                            </div>
                            <div>
                                <p>For Kids</p>
                                <h3><Link to="/">Sleep Lite 1</Link></h3>
                                <Rating>
                                    <span>★★★★☆</span>
                                    <span>30 review</span>
                                </Rating>
                                <Price>$89.99</Price>
                                <StyledButton><a href="/">Shop Now</a></StyledButton>
                            </div>
                            <div>
                                <p>For Kids</p>
                                <h3><Link to="/">Sleep Lite 1 D11 Max</Link></h3>
                                <Rating>
                                    <span>★★★★☆</span>
                                    <span>1 review</span>
                                </Rating>
                                <Price>$35.99</Price>
                                <StyledButton><a href="/">Shop Now</a></StyledButton>
                            </div>
                            <div>
                                <p>For Adults</p>
                                <h3><Link to="/">Sleep Lite D11</Link></h3>
                                <Rating>
                                    <span>★★★★☆</span>
                                    <span>329 review</span>
                                </Rating>
                                <Price>$39.99</Price>
                                <StyledButton><a href="/">Shop Now</a></StyledButton>
                            </div>
                        </ProductCard>
                </ProductList>
                <StyledButton><a href="/">View All</a></StyledButton>
            </Section>

            {/* Dreamegg Sleep Lite D11 Max */}
            <Section className="dreamegg-sleep">
                <h2>Dreamegg Sleep Lite D11 Max</h2>
                <p>Best Seller</p>
                <ProductFeatures>
                    {["21 Soothing Sounds", "30-Hours Continuous Looping", "Portable and Fit in Diaper Bag", "USB C + 1800mah Battery"].map((feature, idx) => (
                        <Feature key={idx}>
                            <img src="" alt="" />
                            <h3>{feature}</h3>
                        </Feature>
                    ))}
                </ProductFeatures>
                <StyledButton><a href="/">Shop Now</a></StyledButton>
            </Section>

            {/* Testimonial */}
            <Section className="testimonial">
                <blockquote>“Dreamegg sound machines are your dream machines to enhance your sleep experience. Since 2016, we have helped over five million happy customers (and most of them are babies) sleep well with sweet dreams every night."</blockquote>
                <Author>- Robin Sunny, Product Manager</Author>
            </Section>

            {/* Popular Product */}
            <Section className="popular-product">
                <h2>Popular Product</h2>
                <PopularProducts>
                    {["Sunrise 1", "Sleep Lite 1"].map((product, idx) => (
                        <ProductCard key={idx}>
                            <h3>{product}</h3>
                            <ul>
                                <li>Alarm Clock</li>
                                <li>Nine Night Light</li>
                                <li>24 HiFi & Non-Looping Sounds</li>
                                <li>29 Soothing Sounds</li>
                            </ul>
                            <Price>$35.99</Price>
                            <StyledButton><Link to="/">Shop Now</Link></StyledButton>
                        </ProductCard>
                    ))}
                </PopularProducts>
            </Section>

            {/* Experts and Customers Love Dreamegg */}
            <Section className="love-dreamegg">
                <h2>Experts and Customers Love Dreamegg</h2>
                <ImageGrid>
                    {[...Array(6)].map((_, idx) => (
                        <ImageWrapper key={idx}><img src="" alt="" /></ImageWrapper>
                    ))}
                </ImageGrid>
            </Section>
        </Container>
    );
};

export default MainPage;

// Styled Components
const Container = styled.div``;
const Section = styled.section`
    margin: 20px 0;
`;
const BackgroundImage = styled.div`
    background-image: url(${ProductImage});
    background-size: cover;
    background-position: center;
    padding: 20px;
`;
const TextContent = styled.div`
    color: #333;
    h2 { font-size: 2em; }
    p { font-size: 1.1em; }
`;
const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
`;
const StyledButton = styled(Button)`
    background-color: #ff7f50;
    color: white;
    border: none;
    &:hover { background-color: #e67e22; }
`;
const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0, 0, 0, 0.7);
`;
const ModalContent = styled.div`
    background: white;
    padding: 20px;
    width: 80%;
    max-width: 600px;
`;
const CloseButton = styled.button`
    background: #ff7f50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    &:hover { background: #e67e22; }
`;
const ProductList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
const ProductCard = styled.li`
    border: 1px solid #ddd;
    padding: 10px;
    width: 200px;
    img { width: 100%; height: auto; }
    p, h3 { margin: 10px 0; }
`;
const Rating = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Price = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    color: #ff7f50;
`;
const ProductFeatures = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
`;
const Feature = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Author = styled.p`
    font-style: italic;
    color: #888;
`;
const PopularProducts = styled.div`
    display: flex;
    gap: 20px;
`;
const ImageGrid = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;
const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    background: #f5f5f5;
    img { width: 100%; height: 100%; object-fit: cover; }
`;
