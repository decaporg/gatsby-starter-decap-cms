import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <div
      className="margin-top-0"
      style={{
        display: "grid",
        alignItems: "center",
      }}
    >
      {/* You can use a GatsbyImage component if the image is dynamic */}
      {/* TODO add styles to the img tag to replicate the backgroundImage effect */}
      {img?.url ? ( <img src={img.url} alt="" />) : (
        <GatsbyImage
          image={img}
          objectFit={"cover"}
          objectPosition={imgPosition}
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            maxHeight: height,
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectratio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          formats={["auto", "webp", "avif"]}
        />
      )}
     {(title || subheading )&& <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        {title && (
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
              backgroundColor: "rgb(255, 68, 0)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {title}
          </h1>
        )}
        {subheading && (
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
              backgroundColor: "rgb(255, 68, 0)",
              color: "white",
              lineHeight: "1",
              padding: "0.25rem",
              marginTop: "0.5rem",
            }}
          >
            {subheading}
          </h3>
        )}
      </div>}
    </div>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
