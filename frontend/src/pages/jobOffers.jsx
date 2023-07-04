import React from "react";
import Box from "@mui/material/Box";

function jobOffers() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          p: 0.5,
          border: "1.5px solid black",
          borderRadius: 16,
          width: "40.5%",
          margin: "auto",
          padding: "0 3rem 3rem 3rem",
          textAlign: "justify",
          height: "50rem",
        }}
      >
        <div />
      </Box>
      <Box
        sx={{
          p: 0.5,
          border: "1.5px solid black",
          borderRadius: 16,
          width: "40.5%",
          margin: "auto",
          padding: "0 3rem 3rem 3rem",
          textAlign: "justify",
          height: "50rem",
        }}
      />
    </Box>
  );
}
export default jobOffers;
