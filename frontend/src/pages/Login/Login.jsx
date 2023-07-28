import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Ressources/logo-externatic.png";
import ApiHelper from "../../services/ApiHelper";
import { useToken } from "../../context/TokenContext";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      const data = JSON.stringify({ email, password });
      ApiHelper("/login", "POST", null, data)
        .then((response) => response.json())
        .then((result) => {
          console.error(result.token);
          if (result.token) {
            setToken(result.token);
          }
          navigate("/");
        });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Identifiant:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button type="submit">Connexion</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
