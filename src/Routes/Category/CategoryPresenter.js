import React from "react";
import PropTypes from "prop-types";
import Header from "Components/Header";
import { Container, Box } from "gestalt";
import Categories from "../../content/categories";
import ContentCard from "Components/ContentCard";
import Link from "Components/Link";
import Hyperlinks from "../../content/hyperlinks";

const CategoryPresenter = ({ title }) => (
  <Container>
    <Header hasBackButton={true} title={title} />
    <Box justifyContent="center" paddingX={4}>
      {title !== "About"
        ? Categories[title.toLowerCase()].articles.map((article, index) => (
            <ContentCard
              key={index}
              name={article.name}
              description={article.description}
              photo={article.photo}
              link={`/articles/${article.name}`}
            />
          ))
        : Hyperlinks.map((link, index) => (
            <Link
              title={link.title}
              description={link.description}
              url={link.url}
              thumbnail={link.thumbnail}
              key={index}
            />
          ))}
    </Box>
  </Container>
);

CategoryPresenter.propTypes = {
  title: PropTypes.string.isRequired
};

export default CategoryPresenter;
