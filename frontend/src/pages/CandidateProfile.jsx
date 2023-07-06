/* eslint-disable camelcase */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { TextField } from "@mui/material";
import avatar1 from "../assets/Ressources/avatar1.jpg";
import image1 from "../assets/Ressources/image1.svg";
import image3 from "../assets/Ressources/image3.avif";
import image4 from "../assets/Ressources/image4.avif";

// A vérifier les props donnés ici, s'il faut les recupérer de SignUP
// A vérifier si first_name&&last_name et SetFirstName&&SetLastName fonctionne dans value

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
  return (
    <Box
      sx={{
        width: "85%",
        margin: "auto",
        padding: "0 3rem 3rem 3rem",
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
            <div className="avatar">
              <FileUploadIcon />
            </div>
            <div className="avatar">
              <img
                src={avatar1}
                alt="avatar"
                style={{ height: "100%", width: "50%", borderRadius: "200px" }}
              />
            </div>
          </div>

          <div className="ageName" style={{ width: "80%" }}>
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
          <div className="profession" style={{ width: "80%" }}>
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
          <div className="skills" style={{ width: "80%" }}>
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
          <div className="languages" style={{ width: "80%" }}>
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
            display: "flex",
            flexDirection: "column",
            width: "70%",
            border: "1.5px solid black",
            borderRadius: 16,
            padding: "3rem 3rem 3rem 3rem",
          }}
        >
          <div className="nameBirthDate" style={{ display: "flex" }}>
            <div className="fistLastName" style={{ width: "40%" }}>
              <div className="form-group">
                <TextField
                  id="firstNameLastName"
                  label="Nom et Prénom"
                  variant="standard"
                  value={first_name && last_name}
                  onChange={(e) => setFirstName && setLastName(e.target.value)}
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
          <div className="adress" style={{ width: "80%" }}>
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
            <div className="phone" style={{ width: "40%" }}>
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
            <div className="researched_job" style={{ width: "80%" }}>
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
              <div className="job_search_location" style={{ width: "40%" }}>
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
            <div className="job_search_location" style={{ width: "80%" }}>
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
          <div>
            <div className="cv_upload">sds</div>
            <div className="cv_edit">sds</div>
          </div>
          <div>
            <div className="motivation_letter_upload">sds</div>
            <div className="motivation_letter_edit">sds</div>
            <div className="save_button">sds</div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default CandidateProfile;
