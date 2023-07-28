/* eslint-disable camelcase */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import jwt_decode from "jwt-decode";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { InputAdornment, TextField } from "@mui/material";
import { useToken } from "../context/TokenContext";
import logo from "../assets/Ressources/logo-externatic.png";

const options = [
  { label: "Candidate", route: "/candidateProfile" },
  { label: "Companies", route: "/company" },
  { label: "Head Hunters", route: "/headHunter" },
  { label: "Login", route: "/login" },
  { label: "Logout", route: "/logout" },
];
const ITEM_HEIGHT = 48;

export default function Header() {
  const { token, setToken } = useToken();
  let firstName = "";
  let lastName = "";
  let role = "";

  if (token) {
    const decodedToken = jwt_decode(token);
    firstName = decodedToken.first_name;
    lastName = decodedToken.last_name;
    role = decodedToken.role;
  }
  const isAdmin = role.includes("ROLE_ADMIN");

  const navigate = useNavigate();
  const location = useLocation();
  const isCandidateProfile =
    location.pathname === "/candidateProfile" ||
    location.pathname === "/headhunterProfile";

  const handleSignUpLogOut = () => {
    if (token) {
      setToken(null);
      navigate("/");
    } else {
      navigate("/signUp");
    }
  };
  const logoutSignUpButtonText = token ? "Déconnexion" : "Enregistrement";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ mb: "3rem" }}>
      <Box sx={{ width: "100%" }}>
        <Box
          className="topBar"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80% ",
            margin: "auto",
          }}
        >
          <Box className="boxMenu">
            <MenuRoundedIcon
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ width: "50px", height: "50px" }}
            />
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <NavLink key={option.label} to={option.route}>
                  <MenuItem
                    selected={option.label === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option.label}
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Box className="Admin buttons" style={{ gap: "35px" }}>
            {/* affichage conditionnel en fonction du role : boutons pour admin */}
            {isAdmin && (
              <>
                <NavLink className="userDashboard" to="/offersDashboard">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      width: "150px",
                      borderRadius: 35,
                      height: "60%",
                    }}
                  >
                    Offres
                  </Button>
                </NavLink>
                <NavLink className="userDashboard" to="/userDashboard">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      width: "150px",
                      borderRadius: 35,
                      height: "60%",
                    }}
                  >
                    Candidats
                  </Button>
                </NavLink>
                <NavLink className="userDashboard" to="/companydashboard">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      width: "150px",
                      borderRadius: 35,
                      height: "60%",
                    }}
                  >
                    Entreprises
                  </Button>
                </NavLink>
              </>
            )}
          </Box>
          <Box
            className="rightButtons"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            {!firstName && !lastName && (
              <NavLink to="/login">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "black",
                    width: "120px",
                    borderRadius: 35,
                    height: "50%",
                  }}
                >
                  CONNEXION
                </Button>
              </NavLink>
            )}

            {firstName &&
              lastName &&
              (role.includes("ROLE_CANDIDATE") ||
              role.includes("ROLE_HEADHUNTER") ? (
                <NavLink
                  className="candidate"
                  to={
                    role.includes("ROLE_CANDIDATE")
                      ? "/candidateProfile"
                      : "/headhunterProfile"
                  }
                >
                  <Button
                    className="user-info"
                    variant="contained"
                    style={{
                      display: "flex",
                      backgroundColor: "black",
                      borderRadius: 35,
                      height: "50%",
                      textTransform: "uppercase",
                    }}
                  >
                    <PersonIcon />
                    &nbsp;&nbsp;{firstName} {lastName}
                  </Button>
                </NavLink>
              ) : null)}

            <NavLink className="logoutSignUp">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  width: "200px",
                  borderRadius: 35,
                  height: "50%",
                }}
                onClick={handleSignUpLogOut}
              >
                {logoutSignUpButtonText}
              </Button>
            </NavLink>
          </Box>
        </Box>
        <div
          className="logoAndMessage"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NavLink tp="/">
            <img
              src={logo}
              alt="logo externatic"
              style={{
                width: "600px",
                height: "auto",
              }}
            />
          </NavLink>
          <Typography variant="h3" sx={{ fontSize: 30, mb: "25px" }}>
            Plus qu'un cabinet de recrutement
          </Typography>
        </div>
        {!isCandidateProfile && (
          <div className="hiddenNavbar">
            <Box
              className="searchBarTop"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: "140px",
                marginRight: "140px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 350,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Job recherché"
                  variant="filled"
                  sx={{ backgroundColor: "lightGrey", width: "400px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <TextField
                id="outlined-basic"
                label="Où"
                variant="filled"
                sx={{ backgroundColor: "lightGrey", width: "400px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                style={{ backgroundColor: "#CA2061", width: "200px" }}
              >
                RECHERCHE
              </Button>
            </Box>
            <Box className="contractType">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  mt: "25px",
                  mb: "25px",
                  marginLeft: "140px",
                  marginRight: "140px",
                }}
              >
                <FormControlLabel control={<Checkbox />} label="CDD" />
                <FormControlLabel control={<Checkbox />} label="CDI" />
                <FormControlLabel control={<Checkbox />} label="Stage" />
                <FormControlLabel control={<Checkbox />} label="Alternance" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Temps partiel"
                />
                <FormControlLabel control={<Checkbox />} label="Télé-travail" />
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-simple-select-label">Salaire</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Salaire"
                    onChange={handleChange}
                    sx={{ borderRadius: 2.5 }}
                  >
                    <MenuItem value={10}>2500€-3000€</MenuItem>
                    <MenuItem value={20}>3500€-4000€</MenuItem>
                    <MenuItem value={30}>4500€-5000€</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              className="companiesOffers"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: "340px",
                marginRight: "340px",
              }}
            >
              <NavLink to="/company">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#CA2061", width: "200px" }}
                >
                  Entreprises
                </Button>
              </NavLink>
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-small-label">Secteur</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Job Field"
                  onChange={handleChange}
                >
                  <MenuItem value="">Cyber-securité</MenuItem>
                  <MenuItem value={10}>Big Data</MenuItem>
                  <MenuItem value={20}>Inteligence Artificielle</MenuItem>
                  <MenuItem value={30}>Applications web & mobile</MenuItem>
                  <MenuItem value={30}>Systèmes embarqués</MenuItem>
                </Select>
              </FormControl>
              <NavLink to="/jobOffers">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#CA2061", width: "200px" }}
                >
                  Offres d'emploi
                </Button>
              </NavLink>
            </Box>
          </div>
        )}
      </Box>
    </Box>
  );
}
