import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import axios from "axios";
import { Typography, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function Companies() {
  const [data, setData] = useState([]);

  const handleCardClick = (id) => {
    console.warn("Card sélectionnée avec l'id :", id); // Fonctionne bien
    // 2) navigue vers la page companyDetails avec les données de la page en fonction de l'ID sélectionné
  };

  useEffect(() => {
    axios
      .get("http://localhost:5550/company")
      .then((response) => {
        setData(response.data); // Mettre à jour les données dans le state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        mt: "100px",
      }}
    >
      {data.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Link to={`/companyDetails/${item.id}`}>
              <CardMedia
                component="img"
                height="140"
                image={item.photo_url}
                alt={item.name}
                onClick={() => handleCardClick(item.id)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
