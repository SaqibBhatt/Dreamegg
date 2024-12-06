import styled from "styled-components";
import { useState } from "react";

const reviewsData = [
  {
    id: 1,
    image: "https://dreamegg.com/cdn/shop/files/Dreamegg.jpg?v=1717469062&width=750",
    review: "The Sound quality is absolutely amazing and there are so many different sounds to choose from I didn't know what oneto pick!",
    author: "@_mileyandme"
  },
  {
    id: 2,
    image: "https://dreamegg.com/cdn/shop/files/DG12.jpg?v=1717469084&width=750",
    review: "This Dreamegg is chargeable so I don't need to keep changing batteries which is perfect. There are 21 soothing sound to create an optional sleep environment",
    author: "@babybeans.journey"
  },
  {
    id: 3,
    image: "https://dreamegg.com/cdn/shop/files/DG18.jpg?v=1717469128&width=750",
    review: "Between the bow and that sweet little smile I just can't! She is too cute! The sound machine is great for baby travel",
    author: "@kendallmortez"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <Container>
      <SliderWrapper>
        <Slide>
          <ImageWrapper>
            <img
              src={reviewsData[currentIndex].image}
              alt={`Reviewer ${currentIndex + 1}`}
            />
          </ImageWrapper>
          <ReviewContent>
            <h2>{reviewsData[currentIndex].review}</h2>
            <p>{reviewsData[currentIndex].author}</p>
          </ReviewContent>
        </Slide>
        <Navigation>
          <button onClick={handlePrev}>{"<"}</button>
          <button onClick={handleNext}>{">"}</button>
        </Navigation>
      </SliderWrapper>
    </Container>
  );
};

export default Reviews;

// Styled Components
const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 800px;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  gap: 2rem;
`;

const ImageWrapper = styled.div`
  width: 300px; /* Larger image for emphasis */
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ReviewContent = styled.div`
  max-width: 400px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: #ff8040;
    font-style: italic;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    background-color: #ff8040;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e67336;
    }
  }
`;
