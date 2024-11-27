import styled from "styled-components";

const ProductManager = () => {
  return (
    <Container>
      <ImageSection>
        <img 
          src="https://dreamegg.com/cdn/shop/files/coma.svg?v=1713519334&width=60" 
          alt="Quotation Mark" 
        />
      </ImageSection>
      <TextSection>
        <Quote>
          “Dreamegg sound machines are your dream machines to enhance your sleep
          experience. Since 2016, we have helped over five million happy
          customers (and most of them are babies) sleep well with sweet dreams
          every night."
        </Quote>
        <Author>Robin Sunny, Product Manager</Author>
      </TextSection>
    </Container>
  );
};

export default ProductManager;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
  justify-content: center;
  background-color: #f67e4b; /* Orange background */
  padding: 1.5rem;
  text-align: center;
  color: white;
`;

const ImageSection = styled.div`
  margin-bottom: 1rem; /* Slightly reduced margin below the image */

  img {
    width: 40px; /* Smaller image size */
    height: 40px; /* Maintain equal width and height */
  }
`;

const TextSection = styled.div`
  max-width: 600px; /* Restrict the text width for better readability */
  margin: 0 auto; /* Center the text container horizontally */
  text-align: center; /* Center-align the text */
`;

const Quote = styled.h2`
  font-size: 1.2rem; /* Slightly smaller font for the quote */
  font-weight: bold; /* Make the quote bold */
  line-height: 1.6; /* Adjusted line height for readability */
  color: white;
  margin: 0 auto; /* Center within the container */
  padding: 0 1rem; /* Add padding for small screens */
`;

const Author = styled.p`
  font-size: 0.9rem; /* Smaller font size for the author */
  font-weight: bold;
  color: white;
  opacity: 0.8; /* Slightly dimmed text for subtlety */
  margin-top: 1rem; /* Add gap between Quote and Author */
`;
