/* eslint-disable camelcase */
import React from "react";
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
}) {
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

          <div className="ageName">
            <div className="form-group">
              <TextField
                id="firstName"
                label="Prénom"
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
          <div className="profession">
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
          <div className="skills">
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
          <div className="languages">
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
            padding: "1rem 3rem 3rem 3rem",
          }}
        >
          <div className="nameBD" style={{ display: "flex" }}>
            <div className="fistLastName" style={{ width: "50%" }}>
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
            <div className="birthDate" style={{ width: "50%" }}>
              fdfsssdssfd
            </div>
          </div>
          <div className="adress">dsds</div>
          <div className="phone">sds</div>
          <div className="email">sds</div>
          <div>
            <div className="researched_job">sds</div>
            <div className="availability_date">sds</div>
          </div>
          <div className="job_search_location">sds</div>
          <div className="profile_description">sds</div>
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
