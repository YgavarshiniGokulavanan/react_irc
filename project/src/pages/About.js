import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography, Button } from "@mui/material";

const About = () => {
  // Step 1: Define a state for tracking the number of times the "Learn More" button is clicked
  const [clickCount, setClickCount] = React.useState(0);

  // Step 2: Function to handle the "Learn More" button click
  const handleLearnMoreClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  // Step 3: Additional content to be displayed after clicking "Learn More"
  const additionalContent = (
    <>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Our Commitment to Sustainability
      </Typography>
      <p>
        At Nature's Nurturers, we are dedicated to promoting sustainable
        gardening practices. Our products are sourced with environmental
        responsibility in mind, and we strive to reduce our carbon footprint
        throughout our operations. Together, let's create a greener and more
        sustainable future for our planet.
      </p>
    </>
  );

  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Welcome to our gardening wonderland! 🌸 At Nature's Nurturers, we are
          passionate about helping you cultivate your green oasis and bring your
          outdoor spaces to life. 🌼 With a wide selection of high-quality
          seeds, plants, tools, and accessories, we are your one-stop shop for
          all things garden-related. 🛒 Whether you're a seasoned green thumb or
          a budding enthusiast, our knowledgeable staff is here to offer expert
          advice and guidance, ensuring your gardening experience is both
          successful and enjoyable. 🌱 Visit us today and let's grow something
          beautiful together! 🌻
        </p>
        <br />
        <p>
          At Nature's Nurturers, we are passionate about providing
          high-quality gardening tools and equipment to help you nurture the
          perfect garden oasis. Whether you're a seasoned green thumb or just
          starting out, we have everything you need to make your gardening
          experience a success. From durable shovels and rakes to
          state-of-the-art gardening machinery, we've got you covered.
        </p>

        {/* Step 4: Display "Learn More" button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleLearnMoreClick}
          sx={{ mt: 2 }}
        >
          Learn More
        </Button>

        {/* Step 5: Display additional content when the "Learn More" button is clicked */}
        {clickCount > 0 && additionalContent}
      </Box>
    </Layout>
  );
};

export default About;
