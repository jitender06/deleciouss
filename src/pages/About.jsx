import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <AboutContainer>
        <div className="about">
          <h1>ABOUT US</h1>

          <p>
            <strong>jk-delicious </strong> is a food recipie website that will
            help you to cook delicious food items and improve your cooking
            skills. The main goal of our website is to help the people who are
            learning cooking. We provide you the recipies from all over the
            world such as
            <strong> Indian, Japanese, American, Italian, Chinese</strong> food
            recipies and many more. This website is developed my{" "}
            <strong>Jitender</strong>. The measured ingredients in a recipe not
            only produce consistent food but control your food{" "}
            <strong>cost</strong> and <strong>profit</strong>. Recipes reduce
            waste because a cook is prepping exactly what is needed to produce
            the menu items. Recipes provide portion control which is a major
            factor in food cost control and profit.
          </p>
        </div>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  background-image: url("https://img.freepik.com/premium-photo/assorted-indian-recipes-food-various_79295-7226.jpg?w=740");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .about {
    margin-top: 0.9rem;
    text-align: center;
    padding: 2rem 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h1 {
      font-size: 3rem;
      color: #fff;
      letter-spacing: 0.4rem;
    }

    p {
      background-color: #00843c;
      /* margin-top: 3rem; */
      padding: 1.7rem 10%;
      color: #fff;
      font-size: 1.2rem;
      line-height: 2rem;
      word-spacing: 0.2rem;
      text-align: justify;
      border-radius: 1rem;
    }
  }
`;
