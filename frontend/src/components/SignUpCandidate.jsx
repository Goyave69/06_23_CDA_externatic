/* eslint-disable camelcase */
import { React, useState } from "react";
import "./SignUpCandidate.css";
import { Button, TextField, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
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
  handleSubmitCandidate,
  handlePreviousClick,
  photoInputRef,
  cvInputRef,
  motivation_letterInputRef,
}) {
  const [photoName, setPhotoName] = useState("");
  const [cvName, setCvName] = useState("");
  const [motivation_letterName, setMotivation_letterName] = useState("");

  return (
    <div className="login-container">
      <div className="login-cardC">
        <img src={logo} alt="Logo" className="logoC" />
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmitCandidate}>
          <div className="firstAndSecondGroup">
            <div className="firstGroupC">
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
                  id="phone"
                  label="Téléphone"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  fullWidth
                />
              </div>
            </div>{" "}
            <div className="secondGroupC">
              <div className="form-group">
                <TextField
                  id="birth_date"
                  label="Date de naissance"
                  variant="outlined"
                  value={birth_date}
                  onChange={(e) => setBirth_date(e.target.value)}
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className="form-group">
                <TextField
                  id="availability_date"
                  label="Disponible à partir de"
                  variant="outlined"
                  value={availability_date}
                  onChange={(e) => setAvailability_date(e.target.value)}
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
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
              id="researched_job"
              label="Postes recherchés (max 3)"
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
          <div className="uploadButtons">
            <div className="button">
              <Button
                variant="contained"
                component="label"
                sx={{
                  borderRadius: "50px",
                  mb: "15px",
                  mt: "10px",
                  backgroundColor: "#851342",
                }}
              >
                <FileUploadIcon /> CV
                <input
                  type="file"
                  ref={cvInputRef}
                  hidden
                  onChange={(e) => {
                    setCvName(e.target.value.split("\\")[2]);
                  }}
                />
              </Button>
            </div>
            <div className="button">
              <Button
                variant="contained"
                component="label"
                sx={{
                  borderRadius: "50px",
                  mb: "15px",
                  mt: "10px",
                  backgroundColor: "#851342",
                }}
              >
                <FileUploadIcon /> Lettre de motivation
                <input
                  type="file"
                  ref={motivation_letterInputRef}
                  hidden
                  onChange={(e) => {
                    setMotivation_letterName(e.target.value.split("\\")[2]);
                  }}
                />
              </Button>
            </div>
            <div className="button">
              <Button
                variant="contained"
                component="label"
                sx={{
                  borderRadius: "50px",
                  mb: "15px",
                  mt: "10px",
                  backgroundColor: "#851342",
                }}
              >
                <FileUploadIcon /> avatar
                <input
                  type="file"
                  ref={photoInputRef}
                  hidden
                  onChange={(e) => {
                    setPhotoName(e.target.value.split("\\")[2]);
                  }}
                />
              </Button>
            </div>
          </div>
          <div className="fileNames">
            {" "}
            <Typography variant="body1" color="initial" sx={{ mb: "10px" }}>
              {cvName}
            </Typography>
            <Typography variant="body1" color="initial" sx={{ mb: "10px" }}>
              {motivation_letterName}
            </Typography>
            <Typography variant="body1" color="initial" sx={{ mb: "10px" }}>
              {photoName}
            </Typography>
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
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#CA2061" }}
              disabled={
                !(
                  birth_date &&
                  phone &&
                  adress &&
                  profession &&
                  job_search_location &&
                  availability_date &&
                  skills &&
                  languages &&
                  cvInputRef.current.files[0] &&
                  motivation_letterInputRef.current.files[0] &&
                  researched_job &&
                  photoInputRef.current.files[0] &&
                  profile_description
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
