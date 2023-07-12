import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <div style={{}}>
      <div
        className="topButtons"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <MenuIcon />
        <div className="rightButtons">
          <Button size="small" variant="contained" sx={{ width: "auto" }}>
            Candidat
          </Button>
          <Button size="small" variant="contained" sx={{ width: "auto" }}>
            Entreprise
          </Button>
          <Button size="small" variant="contained" sx={{ width: "auto" }}>
            Connexion
          </Button>
        </div>
      </div>
      <div className="logoAndText">sfsd</div>
      <div className="searchFields">sfsd</div>
      <div className="contractType">sfsd</div>
      <div className="companiesJobOffers">sfsd</div>
    </div>
  );
}
