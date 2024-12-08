import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

// Currency dropdown options
const options = [
    {
        value: "USD",
        label: (
            <>
                <img
                    src="https://flagcdn.com/us.svg"
                    alt="US Flag"
                    style={{ width: "20px", height: "10px", marginRight: "10px" }}
                />
                USD $
            </>
        ),
    },
    {
        value: "EUR",
        label: (
            <>
                <img
                    src="https://flagcdn.com/ca.svg"
                    alt="Canada Flag"
                    style={{ width: "20px", height: "10px", marginRight: "10px" }}
                />
                CAD $
            </>
        ),
    },
    {
        value: "GBP",
        label: (
            <>
                <img
                    src="https://flagcdn.com/gb.svg"
                    alt="UK Flag"
                    style={{ width: "20px", height: "10px", marginRight: "10px" }}
                />
                GBP £
            </>
        ),
    },
];

// Custom styles for react-select dropdown
const customStyles = {
    control: (base) => ({
        ...base,
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "30px",
        padding: "2px 10px",
        boxShadow: "none",
        ":hover": {
            borderColor: "#333",
        },
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "#333",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    option: (base, { isFocused }) => ({
        ...base,
        display: "flex",
        alignItems: "center",
        padding: "10px",
        backgroundColor: isFocused ? "#f5f5f5" : "white",
        color: "#333",
        cursor: "pointer",
    }),
    singleValue: (base) => ({
        ...base,
        display: "flex",
        alignItems: "center",
    }),
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTop>
                <LogoSection>
                    <img
                        src="https://dreamegg.com/cdn/shop/files/footer-image-1.png?v=1713766912&width=145"
                        alt="Dreamegg"
                    />
                    <SocialIcons>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer"> {/* Replace Twitter link with X */}
                            <FiX />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </SocialIcons>

                    <CurrencyDropdown>
                        <Select
                            options={options}
                            defaultValue={options[0]}
                            styles={customStyles}
                            isSearchable={false}
                        />
                    </CurrencyDropdown>
                </LogoSection>
                <LinksSection>
                    <Column>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Sound Machines</a></li>
                            <li><a href="#">Popular Sounds</a></li>
                            <li><a href="#">About Dreamegg</a></li>
                            <li><a href="#">User Manuals</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </Column>
                    <Column>
                        <h4>Information</h4>
                        <ul>
                            <li><a href="#">Survey & Feedbacks</a></li>
                            <li><a href="#">Become an Affiliate</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Coupon Partner</a></li>
                            <li><a href="#">Product Registration</a></li>
                        </ul>
                    </Column>
                    <Column>
                        <h4>Legal & Policies</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Refund Policy</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Payment Method</a></li>
                        </ul>
                    </Column>
                    <Column>
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li> {/* Styled like other links */}
                        </ul>
                        <ul>
                            <EmailIcons>
                                <a href="mailto:support@mydreamegg.com" target="_blank" rel="noopener noreferrer">
                                    <MdEmail className="email-icon" />
                                    <span className="email-text">support@mydreamegg.com</span>
                                </a>
                            </EmailIcons>
                        </ul>
                        <PaymentIcons>
                            <img src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_640.png" alt="PayPal" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNgW6FaeEe3QP2NMKcry5tSEINxi2Slv8og&s" alt="Visa" />
                            <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="MasterCard" />
                        </PaymentIcons>
                    </Column>
                </LinksSection>
            </FooterTop>
            <FooterBottom>
                <p>&copy; 2024 Dreamegg. All rights reserved.</p>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 2rem 1rem;
  border-top: 1px solid #ccc;
  
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

const LogoSection = styled.div`
  flex: 1;
  max-width: 250px;
  text-align: center;

  img {
    max-width: 100px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* Adjust size as needed */
    height: 40px; /* Adjust size as needed */
    border: 2px solid #333; /* Circular border */
    border-radius: 50%; /* Makes it circular */
    transition: background-color 0.3s, color 0.3s;
    text-decoration: none; /* Remove underline */
  }

  svg {
    font-size: 1.5rem; /* Increase icon size */
    color: #333;
    cursor: pointer;
    transition: transform 0.3s;
  }

  a:hover {
    background-color: black;
    color: white;
  }

  a:hover svg {
    transform: scale(1.1); /* Slightly increase the icon size on hover */
    color: white; /* Change icon color on hover */
  }
`;

const EmailIcons = styled.div`
  display: flex;
  justify-content: flex-start; /* Align to the left */
  align-items: center;
  gap: 1rem; /* Space between icon and text */

  a {
    display: flex;
    align-items: center;
    text-decoration: none; /* Remove underline */
    color: inherit; /* Ensure text inherits the color */
  }

  .email-icon {
    font-size: 1.6rem; /* Set icon size */
    color: #e79539; /* Set email icon color */
  }

  .email-text {
    font-size: 1rem; /* Set text size */
    color: #333; /* Set text color */
  }
`;

const CurrencyDropdown = styled.div`
  display: inline-block;
  max-width: 150px;
  margin-top: 1rem;
`;

const LinksSection = styled.div`
  display: flex;
  flex: 3;
  gap: 2rem;
  flex-wrap: wrap;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #555;
        text-decoration: none;

        &:hover {
          color: #f69059; /* Hover color */
        }
      }
    }
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 150px;
`;

const PaymentIcons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;

  img {
    width: 40px; /* Adjust size as needed */
    height: auto;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 1rem;
  padding-top: 2.5rem;
  border-top: 1px solid #ccc;
  font-size: 0.9rem;
  color: #777;
`;

