import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  // State to keep track of the cart count
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding an item to the cart
  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <Layout cartCount={cartCount}>
      {
      

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          padding: 2,
        }}
      >
        {MenuList.map((menu) => (
          <Card
            sx={{ maxWidth: "400px", minWidth: "300", margin: 2, boxShadow: 4 }}
            key={menu.name}
            onClick={addToCart}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component={"div"}
                >
                  Price: ${menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
}
    </Layout>
  );
};

export default Menu;
