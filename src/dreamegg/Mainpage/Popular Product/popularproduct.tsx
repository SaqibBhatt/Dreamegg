import styled from "styled-components";

const PopularProduct = () => {
  return (
    <Container>
      <SectionTitle>
        <h2>Popular Product</h2>
      </SectionTitle>
      <ProductWrapper>
        {/* First Product - Image on the right, text centered */}
        <FirstProductCard>
          <ImageWrapper>
            <img
              src="https://dreamegg.com/cdn/shop/files/86c5f8dbb4427055ef085c2a748a6ef2.jpg?v=1725950458"
              alt="Sunrise 1"
            />
          </ImageWrapper>
          <FirstProductDetails>
            <ProductTitle>
              <h1>Sunrise 1</h1>
              <Underline />
            </ProductTitle>
            <FeatureList>
              <li>Alarm Clock</li>
              <li>Nine Night Light</li>
              <li>24 HiFi & Non-Looping Sounds</li>
              <li>29 Soothing Sounds, White Noises, Natural Sounds, And Lullabies</li>
            </FeatureList>
            <PriceContainer>
              <PriceTag>$89.99</PriceTag>
              <ShopButtonWrapper>
                <ShopButton>
                  <a href="#">Shop Now</a>
                </ShopButton>
              </ShopButtonWrapper>
            </PriceContainer>
          </FirstProductDetails>
        </FirstProductCard>

        {/* Second Product - Image on the left, text centered */}
        <SecondProductCard>
          <SecondProductDetails>
            <ProductTitle>
              <h1>Sleep Lite 1</h1>
              <Underline />
            </ProductTitle>
            <FeatureList>
              <li>19 Sounds to Calm Your Baby</li>
              <li>Non-slip, Quick Rotation For Hanging</li>
              <li>Rechargeable, Sleep Anywhere, Anytime</li>
            </FeatureList>
            <PriceContainer>
              <PriceTag>$35.99</PriceTag>
              <ShopButtonWrapper>
                <ShopButton>
                  <a href="#">Shop Now</a>
                </ShopButton>
              </ShopButtonWrapper>
            </PriceContainer>
          </SecondProductDetails>
          <ImageWrapper>
            <img
              src="https://dreamegg.com/cdn/shop/files/86c5f8dbb4427055ef085c2a748a6ef2_9c90c14b-9b56-4e1a-b702-598a29384994.jpg?v=1725950814"
              alt="Sleep Lite 1"
            />
          </ImageWrapper>
        </SecondProductCard>
      </ProductWrapper>
    </Container>
  );
};

export default PopularProduct;

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #fff;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Adjust gap between product cards */
`;

const FirstProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Reduced gap between image and text */
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const SecondProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Reduced gap between image and text */
  width: 100%;
  padding-left: 8rem;
  padding-right: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 550px; /* Increased max-width for larger images */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`;

const FirstProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align text to the left */
  text-align: left;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const SecondProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align text to the left */
  text-align: left;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding-left: 0; /* Remove padding for smaller screens */
  }
`;

const ProductTitle = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    margin: 0;
    line-height: 1.2;
  }
`;

const Underline = styled.div`
  width: 80px;
  height: 3px;
  background-color: #ff8040;
  margin: 0.5rem auto 1rem auto;
  border-radius: 3px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &::before {
      content: "✔";
      font-size: 0.8rem;
      color: #ff8040;
      margin-right: 0.5rem;
    }
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center; /* Align price and button */
  gap: 1rem; /* Add some space between the price and the button */
  margin-top: 1rem;
`;

const PriceTag = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.25rem;
`;

const ShopButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start; /* Align the button to the left */
`;

const ShopButton = styled.div`
  margin-top: 0; /* Remove any margin to get the button close to the price */
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff8040;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 25px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e67336;
    }
  }
`;
