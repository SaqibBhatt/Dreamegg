import styled from "styled-components";

const PopularProduct = () => {
  return (
    <Container>
      <SectionTitle>
        <h2>Popular Product</h2>
      </SectionTitle>
      <ProductWrapper>
        {/* First Product */}
        <ProductCard>
          <ImageWrapper>
            <img
              src="https://dreamegg.com/cdn/shop/files/86c5f8dbb4427055ef085c2a748a6ef2.jpg?v=1725950458"
              alt="Sunrise 1"
            />
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
              <li>
                29 Soothing Sounds, White Noises, Natural Sounds, And Lullabies
              </li>
            </FeatureList>
            <PriceTag>$89.99</PriceTag>
            <ShopButton>
              <a href="#">Shop Now</a>
            </ShopButton>
          </ProductDetails>
        </ProductCard>

        {/* Second Product */}
        <ProductCard reverse>
          <ImageWrapper>
            <img
              src="https://dreamegg.com/cdn/shop/files/86c5f8dbb4427055ef085c2a748a6ef2_9c90c14b-9b56-4e1a-b702-598a29384994.jpg?v=1725950814"
              alt="Sleep Lite 1"
            />
          </ImageWrapper>
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
        </ProductCard>
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
  gap: 2rem; /* Adjusted the gap */

  @media (min-width: 768px) {
    gap: 3rem; /* Adjusted for larger screens */
  }
`;

const ProductCard = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 1rem; /* Reduced the gap between text and image */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem; /* Slightly larger gap for smaller screens */
  }
`;


const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`;

const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductTitle = styled.div`
  text-align: center;

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
  margin: 0.5rem 0 1rem 0;
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
    align-items: center;

    &::before {
      content: "✔";
      font-size: 0.8rem;
      color: #ff8040;
      margin-right: 0.5rem;
    }
  }
`;

const PriceTag = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
`;

const ShopButton = styled.div`
  margin-top: 1rem;

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
