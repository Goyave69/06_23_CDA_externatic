/* eslint-disable camelcase */
import { React, useState, useRef } from "react";
import Box from "@mui/material/Box";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { Button, TextField, Typography } from "@mui/material";
import avatar1 from "../../assets/Ressources/avatar1.jpg";

// A vérifier les props donnés ici, s'il faut les recupérer de SignUP
// A vérifier si first_name&&last_name et SetFirstName&&SetLastName fonctionne dans value
// A vérifier  si les inputRef on les donne directement ici on on doit les remonter via props

function CandidateProfile({
  first_name,
  setFirstName,
  last_name,
  setLastName,
  profession,
  setProfession,
  skills,
  setSkills,
  languages,
  setLanguages,
  birth_date,
  setBirth_date,
  adress,
  setAdress,
  phone,
  setPhone,
  email,
  setEmail,
  researched_job,
  setResearched_job,
  availability_date,
  setAvailability_date,
  job_search_location,
  setJob_search_location,
  profile_description,
  setProfile_description,
}) {
  const [age, setAge] = useState("");
  // A voir si on peut les donner en props depuis SignUp

  const [photoName, setPhotoName] = useState("");
  const [cvName, setCvName] = useState("");
  const [motivation_letterName, setMotivation_letterName] = useState("");

  const photoInputRef = useRef();
  const cvInputRef = useRef();
  const motivation_letterInputRef = useRef();
  return (
    <Box
      sx={{
        width: "85%",
        margin: "auto",
        padding: " 3rem 3rem 3rem",
        textAlign: "justify",
      }}
    >
      <div
        className="title"
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontFamily: "Jost, sans-serif",
          fontSize: "20px",
          marginBottom: "20px",
        }}
      >
        MON PROFIL
      </div>
      <div
        className="leftAndRightProfile"
        style={{
          display: "flex",
        }}
      >
        <div
          className="leftProfile"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
          }}
        >
          <div
            className="uploadAvatar"
            style={{ display: "flex", alignItems: "end", marginBottom: "25px" }}
          >
            <div className="button">
              <Button
                variant="contained"
                component="label"
                sx={{
                  borderRadius: "15px",
                  backgroundColor: "white",
                  boxShadow: "none",

                  padding: 0,
                  width: "fit-content",
                  "&:hover": {
                    backgroundColor: "white",
                    boxShadow: "none",
                  },
                }}
              >
                <FileUploadIcon sx={{ color: "black", marginY: "5px" }} />
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

            <div>
              <Typography variant="body1" color="initial" sx={{ mb: "10px" }}>
                {photoName}
              </Typography>
            </div>
            <div className="avatar">
              <img
                src={avatar1}
                alt="avatar"
                style={{ height: "100%", width: "50%", borderRadius: "200px" }}
              />
            </div>
          </div>

          <div className="ageName" style={{ width: "80%", marginTop: "20px" }}>
            <div className="form-group">
              <TextField
                id="firstNameLastNameAge"
                label="Nom Prénom Age"
                variant="standard"
                value={first_name && last_name && age}
                onChange={(e) =>
                  setFirstName && setLastName && setAge(e.target.value)
                }
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </div>
          <div
            className="profession"
            style={{ width: "80%", marginTop: "20px" }}
          >
            <div className="form-group">
              <TextField
                id="profession"
                label="Profession"
                variant="standard"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </div>
          <div className="skills" style={{ width: "80%", marginTop: "20px" }}>
            <div className="form-group">
              <TextField
                id="skills"
                label="Compétences"
                variant="standard"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </div>
          <div
            className="languages"
            style={{ width: "80%", marginTop: "20px" }}
          >
            <div className="form-group">
              <TextField
                id="lanugages"
                label="Langues"
                variant="standard"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </div>
        </div>
        <div
          className="rightProfile"
          style={{
            border: "1.5px solid black",
            borderRadius: 16,
            padding: "3rem 3rem 3rem 3rem",
            width: "70%",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div
            className="rightProfileL"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div className="nameBirthDate" style={{ display: "flex" }}>
              <div className="fistLastName" style={{ width: "60%" }}>
                <div className="form-group">
                  <TextField
                    id="firstNameLastName"
                    label="Nom et Prénom"
                    variant="standard"
                    value={first_name && last_name}
                    onChange={(e) =>
                      setFirstName && setLastName(e.target.value)
                    }
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div style={{ width: "10%" }} />
              <div className="birthDate" style={{ width: "30%" }}>
                <div className="form-group">
                  <TextField
                    id="birth_date"
                    label="Date de naissance"
                    variant="outlined"
                    value={birth_date}
                    type="date"
                    onChange={(e) => setBirth_date(e.target.value)}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
            </div>
            <div className="adress" style={{ width: "100%" }}>
              <div className="form-group">
                <TextField
                  id="adress"
                  label="Adresse"
                  variant="standard"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className="phoneEmail" style={{ display: "flex" }}>
              <div className="phone" style={{ width: "60%" }}>
                <div className="form-group">
                  <TextField
                    id="phone"
                    label="Téléphone"
                    variant="standard"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div style={{ width: "10%" }} />
              <div className="email" style={{ width: "30%" }}>
                <div className="form-group">
                  <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="researched_job" style={{ width: "100%" }}>
                <div className="form-group">
                  <TextField
                    id="researched_job"
                    label="Postes recherchés (max 3)"
                    variant="standard"
                    value={researched_job}
                    onChange={(e) => setResearched_job(e.target.value)}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className="placeAndAvailability" style={{ display: "flex" }}>
                <div className="job_search_location" style={{ width: "60%" }}>
                  <div className="form-group">
                    <TextField
                      id="job_search_location"
                      label="Lieu recherché"
                      variant="standard"
                      value={job_search_location}
                      onChange={(e) => setJob_search_location(e.target.value)}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
                <div style={{ width: "10%" }} />
                <div className="availability_date" style={{ width: "30%" }}>
                  <div className="form-group">
                    <TextField
                      id="availability_date"
                      label="Disponible à partir de"
                      variant="outlined"
                      value={availability_date}
                      type="date"
                      onChange={(e) => setAvailability_date(e.target.value)}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="profile_description">
              <div className="job_search_location" style={{ width: "100%" }}>
                <div className="form-group">
                  <TextField
                    id="profile_description"
                    label="Description de ta recherche"
                    variant="outlined"
                    placeholder="1000 caractères max"
                    value={profile_description}
                    onChange={(e) => setProfile_description(e.target.value)}
                    fullWidth
                    inputProps={{ maxLength: 1000, readOnly: true }} // Set maximum character length
                    multiline // Allow multiple lines of text
                    rows={4} // Adjust the number of rows to fit the desired height
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
            </div>

            <div
              className="uploadButtons"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <div
                className="buttonText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="button">
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      borderRadius: "50px",
                      mb: "0px",
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
                <Typography variant="body1" color="initial" sx={{ mb: "10px" }}>
                  {cvName}
                </Typography>
              </div>
              <div
                className="buttonText"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="button">
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      borderRadius: "50px",
                      mb: "0px",
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
                <Typography variant="body1" color="initial" sx={{ mb: "10px" }}>
                  {motivation_letterName}
                </Typography>
              </div>
            </div>
          </div>
          <div className="saveButton" style={{ marginBottom: "10px" }}>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#000000", width: "120px" }}
            >
              ENREGISTRER
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default CandidateProfile;
