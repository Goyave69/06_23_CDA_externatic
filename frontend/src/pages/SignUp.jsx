/* eslint-disable camelcase */
import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import logo from "../assets/Ressources/logo-externatic.png";
import ApiHelper from "../services/ApiHelper";
import { useToken } from "../context/TokenContext";
import SignUpCandidate from "../components/SignUpCandidate";
import SignUpHeadhunter from "../components/SignUpHeadhunter";

function Login() {
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isNextClicked, setIsNextClicked] = React.useState(false);

  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (first_name && last_name && email && password && role) {
      const data = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        role,
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

  const renderSignUpComponent = () => {
    if (isNextClicked) {
      if (role === "ROLE_CANDIDATE") {
        return <SignUpCandidate />;
      }
      if (role === "ROLE_HEADHUNTER") {
        return <SignUpHeadhunter />;
      }
    }
    return null;
  };

  const handleNextClick = () => {
    setIsNextClicked(true);
  };

  return (
    <div className="login-container">
      {!isNextClicked && (
        <div className="login-card">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Se connecter</h2>
          <form onSubmit={handleSubmit}>
            <div className="firstGroup">
              <div className="form-group">
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="form-group">
                <TextField
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="form-group">
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="form-group">
                <TextField
                  id="password"
                  label="Mot de passe"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  fullWidth
                />
              </div>
            </div>

            <div className="form-group">
              <FormControl component="fieldset">
                <label htmlFor="role">Role:</label>
                <RadioGroup
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  row
                >
                  <FormControlLabel
                    value="ROLE_HEADHUNTER"
                    control={<Radio />}
                    label="Recruteur"
                  />
                  <FormControlLabel
                    value="ROLE_CANDIDATE"
                    control={<Radio />}
                    label="Candidat"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <button type="submit" onClick={handleNextClick}>
              Next
            </button>
          </form>
        </div>
      )}
      {renderSignUpComponent()}
    </div>
  );
}

export default Login;
