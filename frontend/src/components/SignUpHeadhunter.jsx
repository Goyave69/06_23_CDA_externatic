/* eslint-disable camelcase */
import React, { useState } from "react";
import "./SignUpHeadhunter.css";

import { Button, TextField, Typography } from "@mui/material";
import logo from "../assets/Ressources/logo-externatic.png";

function SignUpHeadhunter({
  birth_date,
  setBirth_date,
  phone,
  setPhone,
  profile_description,
  setProfile_description,
  adress,
  setAdress,
  skills_area,
  setSkills_area,
  research_sector,
  setResearch_sector,
  handleSubmitHeadhunter,
  handlePreviousClick,
  photoInputRef,
}) {
  const [photoName, setPhotoName] = useState("");

  return (
    <div className="login-container">
      <div className="login-cardH">
        <img src={logo} alt="Logo" className="logoH" />
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmitHeadhunter}>
          <div className="secondGroup">
            <div className="form-group">
              <TextField
                id="birth_date"
                label="Date de naissance JJ/MM/AAAA"
                variant="outlined"
                value={birth_date}
                onChange={(e) => setBirth_date(e.target.value)}
                type="birth_date"
                fullWidth
              />
            </div>
            <div className="form-group">
              <TextField
                id="phone"
                label="Téléphone"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                fullWidth
              />
            </div>
            <div className="form-group">
              <TextField
                id="profile_description"
                label="Description du profile"
                variant="outlined"
                value={profile_description}
                onChange={(e) => setProfile_description(e.target.value)}
                type="profile_description"
                fullWidth
              />
            </div>
            <div className="form-group">
              <TextField
                id="adress"
                label="Adresse"
                variant="outlined"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                type="adress"
                fullWidth
              />
            </div>
            <Button variant="contained" component="label">
              Uploader une image
              <input
                type="file"
                ref={photoInputRef}
                hidden
                onChange={(e) => {
                  setPhotoName(e.target.value.split("\\")[2]);
                }}
              />
            </Button>
            <Typography variant="body1" color="initial">
              {photoName}
            </Typography>
            <div className="form-group">
              <TextField
                id="skills_area"
                label="Domaine de compétences"
                variant="outlined"
                value={skills_area}
                onChange={(e) => setSkills_area(e.target.value)}
                type="skills_area"
                fullWidth
              />
            </div>{" "}
            <div className="form-group">
              <TextField
                id="research_sector"
                label="Secteur de recherche"
                variant="outlined"
                value={research_sector}
                onChange={(e) => setResearch_sector(e.target.value)}
                type="research_sector"
                fullWidth
              />
            </div>
          </div>
          <div className="buttons">
            <Button
              type="button"
              variant="contained"
              onClick={handlePreviousClick}
              sx={{ backgroundColor: "#CA2061" }}
            >
              Arrière
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#CA2061" }}
              disabled={
                !(
                  birth_date &&
                  phone &&
                  profile_description &&
                  adress &&
                  photoInputRef.current.files[0] &&
                  skills_area &&
                  research_sector
                )
              }
            >
              Enregistrer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpHeadhunter;
