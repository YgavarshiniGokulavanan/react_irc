import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& a": {
              textDecoration: "none",
            },
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
              color: "white",
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* Icons with links */}
          <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://github.com/your_github_username" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.youtube.com/your_youtube_channel" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
