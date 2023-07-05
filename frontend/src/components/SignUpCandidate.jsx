/* eslint-disable camelcase */
import React from "react";
import "./SignUpCandidate.css";
import { Button, TextField } from "@mui/material";
import logo from "../assets/Ressources/logo-externatic.png";

function SignUpCandidate({
  birth_date,
  setBirth_date,
  phone,
  setPhone,
  profile_description,
  setProfile_description,
  adress,
  setAdress,
  photo_url,
  setPhoto_url,
  job_title,
  setJob_title,
  profession,
  setProfession,
  researched_job,
  setResearched_job,
  job_search_location,
  setJob_search_location,
  availability_date,
  setAvailability_date,
  skills,
  setSkills,
  languages,
  setLanguages,
  cv_url,
  setCv_url,
  motivation_letter_url,
  setMotivation_letter_url,
  handleSubmitCandidate,
  handlePreviousClick,
}) {
  return (
    <div className="login-container">
      <div className="login-cardC">
        <img src={logo} alt="Logo" className="logoC" />
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmitCandidate}>
          <div className="firstAndSecondGroup">
            <div className="firstGroup">
              <div className="form-group">
                <TextField
                  id="birth_date"
                  label="Date de naissance JJ/MM/AAAA"
                  variant="outlined"
                  value={birth_date}
                  onChange={(e) => setBirth_date(e.target.value)}
                  type="date"
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
              </div>
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
            </div>{" "}
            <div className="secondGroup">
              <div className="form-group">
                <TextField
                  id="birth_date"
                  label="Disponible à partir de"
                  variant="outlined"
                  value={birth_date}
                  onChange={(e) => setBirth_date(e.target.value)}
                  type="date"
                  fullWidth
                />
              </div>
              <div className="form-group">
                <TextField
                  id="skills"
                  label="Compétences"
                  variant="outlined"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  type="string"
                  fullWidth
                />
              </div>{" "}
              <div className="form-group">
                <TextField
                  id="languages"
                  label="Langues"
                  variant="outlined"
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  type="string"
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
                  type="string"
                  fullWidth
                />
              </div>{" "}
              <div className="form-group">
                <TextField
                  id="adress"
                  label="Adresse"
                  variant="outlined"
                  value={motivation_letter_url}
                  onChange={(e) => setMotivation_letter_url(e.target.value)}
                  type="string"
                  fullWidth
                />
              </div>
              <div className="form-group">
                <TextField
                  id="photo_url"
                  label="Photo URL"
                  variant="outlined"
                  value={photo_url}
                  onChange={(e) => setPhoto_url(e.target.value)}
                  type="string"
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <TextField
              id="researched_job"
              label="Postes recherchés"
              placeholder="Maximum 3 postes"
              variant="outlined"
              value={researched_job}
              onChange={(e) => setResearched_job(e.target.value)}
              type="researched_job"
              fullWidth
            />
          </div>{" "}
          <div className="form-group">
            <TextField
              id="profile_description"
              label="Description du profil"
              placeholder="1000 caractères max"
              variant="outlined"
              value={profile_description}
              onChange={(e) => setProfile_description(e.target.value)}
              inputProps={{ maxLength: 1000 }} // Set maximum character length
              multiline // Allow multiple lines of text
              rows={4} // Adjust the number of rows to fit the desired height
              fullWidth
              type="text"
            />
          </div>
          <div className="form-group" />
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
              variant="contained"
              type="submit"
              disabled={
                !(
                  birth_date &&
                  phone &&
                  profile_description &&
                  adress &&
                  photo_url &&
                  job_title &&
                  profession &&
                  researched_job &&
                  job_search_location &&
                  availability_date &&
                  skills &&
                  languages &&
                  cv_url &&
                  motivation_letter_url
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

export default SignUpCandidate;
