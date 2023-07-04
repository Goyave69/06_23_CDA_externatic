import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
// import {
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
// } from "@mui/material";
// import logo from "../assets/Ressources/logo-externatic.png";
import ApiHelper from "../services/ApiHelper";
import { useToken } from "../context/TokenContext";

function Login() {
  const inputFieldsUser = [
    {
      name: "password",
      label: "Mot de passe",
      placeholder: "Mot de passe",
    },
    {
      name: "first_name",
      label: "Prénom",
      placeholder: "Prénom",
    },
    { name: "last_name", label: "Nom", placeholder: "Nom" },
    {
      name: "username",
      label: "Pseudo",
      placeholder: "Pseudo",
    },
    { name: "email", label: "Email", placeholder: "Email" },
    {
      name: "birth_date",
      label: "Date de naissance",
      placeholder: "Date de naissance",
    },
    {
      name: "phone",
      label: "Téléhone",
      placeholder: "Téléhone",
    },
    {
      name: "photo_url",
      label: "Photo URL",
      placeholder: "Photo URL",
    },
    {
      name: "profile_description",
      label: "Description du profile",
      placeholder: "Description du profile",
    },
    {
      name: "adress",
      label: "Adresse",
      placeholder: "Adresse",
    },
  ];

  const inputFieldsCandidate = [
    {
      name: "job_title",
      label: "Titre du poste",
      placeholder: "Titre du poste",
    },
    {
      name: "profession",
      label: "Profession",
      placeholder: "Profession",
    },
    {
      name: "researched_job",
      label: "Postes recherchés",
      placeholder: "Postes recherchés",
    },
    {
      name: "job_search_location",
      label: "Lieu recherché",
      placeholder: "Lieu recherché",
    },
    {
      name: "availability_date",
      label: "Disponible à partir de",
      placeholder: "Disponible à partir de",
    },
    {
      name: "skills",
      label: "Compétences",
      placeholder: "Compétences",
    },
    {
      name: "languages",
      label: "Langues",
      placeholder: "Photo URL",
    },
    {
      name: "cv_url",
      label: "CV_URL",
      placeholder: "CV_URL",
    },
    {
      name: "motivation_letter_url",
      label: "LM_URL",
      placeholder: "LM_URL",
    },
    {
      name: "skills_area",
      label: "Adresse",
      placeholder: "Adresse",
    },
    {
      name: "research_sector",
      label: "Adresse",
      placeholder: "Adresse",
    },
  ];
  const inputFieldsHeadhunter = [
    {
      name: "skills_area",
      label: "Domaine de compétences",
      placeholder: "Domaine de compétences",
    },
    {
      name: "research_sector",
      label: "Secteur de recherche",
      placeholder: "Secteur de recherche",
    },
  ];
  const [dataFormUser, setDataFormUser] = React.useState({
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "user",
    birth_date: "",
    phone: "",
    photo_url: "ijdiozejdiozejdoz",
    profile_description: "",
    adress: "",
    suscription_date: "",
    status: "",
  });

  const [dataFormCandidate, setDataFormCandidate] = React.useState({
    job_title: "",
    profession: "",
    researched_job: "",
    job_search_location: "",
    availability_date: "",
    skills: "",
    languages: "",
    cv_url: "sdfsfs",
    motivation_letter_url: "dqdqdqs",
  });

  const [dataFormHeadhunter, setDataFormHeadhunter] = React.useState({
    skills_area: "fdfgdgs",
    research_sector: "sfssf",
  });

  const { setToken } = useToken();
  const navigate = useNavigate();

  const SubmitSignUpUser = () => {
    ApiHelper("users", "post", dataFormUser).then((res, error) => {
      if (res.status === 201) {
        toast.success(
          `Bienvenue ${dataFormUser.firstname}, votre compte a bien été créé !`
        );
        navigate("/connect");
      } else {
        console.warn("erreur", error);
      }
    });
  };

  const SubmitSignUpCandidate = () => {
    ApiHelper("users", "post", dataFormCandidate).then((res, error) => {
      if (res.status === 201) {
        toast.success(
          `Bienvenue ${dataFormCandidate.firstname}, votre compte a bien été créé !`
        );
        navigate("/connect");
      } else {
        console.warn("erreur", error);
      }
    });
  };

  const SubmitSignUpHeadhunter = () => {
    ApiHelper("users", "post", dataFormHeadhunter).then((res, error) => {
      if (res.status === 201) {
        toast.success(
          `Bienvenue ${dataFormHeadhunter.firstname}, votre compte a bien été créé !`
        );
        navigate("/connect");
      } else {
        console.warn("erreur", error);
      }
    });
  };

  const handleChangeUser = (e) => {
    setDataFormUser({
      ...dataFormUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeHeadhunter = (e) => {
    setDataFormHeadhunter({
      ...dataFormHeadhunter,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCandidate = (e) => {
    setDataFormCandidate({
      ...dataFormCandidate,
      [e.target.name]: e.target.value,
    });
  };

  const [showForm, setShowForm] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          backgroundSize: "contain",
          width: "50%",
          height: "89vh",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box>
        <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "center", py: "10px", px: "10vw" }}
        >
          Bienvenue dans l'équipe !
        </Typography>
        <Box sx={{ marginTop: "5%" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100vw", md: "50vw" },
            }}
          >
            {showForm ? (
              <form onSubmit={handleChangeUser}>
                {inputFieldsUser.map((field) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    key={field.name}
                  >
                    <img src={field.icon} alt="" />
                    <TextField
                      onChange={handleChangeUser}
                      required
                      name={field.name}
                      id={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      InputProps={{
                        style: { margin: "10px", borderRadius: "30px" },
                      }}
                    />
                  </Box>
                ))}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={SubmitSignUpUser}
                    sx={{ backgroundColor: "red", width: "35%" }}
                    variant="contained"
                  >
                    Next
                  </Button>
                </Box>
              </form>
            ) : (
              // Render the next step of the form
              <form onSubmit={handleChangeCandidate}>
                {role ==="Candidat" ? (inputFieldsCandidate.map((field) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    key={field.name}
                  >
                    <img src={field.icon} alt="" />
                    <TextField
                      onChange={handleChangeCandidate}
                      required
                      name={field.name}
                      id={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      InputProps={{
                        style: { margin: "10px", borderRadius: "30px" },
                      }}
                    />
                  </Box>
                )))}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={SubmitSignUpCandidate}
                    sx={{ backgroundColor: "red", width: "35%" }}
                    variant="contained"
                  >
                    S'inscrire
                  </Button>
                </Box>
              </form>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  ):((inputFieldsHeadhunter.map((field) => (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      key={field.name}
    >
      <img src={field.icon} alt="" />
      <TextField
        onChange={handleChangeHeadhunter}
        required
        name={field.name}
        id={field.name}
        label={field.label}
        placeholder={field.placeholder}
        InputProps={{
          style: { margin: "10px", borderRadius: "30px" },
        }}
      />
    </Box>
  )))}
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Button
      onClick={SubmitSignUpHeadhunter}
      sx={{ backgroundColor: "red", width: "35%" }}
      variant="contained"
    >
      S'inscrire
    </Button>
  </Box>
</form>
)}
</Box>
</Box>
</Box>
</Box>);
} 
export default Login;
