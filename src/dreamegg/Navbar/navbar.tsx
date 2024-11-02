// Pagenavbar.js
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
                        <li><Link to="/">Adults</Link></li>
                        <li><Link to="/">Baby & Kids</Link></li>
                        <li><Link to="/">Shop All</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Extend Warranty</Link></li>
                    </NavList>
                </Col>
                <Col>
                    <LogoLink to='/'>
                        <img src={Mainlogo} alt="Main-logo" />
                    </LogoLink>
                </Col>
                <Col>
                    <NavList>
                        <li><Link to="/">How to use</Link></li>
                        <li>
                            <SearchBar
                                placeholder="Search..."
                                allowClear
                                enterButton={<SearchOutlined />}
                                size="large"
                            />
                        </li>
                        <li><ShoppingCartOutlined className="icon" /></li>
                        <li><UserOutlined className="icon" /></li>
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
    margin: 0;
`;

const NavbarRow = styled(Row)`
    align-items: center;
`;

const NavList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        color: #595959;

        a {
            color: inherit;
            text-decoration: none;
            &:hover {
                color: #ff7f50;
            }
        }
    }

    .icon {
        font-size: 20px;
        color: #595959;
        cursor: pointer;
    }
`;

const LogoLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 60px;  /* Adjust height to make it bigger */
        max-width: 100%; /* Ensure responsiveness */
    }
`;

const SearchBar = styled(Search)`
    border-radius: 20px;
    max-width: 200px;
`;
