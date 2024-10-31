import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Input } from "antd";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import Mainlogo from '../img/main-logo.jpg';
import styled from 'styled-components';

const { Search } = Input;

const Pagenavbar = () => {
    return (
        <NavbarContainer>
            <NavbarRow align="middle" justify="space-between">
                <Col>
                    <NavList>
                        <li>Adults</li>
                        <li>Baby & Kids</li>
                        <li>Shop All</li>
                        <li>Contact Us</li>
                        <li>Extend Warranty</li>
                    </NavList>
                </Col>
                <Col>
                    <LogoLink to='/' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={Mainlogo} alt="Main-logo" />
                    </LogoLink>
                </Col>
                <Col>
                    <NavList>
                        <li>How to use</li>
                        <li>
                            <SearchBar
                                placeholder="Search..."
                                allowClear
                                enterButton={<SearchOutlined />}
                                size="large"
                            />
                        </li>
                        <li><ShoppingCartOutlined className="icon" /></li>
                        {/* <li><User Outlined className="icon" /></li> */}
                    </NavList>
                </Col>
            </NavbarRow>
        </NavbarContainer>
    );
};

export default Pagenavbar;

// Styled components
const NavbarContainer = styled.div`
    padding: 20px 50px;
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;
`;

const NavbarRow = styled(Row)`
    align-items: center;
`;

const NavList = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        cursor: pointer;
        font-size: 20px;
        color: #595959;
    }

    .icon {
        font-size: 20px;
        color: #595959;
        cursor: pointer;
    }
`;

const LogoLink = styled(Link)`
    img {
        height: 80px;  /* Adjust height to make it bigger */
        max-width: 100%; /* Ensure responsiveness */
    }
`;

const SearchBar = styled(Search)`
    border-radius: 20px;
    max-width: 200px;
`;