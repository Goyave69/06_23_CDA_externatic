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
  const [job_title, setJob_title] = React.useState("");
  const [profession, setProfession] = React.useState("");
  const [researched_job, setResearched_job] = React.useState("");
  const [job_search_location, setJob_search_location] = React.useState("");
  const [availability_date, setAvailability_date] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [languages, setLanguages] = React.useState("");
  const [cv_url, setCv_url] = React.useState("");
  const [motivation_letter_url, setMotivation_letter_url] = React.useState("");
  const [photo_url, setPhoto_url] = React.useState("");

  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      birth_date &&
      phone &&
      profile_description &&
      adress &&
      job_title &&
      profession &&
      researched_job &&
      job_search_location &&
      availability_date &&
      skills &&
      languages &&
      cv_url &&
      motivation_letter_url
    ) {
      const data = JSON.stringify({
        birth_date,
        phone,
        profile_description,
        adress,
        job_title,
        profession,
        researched_job,
        job_search_location,
        availability_date,
        skills,
        languages,
        cv_url,
        motivation_letter_url,
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
            <div className="form-group">
              <TextField
                id="job_title"
                label="Intitulé du poste"
                variant="outlined"
                value={job_title}
                onChange={(e) => setJob_title(e.target.value)}
                type="job_title"
                fullWidth
              />
            </div>{" "}
            <div className="form-group">
              <TextField
                id="profession"
                label="Profession"
                variant="outlined"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                type="profession"
                fullWidth
              />
            </div>{" "}
            <div className="form-group">
              <TextField
                id="researched_job"
                label="Postes recherchés"
                variant="outlined"
                value={researched_job}
                onChange={(e) => setResearched_job(e.target.value)}
                type="researched_job"
                fullWidth
              />
            </div>{" "}
            <div className="form-group">
              <TextField
                id="job_search_location"
                label="Lieu recherché"
                variant="outlined"
                value={job_search_location}
                onChange={(e) => setJob_search_location(e.target.value)}
                type="job_search_location"
                fullWidth
              />
            </div>{" "}
            <div className="form-group">
              <TextField
                id="availability_date"
                label="Disponiblé à partir de"
                variant="outlined"
                value={availability_date}
                onChange={(e) => setAvailability_date(e.target.value)}
                type="availability_date"
                fullWidth
              />
            </div>{" "}
            <div className="form-group">
              <TextField
                id="skills"
                label="Compétences"
                variant="outlined"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                type="skills"
                fullWidth
              />
            </div>{" "}
            <div className="form-group">
              <TextField
                id="languages"
                label="Languages"
                variant="outlined"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                type="languages"
                fullWidth
              />
            </div>{" "}
            <div className="form-group">
              <TextField
                id="cv_url"
                label="CV_URL"
                variant="outlined"
                value={cv_url}
                onChange={(e) => setCv_url(e.target.value)}
                type="cv_url"
                fullWidth
              />
            </div>{" "}
            <div className="motivation_letter_url">
              <TextField
                id="adress"
                label="Adresse"
                variant="outlined"
                value={motivation_letter_url}
                onChange={(e) => setMotivation_letter_url(e.target.value)}
                type="motivation_letter_url"
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
            </div>
          </div>

          <div className="form-group" />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
