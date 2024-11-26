import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
// MainPage component
const Getbettersleep = () => {
  return (
    <>
      <Section>
        <Title>
          <h2>Get Better Sleep</h2>
        </Title>
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

    </>
  );
};

export default Getbettersleep;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f69059;
  font-weight: bold;
  font-size: 1.5rem; /* Adjust the font size as needed */

  &:hover {
    text-decoration: underline;
    color: #e07a45;
  }
`;

const Section = styled.section`
  text-align: center;
  padding: 100px 40px;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px; /* Add more space below the title */
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
  gap: 30px;
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

  span:first-child {
    color: #ffc520; /* Star color */
  }

  span:last-child {
    color: black; /* Text color */
  }
`;

const Price = styled.div`
  font-size: 1.2em;
  color: #333;

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
    font-weight: bold;
    color: black;
  }

  &:hover {
    border-color: #db6c30; /* Change border color on hover */
    background-color: transparent;
  }
`;


