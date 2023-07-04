import React, { useState } from "react";
import "./Login.css";
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

function Login() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (firstName && lastName && email && password && role) {
      const data = JSON.stringify({
        firstName,
        lastName,
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

  const [showForm, setShowForm] = useState(true);

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Se connecter</h2>
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
              />
            </div>
            <div className="form-group">
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={lastName}
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
                    value="Recruteur"
                    control={<Radio />}
                    label="Recruteur"
                  />
                  <FormControlLabel
                    value="Candidat"
                    control={<Radio />}
                    label="Candidat"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <button onClick={() => setShowForm(false)} type="button">
              next
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                id="firstName"
                label="coucou"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
              />
            </div>
            <div className="form-group">
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={lastName}
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
                    value="Recruteur"
                    control={<Radio />}
                    label="Recruteur"
                  />
                  <FormControlLabel
                    value="Candidat"
                    control={<Radio />}
                    label="Candidat"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <button type="submit">Connexion</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
