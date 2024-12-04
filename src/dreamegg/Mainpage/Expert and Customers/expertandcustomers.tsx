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
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Customer 1"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Customer 2"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Customer 3"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Customer 4"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Customer 5"
          />
        </ImageCard>
        <ImageCard>
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
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
  background-color: #f8f8f8;
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
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
