import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";

import axios from "axios";

export default function CompanyDetails() {
  const { VITE_BACKEND_URL } = import.meta.env;
  const [data, setData] = useState([]);
  const { id } = useParams(); // Récupère l'ID de la route

  useEffect(() => {
    axios
      .get(`${VITE_BACKEND_URL}/company/`)
      // .get(`http://localhost:5555/company/${id}`)
      .then((response) => {
        setData(response.data); // Mettre à jour les données dans le state
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>; // Affiche un indicateur de chargement tant que les données ne sont pas disponibles
  }

  return (
    <Box
      sx={{
        p: 0.5,
        border: "1.5px solid black",
        borderRadius: 16,
        width: "85%",
        margin: "auto",
        padding: "0 3rem 3rem 3rem",
        textAlign: "justify",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            gap: "10%",
            marginBottom: "5rem",
            marginTop: "5rem",
          }}
        >
          <img
            src={data.photo_url}
            alt={data.companyName}
            style={{
              transform: "scale(1.0)",
              height: "500px",
              width: "30%",
              alignSelf: "center",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              marginTop: "5rem",
            }}
          >
            <div style={{ fontSize: "1.5rem" }}>{data.description}</div>
          </div>
        </div>
      </div>
    </Box>
  );
}
