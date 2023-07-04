/* eslint-disable camelcase */
import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import logo from "../assets/Ressources/logo-externatic.png";
import ApiHelper from "../services/ApiHelper";
import { useToken } from "../context/TokenContext";

function Login() {
  const [birth_date, setBirth_date] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [profile_description, setProfile_description] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [photo_url, setPhoto_url] = React.useState("");
  const [skills_area, setSkills_area] = React.useState("");
  const [research_sector, setResearch_sector] = React.useState("");

  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      birth_date &&
      phone &&
      profile_description &&
      adress &&
      photo_url &&
      skills_area &&
      research_sector
    ) {
      const data = JSON.stringify({
        birth_date,
        phone,
        profile_description,
        adress,
        photo_url,
        skills_area,
        research_sector,
      });
      await ApiHelper("/login", "POST", null, data)
        .then((response) => response.json())
        .then((result) => {
          console.error(result.token);
          return setToken(result.token);
        })
        .then(() => navigate("/"));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
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
            <div className="photo_url">
              <TextField
                id="photo_url"
                label="Photo URL"
                variant="outlined"
                value={photo_url}
                onChange={(e) => setPhoto_url(e.target.value)}
                type="photo_url"
                fullWidth
              />
            </div>{" "}
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
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
