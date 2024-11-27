import styled from "styled-components";

const Popularproduct = () => {
  return (
    <Container>
      <SectionTitle>
        <h2>Popular Product</h2>
      </SectionTitle>
      <ProductWrapper>
        {/* First Product */}
        <ProductCard>
          <ImageWrapper>
            <img src="" alt="Sunrise 1" />
          </ImageWrapper>
          <ProductDetails>
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
            <PriceTag>$89.99</PriceTag>
            <ShopButton>
              <a href="#">Shop Now</a>
            </ShopButton>
          </ProductDetails>
        </ProductCard>

        {/* Second Product */}
        <ProductCard>
          <ProductDetails>
            <ProductTitle>
              <h1>Sleep Lite 1</h1>
              <Underline />
            </ProductTitle>
            <FeatureList>
              <li>19 Sounds to Calm Your Baby</li>
              <li>Non-slip, Quick Rotation For Hanging</li>
              <li>Rechargeable, Sleep Anywhere, Anytime</li>
            </FeatureList>
            <PriceTag>$35.99</PriceTag>
            <ShopButton>
              <a href="#">Shop Now</a>
            </ShopButton>
          </ProductDetails>
          <ImageWrapper>
            <img src="" alt="Sleep Lite 1" />
          </ImageWrapper>
        </ProductCard>
      </ProductWrapper>
    </Container>
  );
};

export default Popularproduct;

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: column; /* Allows stacking of products */
  }
`;

const ProductCard = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: contain;
  }
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled.div`
  h1 {
    font-size: 1.5rem;
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
  margin: 0.5rem 0;
  border-radius: 3px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
`;

const PriceTag = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
`;

const ShopButton = styled.div`
  margin-top: 1rem;

  a {
    display: inline-block;
    padding: 8px 16px;
    background-color: #ff8040;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e67336;
    }
  }
`;
