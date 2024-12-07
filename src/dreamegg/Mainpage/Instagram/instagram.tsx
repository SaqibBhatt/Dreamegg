import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Instagram = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://dreamegg.com/cdn/shop/files/insta1.png?v=1713347229",
        "https://dreamegg.com/cdn/shop/files/insta2.png?v=1713347253",
        "https://dreamegg.com/cdn/shop/files/insta5.png?v=1713347318",
        "https://dreamegg.com/cdn/shop/files/3_f3930d9b-bf93-4f74-8090-c240a90dfb2a.jpg?v=1716879559&width=710",
        "https://dreamegg.com/cdn/shop/files/homeanddababy_1.jpg?v=1716879559&width=710",
        "https://dreamegg.com/cdn/shop/files/emmii.alexandra.jpg?v=1716879559&width=710",
        "https://dreamegg.com/cdn/shop/files/stephsaav_4.jpg?v=1716879649&width=710",
        "https://dreamegg.com/cdn/shop/files/lua.and.mom.jpg?v=1716879649&width=710",
        "https://dreamegg.com/cdn/shop/files/stephsaav_2.jpg?v=1716879649&width=710"
    ];

    const visibleCount = 6; // Number of images visible at a time

    // Show the next group of images
    const handleNext = () => {
        setCurrentIndex((prev) => {
            const maxIndex = images.length - visibleCount;
            return prev < maxIndex ? prev + 1 : 0;
        });
    };

    // Show the previous group of images
    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const maxIndex = images.length - visibleCount;
            return prev > 0 ? prev - 1 : maxIndex;
        });
    };

    return (
        <InstagramContainer>
            <Header>
                <h2>@dreameggofficial</h2>
                <h1>Follow On Instagram</h1>
            </Header>
            <Carousel>
                <LeftButton onClick={handlePrev}>
                    <FaChevronLeft />
                </LeftButton>
                <ImageWrapper>
                    {images
                        .slice(currentIndex, currentIndex + visibleCount)
                        .map((image, index) => (
                            <ImageContainer key={index}>
                                <Image src={image} alt={`Instagram image ${index}`} />
                                <HoverOverlay>
                                    <InstagramLogo>
                                        <i className="fab fa-instagram"></i>
                                    </InstagramLogo>
                                </HoverOverlay>
                            </ImageContainer>
                        ))}
                </ImageWrapper>
                <RightButton onClick={handleNext}>
                    <FaChevronRight />
                </RightButton>
            </Carousel>
        </InstagramContainer>
    );
};

export default Instagram;

// Styled Components
const InstagramContainer = styled.div`
    text-align: center;
    background: #fff;
    margin: 8.5rem;
`;

const Header = styled.div`
    margin-bottom: 2rem;
    h2 {
        color: #f97316;
        font-weight: 400;
        font-size: 1.2rem;
    }
    h1 {
        font-size: 2rem;
        color: #333;
    }
`;

const Carousel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const NavButton = styled.button`
    background: transparent;
    color: black;
    border: 3px solid #989898; /* Border width */
    border-radius: 50%; /* Circular button */
    font-size: 1.5rem;
    width: 50px; /* Button size */
    height: 50px; /* Button size */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
`;

const LeftButton = styled(NavButton)`
    left: 10px; /* Adjust button position */
`;

const RightButton = styled(NavButton)`
    right: 10px; /* Adjust button position */
`;

const ImageWrapper = styled.div`
    display: flex;
    overflow: hidden;
    width: 80%;
`;

const ImageContainer = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 180px; /* Adjusted width */
    height: 300px; /* Adjusted height */
    margin: 0 10px; /* Gap between images */
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease-in-out;
    &:hover {
        opacity: 1;
    }
`;

const InstagramLogo = styled.div`
    font-size: 2rem;
    color: white;
`;
