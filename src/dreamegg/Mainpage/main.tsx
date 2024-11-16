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
            {/* Rest Well Section */}
            <Section className="rest-well">
                <BackgroundImage>
                    <TextContent>
                        <h2>Rest Well</h2>
                        <p>
                            Wake up refreshed with Dreamegg Sunrise 1 – the gentle way to start
                            your day. Customize your sleep routine with soothing sounds, a
                            simulated sunrise, and a dimmable night light for a perfect night’s
                            rest.
                        </p>
                        <ButtonContainer>
                            <StyledButton>
                                <Link to="/">Shop Now</Link>
                            </StyledButton>
                            <StyledButton onClick={showModal}>
                                Watch Video
                            </StyledButton>
                        </ButtonContainer>
                    </TextContent>
                </BackgroundImage>
                {/* Video Modal */}
                {isModalVisible && (
                    <ModalOverlay>
                        <ModalContent>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=J2Lv0UZ4vbs&t=1s"
                                controls
                            />
                            <CloseButton onClick={handleCancel}>Close</CloseButton>
                        </ModalContent>
                    </ModalOverlay>
                )}
            </Section>
            {/* Get Better Sleep Section */}
            <Section className="get-better-sleep">
                <h2>Get Better Sleep</h2>
                <ProductList>
                    <ProductCard>
                        <img src={ProductImage} alt="Sunrise 1" />
                        <p>For Adults</p>
                        <h3>
                            <Link to="/">Sunrise 1</Link>
                        </h3>
                        <Rating>
                            <span>★★★★☆</span>
                            <span>1 review</span>
                        </Rating>
                        <Price>
                            $89.99 <del>$99.99</del>
                        </Price>
                        <StyledButton>
                            <a href="/">Shop Now</a>
                        </StyledButton>
                    </ProductCard>
                    <ProductCard>
                        <img src={ProductImage} alt="Speed Lite 1" />
                        <p>For Kids</p>
                        <h3>
                            <Link to="/">Speed Lite 1</Link>
                        </h3>
                        <Rating>
                            <span>★★★★☆</span>
                            <span>30 reviews</span>
                        </Rating>
                        <Price>
                            $35.99
                        </Price>
                        <StyledButton>
                            <a href="/">Shop Now</a>
                        </StyledButton>
                    </ProductCard>
                    <ProductCard>
                        <img src={ProductImage} alt="Sleep Lite D11 Max" />
                        <p>For Kids</p>
                        <h3>
                            <Link to="/">Sleep Lite D11 Max</Link>
                        </h3>
                        <Rating>
                            <span>★★★★☆</span>
                            <span>329 reviews</span>
                        </Rating>
                        <Price>
                            $39.99
                        </Price>
                        <StyledButton>
                            <a href="/">Shop Now</a>
                        </StyledButton>
                    </ProductCard>
                    <ProductCard>
                        <img src={ProductImage} alt="Sleep Lite D11" />
                        <p>For Kids</p>
                        <h3>
                            <Link to="/">Speed Lite D11</Link>
                        </h3>
                        <Rating>
                            <span>★★★★☆</span>
                            <span>75 reviews</span>
                        </Rating>
                        <Price>
                            $35.99
                        </Price>
                        <StyledButton>
                            <a href="/">Shop Now</a>
                        </StyledButton>
                    </ProductCard>
                </ProductList>;
                <StyledButton>
                    <a href="/">View All</a>
                </StyledButton>
            </Section>

            {/* Dreamegg Sleep Lite Section */}
            <Section className="dreamegg-sleep">
                <h2>Dreamegg Sleep Lite D11 Max</h2>
                <p>Best Seller</p>
                <ProductFeatures>
                    {[
                        "21 Soothing Sounds",
                        "30-Hours Continuous Looping",
                        "Portable and Fit in Diaper Bag",
                        "USB C + 1800mah Battery",
                    ].map((feature, idx) => (
                        <Feature key={idx}>
                            <img src="" alt="" />
                            <h3>{feature}</h3>
                        </Feature>
                    ))}
                </ProductFeatures>
                <StyledButton>
                    <a href="/">Shop Now</a>
                </StyledButton>
            </Section>

            {/* Testimonial Section */}
            <Section className="testimonial">
                <blockquote>
                    “Dreamegg sound machines are your dream machines to enhance your sleep
                    experience. Since 2016, we have helped over five million happy
                    customers (and most of them are babies) sleep well with sweet dreams
                    every night."
                </blockquote>
                <Author>- Robin Sunny, Product Manager</Author>
            </Section>

            {/* Popular Products Section */}
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
                            <StyledButton>
                                <Link to="/">Shop Now</Link>
                            </StyledButton>
                        </ProductCard>
                    ))}
                </PopularProducts>
            </Section>

            {/* Love Dreamegg Section */}
            <Section className="love-dreamegg">
                <h2>Experts and Customers Love Dreamegg</h2>
                <ImageGrid>
                    {[...Array(6)].map((_, idx) => (
                        <ImageWrapper key={idx}>
                            <img src="" alt="" />
                        </ImageWrapper>
                    ))}
                </ImageGrid>
            </Section>
        </Container>
    );
};

export default MainPage;

// Styled Components
const Container = styled.div`
  padding: 0;
`;
const Section = styled.section`
  margin: 0;
`;
const BackgroundImage = styled.div`
  background-image: url(${ProductImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 195px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding 
`;

const TextContent = styled.div`
  color: #333;
  text-align: center;
  max-width: 600px;

  h2 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  p {
    font-size: 1.2em;
    margin: 0.5em 0;
    line-height: 1.5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  &:hover {
    background: #e67e22;
  }
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 0;
  margin: 20px 0;
  list-style: none;
`;

const ProductCard = styled.li`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  p {
    margin: 10px 0;
    color: #666;
    font-size: 0.9em;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.2em;
    color: #333;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 8px 0;

  span:first-child {
    color: #ffb400;
    font-size: 1.2em;
  }

  span:last-child {
    color: #888;
    font-size: 0.9em;
  }
`;

const Price = styled.div`
  font-size: 1.4em;
  font-weight: bold;
  color: #ff7f50;
  margin: 10px 0;

  del {
    color: #aaa;
    font-size: 0.9em;
    margin-left: 5px;
  }
`;

const StyledButton = styled(Button)`
  background-color: #ff7f50;
  color: white;
  border-radius: 20px;
  border: none;
  padding: 10px 20px;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
