import styled from "styled-components";

// MainPage component
const Betterseller = () => {
  return (
    <Container>
      {/* Left Content Section */}
      <LeftBox>
        <p className="tagline">Best Seller</p>
        <h2>Dreamegg Sleep Lite D11 Max</h2>
        <Underline />
        <Features>
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
        </Features>
        <ShopNowButton>Shop Now</ShopNowButton>
      </LeftBox>

      {/* Right Image Section */}
      <RightBox>
        <img
          src="https://dreamegg.com/cdn/shop/files/D11_MAX_2.jpg?v=1717408963&width=750"
          alt="Dreamegg Sleep Lite D11 Max"
        />
      </RightBox>
    </Container>
  );
};

export default Betterseller;

// Styled Components
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh; /* Full viewport height */
  margin: 0; /* Remove any margin */
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;  /* Stack the sections on smaller screens */
    height: auto;
  }
`;

const LeftBox = styled.div`
  flex: 1; /* Ensures both sections take equal space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align to the left */
  padding: 2rem;
  background-color: #f4f4f4; /* Set black background */
  color: black; /* Text color white */
  height: 100%; /* Ensure equal height */
  box-sizing: border-box; /* Include padding in the width calculation */
`;

const RightBox = styled.div`
  flex: 1; /* Ensures both sections take equal space */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100%; /* Ensure equal height */
  box-sizing: border-box;

  img {
    width: 100%; /* Ensure full width */
    height: 100%; /* Match the height */
    object-fit: cover; /* Cover the area without distorting the image */
  }
`;

const Underline = styled.div`
  width: 100px;
  height: 3px;
  background-color: #ff8040;
  margin: 1rem 0;
  border-radius: 3px;
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  h3 {
    font-size: 1.1rem;
    color: #fff; /* White text on black background */
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
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e67336;
    transform: scale(1.05);
  }
`;
