/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { React, useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useToken } from "../../context/TokenContext";

function CandidateProfile() {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [photoName, setPhotoName] = useState("");
  const [cvName, setCvName] = useState("");
  const [motivation_letterName, setMotivation_letterName] = useState("");

  const photoInputRef = useRef();
  const cvInputRef = useRef();
  const motivation_letterInputRef = useRef();

  const { VITE_BACKEND_URL } = import.meta.env;

  const { token } = useToken();
  let role = "";
  let userId = "";

  if (token) {
    const decodedToken = jwt_decode(token);
    role = decodedToken.role;
    userId = decodedToken.userId;
  }

  useEffect(() => {
    if (role.includes("ROLE_CANDIDATE")) {
      axios
        .get(`${VITE_BACKEND_URL}/userCandidate/${userId}`)
        .then((res) => {
          setData(res.data);
          setPhotoName(res.data.photo_url);
        })
        .catch((error) => console.warn(error));
    } else {
      axios
        .get(`${VITE_BACKEND_URL}/userHeadhunter/${userId}`)
        .then((res) => {
          setData(res.data);
          setPhotoName(res.data.photo_url);
        })
        .catch((error) => console.warn(error));
    }
  }, []);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = today.getMonth() - birthDateObj.getMonth();
    if (
      monthsDiff < 0 ||
      (monthsDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    return age;
  };

  const fullName = `${data.first_name} ${data.last_name}`;

  const age = calculateAge(data.birth_date);

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
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "25px",
            }}
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
                    console.warn(e.target.value);
                    setPhotoName(e.target.value.split("\\")[2]);
                  }}
                />
              </Button>
            </div>

            {/* <div>
              <Typography variant="body1" color="initial" sx={{ mb: "10px" }}>
                {photoName}
              </Typography>
            </div> */}
            <div className="avatar">
              <img
                src={`${VITE_BACKEND_URL}/uploads/${photoName}`}
                alt="avatar"
                style={{ height: "100%", width: "50%", borderRadius: "200px" }}
              />
            </div>
          </div>
          <div
            className="ageName"
            style={{
              width: "80%",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{ fontWeight: "bold" }}
            >{`${fullName} - ${age} years`}</div>
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
                value={data.profession}
                name="profession"
                onChange={handleChange}
                fullWidth
                InputProps={{
                  readOnly: false,
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
                value={data.skills}
                name="profession"
                onChange={handleChange}
                fullWidth
                InputProps={{
                  readOnly: false,
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
                value={data.languages}
                name="languages"
                onChange={handleChange}
                fullWidth
                InputProps={{
                  readOnly: false,
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
              <div
                className="fistName"
                style={{ width: "25%", paddingBottom: "10px" }}
              >
                <div className="form-group">
                  <TextField
                    id="firstName"
                    label="Prénom"
                    variant="standard"
                    value={data.first_name}
                    name="first_name"
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      readOnly: false,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div style={{ width: "10%", paddingBottom: "10px" }} />
              <div
                className="lastName"
                style={{ width: "25%", paddingBottom: "10px" }}
              >
                <div className="form-group">
                  <TextField
                    id="lastName"
                    label="Nom"
                    variant="standard"
                    value={data.last_name}
                    name="first_name"
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      readOnly: false,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div style={{ width: "10%" }} />
              <div
                className="birthDate"
                style={{ width: "30%", paddingBottom: "10px" }}
              >
                <div className="form-group">
                  <TextField
                    id="birth_date"
                    label="Date de naissance"
                    variant="outlined"
                    value={
                      data.birth_date
                        ? new Date(data.birth_date).toISOString().split("T")[0]
                        : ""
                    }
                    name="birth_date"
                    type="date"
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      readOnly: false,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
            </div>
            <div
              className="adress"
              style={{ width: "100%", paddingBottom: "10px" }}
            >
              <div className="form-group">
                <TextField
                  id="adress"
                  label="Adresse"
                  variant="standard"
                  value={data.adress}
                  name="adress"
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    readOnly: false,
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className="phoneEmail" style={{ display: "flex" }}>
              <div
                className="phone"
                style={{ width: "60%", paddingBottom: "10px" }}
              >
                <div className="form-group">
                  <TextField
                    id="phone"
                    label="Téléphone"
                    variant="standard"
                    value={data.phone}
                    name="phone"
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      readOnly: false,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div style={{ width: "10%" }} />
              <div
                className="email"
                style={{ width: "30%", paddingBottom: "10px" }}
              >
                <div className="form-group">
                  <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      readOnly: false,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div
                className="researched_job"
                style={{ width: "100%", paddingBottom: "10px" }}
              >
                <div className="form-group">
                  <TextField
                    id="researched_job"
                    label="Postes recherchés (max 3)"
                    variant="standard"
                    value={data.researched_job}
                    name="researched_job"
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      readOnly: false,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className="placeAndAvailability" style={{ display: "flex" }}>
                <div
                  className="job_search_location"
                  style={{ width: "60%", paddingBottom: "10px" }}
                >
                  <div className="form-group">
                    <TextField
                      id="job_search_location"
                      label="Lieu recherché"
                      variant="standard"
                      value={data.job_search_location}
                      name="job_search_location"
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        readOnly: false,
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
                <div style={{ width: "10%" }} />
                <div
                  className="availability_date"
                  style={{ width: "30%", paddingBottom: "10px" }}
                >
                  <div className="form-group">
                    <TextField
                      id="availability_date"
                      label="Disponible à partir de"
                      variant="outlined"
                      value={
                        data.availability_date
                          ? new Date(data.availability_date)
                              .toISOString()
                              .split("T")[0]
                          : ""
                      }
                      name="availability_date"
                      type="date"
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        readOnly: false,
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="profile_description">
              <div
                className="profile_description"
                style={{ width: "100%", paddingBottom: "10px" }}
              >
                <div className="form-group">
                  <TextField
                    id="profile_description"
                    label="Description de ta recherche"
                    variant="outlined"
                    placeholder="1000 caractères max"
                    value={data.profile_description}
                    name="profile_description"
                    onChange={handleChange}
                    fullWidth
                    inputProps={{ maxLength: 1000, readOnly: false }} // Set maximum character length
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
