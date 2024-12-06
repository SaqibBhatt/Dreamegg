import styled from "styled-components";

const ExpertandCustomers = () => {
  return (
    <Container>
      <SectionTitle>
        <h2>Experts and Customers Love Dreamegg</h2>
      </SectionTitle>
      <ImageGrid>
        <ImageCard>
          <img
            src="https://dreamegg.com/cdn/shop/files/20240705-153855.jpg?v=1720165410&width=535" // Replace with actual image URL
            alt="Customer 1"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://dreamegg.com/cdn/shop/files/mom_s_choice.png?v=1717411252&width=535" // Replace with actual image URL
            alt="Customer 2"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://dreamegg.com/cdn/shop/files/Realhomes.png?v=1717411255&width=535" // Replace with actual image URL
            alt="Customer 3"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://dreamegg.com/cdn/shop/files/HGTV_cc5522e0-0c7b-4f44-8495-17da2aa09eba.png?v=1717411249&width=535" // Replace with actual image URL
            alt="Customer 4"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://dreamegg.com/cdn/shop/files/DAILY-MAIL.png?v=1713332061&width=535" // Replace with actual image URL
            alt="Customer 5"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://dreamegg.com/cdn/shop/files/reviewed1.png?v=1717411261&width=535" // Replace with actual image URL
            alt="Customer 6"
          />
        </ImageCard>
      </ImageGrid>
    </Container>
  );
};

export default ExpertandCustomers;

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

const SectionTitle = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  justify-content: center;
`;

const ImageCard = styled.div`
  background: transparent;
  padding: 1rem;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
