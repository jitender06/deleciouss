import React from "react";
import CardFeedBack from "../components/CardFeedBack";

const FeedBack = () => {
  const FeedBackApi = [
    {
      id: 1,
      title: "How can I find new recipes to try?",
      description:
        " The best way to find new recipes is to use the recipe search engine. If you navigate to Recipes > Search Recipes you can enter any category or ingredient you like, e.g. breakfast, dessert, pasta, chickpeas, Greek, winter, etc. Then you can scroll through every recipe we have that fits your search term.",
    },

    {
      id: 2,
      title: "How can I share my recipes with friends and family?",
      description:
        " If you want to send a recipe to someone, you can simply share the URL ",
    },

    {
      id: 3,
      title: "What are menu items?",
      description:
        " Under menu items you can search for foods from fast food chains to add to your meal plan.",
    },

    {
      id: 4,
      title: "Can I export my recipes?",
      description: " No, currently it is not possible to export recipes.",
    },
    {
      id: 5,
      title: "Can I export my recipes?",
      description: "No, currently it is not possible to export recipes.",
    },
    {
      id: 6,
      title: "Where are you taking the data?",
      description:
        "we are takinf the data from an free API from spoonacular website which provides the free data",
    },
  ];
  return (
    <>
      {FeedBackApi.map((data, ind) => {
        return (
          <CardFeedBack
            key={ind}
            question={data.title}
            answer={data.description}
          />
        );
      })}
    </>
  );
};

export default FeedBack;
