import React from "react";
import PropTypes from "prop-types";
import { HomeTemplate } from "@templates/index";

export default function HomePage({ textConstants, collection, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return <HomeTemplate textConstants={textConstants} collection={collection} />;
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/collections");

    if (!response.ok) {
      throw new Error("Failed to load data");
    }

    const collection = await response.json();

    return {
      props: {
        collection,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

HomePage.propTypes = {
  textConstants: PropTypes.shape({
    home: PropTypes.object.isRequired,
  }).isRequired,
  collection: PropTypes.object,
  error: PropTypes.string,
};
