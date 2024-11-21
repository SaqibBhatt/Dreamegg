import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
// MainPage component
const Betterseller = () => {
    return (
        <>
            <SleepSection>
                <ContextContainer>
                    <p className="tagline">Best Seller</p>
                    <h2>Dreamegg Sleep Lite D11 Max</h2>
                    <Underline />
                    <ProductFeatures>
                        <Feature>
                            <img
                                src="https://dreamegg.com/cdn/shop/files/Frame_1.svg?v=1713338267&width=750"
                                alt="Soothing Sounds Icon"
                            />
                            <h3>21 Soothing Sounds</h3>
                        </Feature>
                        <Feature>
                            <img
                                src="https://dreamegg.com/cdn/shop/files/Frame_2.svg?v=1713338287&width=750"
                                alt="Continuous Looping Icon"
                            />
                            <h3>30-Hours Continuous Looping and Soothing</h3>
                        </Feature>
                        <Feature>
                            <img
                                src="https://dreamegg.com/cdn/shop/files/Frame_3.svg?v=1713338308&width=750"
                                alt="Portable Icon"
                            />
                            <h3>Portable and Fit in Diaper Bag or Backpack</h3>
                        </Feature>
                        <Feature>
                            <img
                                src="https://dreamegg.com/cdn/shop/files/Frame_4.svg?v=1713338321&width=750"
                                alt="Battery Icon"
                            />
                            <h3>USB C + 1800mah Battery Rechargeable</h3>
                        </Feature>
                    </ProductFeatures>
                    <ShopNowButton>Shop Now</ShopNowButton>
                </ContextContainer>

                <ImageContainer>
                    <img
                        src="https://dreamegg.com/cdn/shop/files/D11_MAX_2.jpg?v=1717408963&width=750"
                        alt="Dreamegg Sleep Lite D11 Max"
                    />
                </ImageContainer>
            </SleepSection>
        </>
    );
};

export default Betterseller;

const Underline = styled.div`
  width: 100px;
  height: 3px;
  background-color: #ff8040;
  margin: 1rem 0;
  border-radius: 3px;
`;

const SleepSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 76vh;
  background-color: #f4f4f4;
  padding: 3rem 5%;
  box-sizing: border-box;
  gap: 2rem; /* Add spacing between the sections */
`;

const ContextContainer = styled.div`
  flex: 1; /* Take equal space */
  background-color: #f4f4f4;
  padding: 2rem;
  box-sizing: border-box;

  .tagline {
    color: #ff8040;
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: bold;
    color: #222;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
`;

const ProductFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;

  & > div {
    flex: 1 1 calc(50% - 1rem);
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  h3 {
    font-size: 1.1rem;
    color: #333;
    margin: 0;
  }
`;

const ShopNowButton = styled.button`
  margin-top: 2rem;
  padding: 12px 60px;
  background-color: #ff8040;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e67336;
  }
`;

const ImageContainer = styled.div`
  flex: 1; /* Take equal space */
  display: flex;
  justify-content: flex-end; /* Aligns the image to the right */
  align-items: center; /* Centers the image vertically */
  padding-left: 2rem; /* Adds space between the content and image */
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    max-width: 500px; /* Limit image width if needed */
    border-radius: 8px;
    object-fit: cover; /* Ensures the image covers its container proportionally */
  }
`;
