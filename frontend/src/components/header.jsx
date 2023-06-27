import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import logo from "../assets/Ressources/logo-externatic.png";

const options = ["Candidate", "Companies", "Head Hunters", "Login", "Logout"];
const ITEM_HEIGHT = 48;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
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
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <MenuRoundedIcon
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ width: "50px", height: "50px", mt: "20px", ml: "-140px" }}
            >
              <MoreVertIcon />
            </MenuRoundedIcon>
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
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img
            src={logo}
            alt="logo externatic"
            style={{ width: "600px", height: "auto" }}
          />
          <Box
            sx={{
              mt: "20px",
              mr: "-120px",
              display: "flex",
              flexDirection: "row",
              gap: "3rem",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                width: "120px",
                borderRadius: 35,
                height: "50%",
              }}
            >
              CANDIDAT
            </Button>
            {/* <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                width: "120px",
                borderRadius: 35,
              }}
            >
              COMPANIES
            </Button> */}
            <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                width: "120px",
                borderRadius: 35,
                height: "50%",
              }}
            >
              ENTREPRISE
            </Button>
            {/* <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                width: "120px",
                borderRadius: 35,
              }}
            >
              Logout
            </Button> */}
          </Box>
        </Box>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontSize: 40, mb: "25px" }}
        >
          Plus qu'un cabinet de recrutement
        </Typography>
        <Box
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
            <AppBar
              position="static"
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "lightGrey",
              }}
            >
              <Toolbar sx={{ backgroundColor: "lightGrey", color: "black" }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Offres d'emploi"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Toolbar>
            </AppBar>
          </Box>
          <Box sx={{ width: "100%", maxWidth: 350 }}>
            <AppBar
              position="static"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: "lightGrey",
              }}
            >
              <Toolbar sx={{ backgroundColor: "lightGrey", color: "black" }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Où"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Toolbar>
            </AppBar>
          </Box>
          <Button
            variant="contained"
            style={{ backgroundColor: "#CA2061", width: "200px" }}
          >
            RECHERCHE
          </Button>
        </Box>
        <Box>
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
            <FormControlLabel control={<Checkbox />} label="Temps partiel" />
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
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginLeft: "340px",
            marginRight: "340px",
          }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#CA2061", width: "200px" }}
          >
            Entreprises
          </Button>
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
          <Button
            variant="contained"
            style={{ backgroundColor: "#CA2061", width: "200px" }}
          >
            Offres d'emploi
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
