import styled from "styled-components";

// MainPage component
const Betterseller = () => {
  return (
    <Container>
      <LeftBox>
        <p className="tagline">Best Seller</p>
        <h2>
          Dreamegg Sleep Lite <br />
          D11 Max
        </h2>
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
            <h3>
              30-Hours Continuous <br />
              Looping And Soothing
            </h3>
          </Feature>
          <Feature>
            <img
              src="https://dreamegg.com/cdn/shop/files/Frame_3.svg?v=1713338308&width=750"
              alt="Portable Icon"
            />
            <h3>
              Portable and Fit in Diaper <br />
              Bag or Backpack
            </h3>
          </Feature>
          <Feature>
            <img
              src="https://dreamegg.com/cdn/shop/files/Frame_4.svg?v=1713338321&width=750"
              alt="Battery Icon"
            />
            <h3>
              USB C + 1800mah Battery <br />
              Rechargeable
            </h3>
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
  height: 80vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.7rem;
  background-color: #f4f4f4;
  color: #000;

  .tagline {
    font-size: 1.2rem;
    font-weight: bold;
    color: orange;
    margin-bottom: 0.5rem;
    padding: 1rem 0 0 5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    margin: 0;
    line-height: 1.3;
    padding: 0 0 0 5rem;
  }
`;

const Underline = styled.div`
  width: 80px;
  height: 2px;
  background-color: #ff8040;
  margin: 0.8rem 5rem;
  border-radius: 2px;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 1rem;
  padding: 1.5rem 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  justify-content: center;
  text-align: left;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  h3 {
    font-size: 0.9rem;
    color: #000;
    font-weight: normal;
    margin: 0;
    line-height: 1.2;
  }
`;

const ShopNowButton = styled.button`
  margin-top: 1rem;
  padding: 6px 20px;
  background-color: #ff8040;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: fit-content;
  margin-left: 80px; /* Pushes the button to the right */
  display: block; /* Ensures block layout for margin auto to work */

  &:hover {
    background-color: #e67336;
    transform: scale(1.05);
  }
`;

const RightBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
