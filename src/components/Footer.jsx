import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiFacebook, SiInstagram, SiTwitter, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Container>
        <FooterDiv>
          <Detail>
            <Ul>
              <TopPara>Basic Details</TopPara>
              <li>
                <Link to={"/about"}>About</Link>
              </li>

              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"/feedback"}>FAQ</Link>
              </li>

              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </Ul>
          </Detail>
          <Social>
            <ul>
              <li>
                <a
                  href="https://instagram.com/jatinderchoudhary07?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/KartiKrajput_03?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://jitender06.github.io/jitender.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://jitender06.github.io/jitender.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                </a>
              </li>
            </ul>
          </Social>
          <PopularLinks>
            <Ul>
              <TopPara>Top Links</TopPara>
              <li>
                <Link to={"/cuisine/Italian"}>Italian</Link>
              </li>

              <li>
                <Link to={"/cuisine/Indian"}>Indian</Link>
              </li>

              <li>
                <Link to={"/cuisine/Japanese"}>Japaness</Link>
              </li>

              <li>
                <Link to={"/cuisine/American"}>American</Link>
              </li>
            </Ul>
          </PopularLinks>
        </FooterDiv>
      </Container>
      <Credit>Copyright © 2023. Created by ❤️Jitender & Kartik </Credit>
    </>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #00843c;
  /* color: #fff; */
  padding: 1.5rem 10%;
  width: 100%;
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Detail = styled.div`
  ul {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  ul li a {
    color: white;
  }
`;

const Social = styled.div`
  display: flex;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    transition: all 0.1s ease-in-out;

    li {
      transition: all 0.1s ease-in-out;
      svg {
        color: white;
      }
    }

    li:hover {
      font-size: 3rem;
      transition: all 0.1s ease-in-out;
    }
  }
`;

const PopularLinks = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li a {
      color: white;
    }
  }
`;

const TopPara = styled.h2`
  text-decoration: underline;
`;
const Ul = styled.ul`
  li a {
    transition: all 0.1s linear;
  }
  li a:hover {
    background-color: white;
    color: #00843c;
    padding: 0.5rem 1.3rem;
    border-radius: 0.3rem;
    transition: all 0.1s linear;
  }
`;

const Credit = styled.div`
  text-align: center;
  color: white;
  background: linear-gradient(35deg, #494949, #313131);
  padding: 0.5rem;
`;
