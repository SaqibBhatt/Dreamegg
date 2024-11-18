// Import necessary modules
import { useState } from "react";
import { Button, Row, Col, Modal } from "antd";
import { Link } from "react-router-dom";
import { VscTriangleRight } from "react-icons/vsc";
import ReactPlayer from "react-player";
import styled, { css } from "styled-components";
import FeatureIcon1 from "../img/icon1.png"; // Placeholder paths for icons
import FeatureIcon2 from "../img/icon2.png";
import FeatureIcon3 from "../img/icon3.png";
import FeatureIcon4 from "../img/icon4.png";
import ProductImage from "../img/main-page.jpg";

// MainPage component
const MainPage = () => {
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
      {/* second */}
      <Section>
        <h2>Get Better Sleep</h2>
        <Underline />
        <ProductList>
          <ProductCard>
            <ProductImageWrapper>
              <img
                src="https://dreamegg.com/cdn/shop/files/D26_1_5a975e1a-c382-4df8-bf16-a1a15804f6aa.jpg?v=1722411667&width=360"
                alt="Sunrise 1"
              />
            </ProductImageWrapper>
            <p>For Adults</p>
            <h3>
              <StyledLink to="/">Sunrise 1</StyledLink>
            </h3>
            <Rating>
              <span>★★★★★</span>
              <span>1 review</span>
            </Rating>
            <Price>$89.99</Price>
            <ShopButton>
              <a href="/">Shop Now</a>
            </ShopButton>
          </ProductCard>
          <ProductCard>
            <ProductImageWrapper>
              <img
                src="https://dreamegg.com/cdn/shop/files/Sleep_lite_1_2_a11eecfb-acde-43c3-884e-2fc189acab71.png?v=1722251597&width=360"
                alt="Sunrise 1"
              />
            </ProductImageWrapper>
            <p>For Kids</p>
            <h3>
              <StyledLink to="/">Sleep Lite 1</StyledLink>
            </h3>
            <Rating>
              <span>★★★★★</span>
              <span>30 review</span>
            </Rating>
            <Price>$35.99</Price>
            <ShopButton>
              <a href="/">Shop Now</a>
            </ShopButton>
          </ProductCard>
          <ProductCard>
            <ProductImageWrapper>
              <img
                src="https://dreamegg.com/cdn/shop/files/1_0dc67118-c27e-4327-bd56-27c762d6ecd2.png?v=1716888254&width=360"
                alt="Sunrise 1"
              />
            </ProductImageWrapper>
            <p>For Kids</p>
            <h3>
              <StyledLink to="/">Speed Lite D11 Max</StyledLink>
            </h3>
            <Rating>
              <span>★★★★★</span>
              <span>329 review</span>
            </Rating>
            <Price>$39.99</Price>
            <ShopButton>
              <a href="/">Shop Now</a>
            </ShopButton>
          </ProductCard>
          <ProductCard>
            <ProductImageWrapper>
              <img
                src="https://dreamegg.com/cdn/shop/files/2_e2b584e5-796a-4c18-b7fb-cd67114f7074.png?v=1716802069&width=360"
                alt="Sunrise 1"
              />
            </ProductImageWrapper>
            <p>For Kids</p>
            <h3>
              <StyledLink to="/">Sleep Lite D11</StyledLink>
            </h3>
            <Rating>
              <span>★★★★★</span>
              <span>75 review</span>
            </Rating>
            <Price>$35.99</Price>
            <ShopButton>
              <a href="/">Shop Now</a>
            </ShopButton>
          </ProductCard>
        </ProductList>
        <ViewAllButton><a href="/">View All</a></ViewAllButton>
      </Section>

      <Section className="dreamegg-sleep">
        <Content>
          <TextSection>
            <p className="tagline">Best Seller</p>
            <h2>Dreamegg Sleep Lite D11 Max</h2>
            <Underline />
            <ProductFeatures>
              <Feature>
                <img
                  src="https://dreamegg.com/cdn/shop/files/SUNRISE1_4.png?v=1722249917&width=713"
                  alt="Soothing Sounds Icon"
                />
                <h3>21 Soothing Sounds</h3>
              </Feature>
              <Feature>
                <img
                  src="https://dreamegg.com/cdn/shop/files/Frame_2.svg?v=1713338287&width=750"
                  alt="Continuous Looping Icon"
                />
                <h3>30-Hours Continuous Looping</h3>
              </Feature>
              <Feature>
                <img
                  src="https://dreamegg.com/cdn/shop/files/Frame_3.svg?v=1713338308&width=750"
                  alt="Portable Icon"
                />
                <h3>Portable and Fit in Diaper Bag</h3>
              </Feature>
              <Feature>
                <img
                  src="https://dreamegg.com/cdn/shop/files/Frame_4.svg?v=1713338321&width=750"
                  alt="Battery Icon"
                />
                <h3>USB C + 1800mah Battery</h3>
              </Feature>
            </ProductFeatures>
            <StyledButton>
              <a href="/">Shop Now</a>
            </StyledButton>
          </TextSection>
          <ImageSection>
            <img
              src="https://dreamegg.com/cdn/shop/files/D11_MAX_2.jpg?v=1717408963&width=750"
              alt="Dreamegg Sleep Lite D11 Max"
            />
          </ImageSection>
        </Content>
      </Section>
    </>
  );
};

export default MainPage;

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


const Section = styled.section`
  text-align: center;
  padding: 20px;
`;

const Underline = styled.div`
  width: 150px;
  height: 3px;
  background-color: #f69059;
  margin: 0 auto 30px auto;
`;

const ProductList = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const ProductCard = styled.div`
  background: #fff;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  width: 250px;
`;

const ProductImageWrapper = styled.div`
  background-color: #fcf4eb;
  padding: 15px;
  border-radius: 30px;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const Rating = styled.div`
  font-size: 0.9em;
  color: #f9b233;
  margin: 10px 0;
`;

const Price = styled.div`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;

  del {
    color: #999;
  }
`;

const ShopButton = styled.button`
  display: block;
  margin: 10px auto;
  padding: 8px 75px;
  background-color: #f69059;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1em;

  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background-color: #e07a45;
  }
`;

const ViewAllButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 50px;
  background: transparent;
  color: black;
  border: 3px solid orange;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: transparent;
  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 20px;
`;

const TextSection = styled.div`
  flex: 1;

  .tagline {
    font-size: 0.9em;
    color: #ff7f50;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 2em;
    color: #333;
  }
`;

const ProductFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Feature = styled.div`
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
  }

  h3 {
    font-size: 1em;
    font-weight: 500;
  }
`;

const ImageSection = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`;
