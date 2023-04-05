import React from "react";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const TopHeader = () => {
  return (
    <>
      <TopContainer>
        <Topheader>
          <Nav>
            <div className="logo">
              <GiKnifeFork />
              <Logo to={"/"}>JK-delicious</Logo>
            </div>

            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"/about"}>About</Link>
              </li>

              <li>
                <Link to={"/feedback"}>FAQ</Link>
              </li>

              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </Nav>
          <h1>All Your Food. One Place.</h1>
          <div className="arrow bounce">
            <Link className="fa" to={"/"}>
              <BsFillArrowDownCircleFill />
            </Link>
          </div>
        </Topheader>
      </TopContainer>
    </>
  );
};

export default TopHeader;

const TopContainer = styled.div`
  background-image: url("https://spoonacular.com/application/frontend/images/wallpaper1.jpg");
  height: 465px;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 10;
  margin-bottom: 12px;
`;

const Topheader = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  h1 {
    color: #fff;
    font-weight: 400;
    font-size: 60px;
    text-align: center;
    /* padding: 2rem; */
  }
`;
const Nav = styled.div`
  padding: 4rem 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  svg {
    font-size: 2rem;
    color: #00843c;
    position: absolute;
    top: 12px;
    left: 12px;
    margin-top: 1rem;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    position: absolute;
    top: 12px;
    left: 13rem;
    margin-top: 1rem;
  }
  ul li a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #00843c;
    background-color: #fff;
    padding: 0.4rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.4s ease-in-out;
  }

  ul li a:hover {
    background-color: #00843c;
    color: white;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  color: #00843c;
  position: absolute;
  top: 12px;
  left: 52px;
  margin-top: 1rem;
`;
