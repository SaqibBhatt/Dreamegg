import React from "react";
import styled from "styled-components";

const UserAdvantage = () => {
    const advantages = [
        {
            img: "https://dreamegg.com/cdn/shop/files/fast.svg?v=1713520843&width=400", // Replace with the actual image path
            title: "Fast, Free Shipping",
        },
        {
            img: "https://dreamegg.com/cdn/shop/files/money.svg?v=1713520860&width=400", // Replace with the actual image path
            title: "30-Day Money-Back Guarantee",
        },
        {
            img: "https://dreamegg.com/cdn/shop/files/free.svg?v=1713520877&width=400", // Replace with the actual image path
            title: "Hassle-Free Warranty",
        },
        {
            img: "https://dreamegg.com/cdn/shop/files/customer.svg?v=1713520889&width=400", // Replace with the actual image path
            title: "Lifetime Customer Support",
        },
    ];

    return (
        <Container>
            <AdvantageList>
                {advantages.map((advantage, index) => (
                    <AdvantageItem key={index}>
                        <Icon src={advantage.img} alt={advantage.title} />
                        <Title>{advantage.title}</Title>
                    </AdvantageItem>
                ))}
            </AdvantageList>
        </Container>
    );
};

export default UserAdvantage;

// Styled Components
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    background-color: #fff; /* Optional */
`;

const AdvantageList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 80%; /* Adjust to your preferred width */
`;

const AdvantageItem = styled.li`
    display: flex;
    align-items: center;
    text-align: left;
    flex: 1;
    padding: 0 1rem;
    border-right: 1px solid #ccc;

    &:last-child {
        border-right: none;
    }
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    object-fit: contain;
`;

const Title = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    margin: 0;
`;
