import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import axios from "axios";

export default function Companies() {
  // const [data, setData] = useState([]);

  // ici tableau dur avec contenu company pour remplir les cards via le map
  const fakeData = [
    {
      id: 1,
      CompanyName: "shell",
      adress: "A rue des pétroliers 69001 Lyon",
      phone: "0478661798",
      email: "contact@shell.fr",
      description:
        "Entreprise basée sur le respect de l'humain et de son environnement",
      industry_field: "chimie",
      photo_url:
        "data:image/png;base64,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",
    },
    {
      id: 2,
      CompanyName: "Ostwind",
      adress: "145 rue des éolinennes 35001 Brest",
      phone: "0474321798",
      email: "contact@ostwind.fr",
      description: "La transition énergétique verte pour un futur vert",
      industry_field: "énergie",
      photo_url:
        "https://www.institutdefrance.fr/wp-content/uploads/2022/03/Capture-de%CC%81cran-2022-03-09-a%CC%80-14.08.52-433x606.png",
    },
    {
      id: 3,
      CompanyName: "Vallourec",
      adress: "56 rue de la métallurgie 42001 Aurec",
      phone: "04743214568",
      email: "contact@valourec.fr",
      description: "Le métel froid et dur pour toute la famille",
      industry_field: "metallurgie",
      photo_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFc5LXG36IgD_s7smjHJtNS5BjRoXiBsu-IleuM3EtBx36vzro2tOSZoRx3zymmezBGig&usqp=CAU",
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/company")
  //     .then((response) => {
  //       setData(response.data); // Mettre à jour les données dans le state
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        mt: "100px",
      }}
    >
      {/* <Button onClick={() => console.warn(data)}>Coucou console-moi</Button> */}
      {/* <Button onClick={handleCardClick}> */}
      <Button>
        {fakeData.map((item) => (
          <Card key={item.id} sx={{ width: 300, mr: "20px" }}>
            <CardMedia sx={{ height: 280 }} image={item.photo_url} />
          </Card>
        ))}
      </Button>
    </Box>
  );
}
