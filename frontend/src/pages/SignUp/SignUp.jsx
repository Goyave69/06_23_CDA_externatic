/* eslint-disable camelcase */
import { React, useRef, useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import logo from "../../assets/Ressources/logo-externatic.png";
import ApiHelper from "../../services/ApiHelper";
import { useToken } from "../../context/TokenContext";
import SignUpCandidate from "../../components/SignUpCandidate";
import SignUpHeadhunter from "../../components/SignUpHeadhunter";

function SignUp() {
  // User states
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [phone, setPhone] = useState("");
  const [profile_description, setProfile_description] = useState("");
  const [adress, setAdress] = useState("");

  // Candidate states

  const [profession, setProfession] = useState("");
  const [researched_job, setResearched_job] = useState("");
  const [job_search_location, setJob_search_location] = useState("");
  const [availability_date, setAvailability_date] = useState("");
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [cv_url, setCv_url] = useState("");
  const [motivation_letter_url, setMotivation_letter_url] = useState("");

  // Heahhunter states

  const [skills_area, setSkills_area] = useState("");
  const [research_sector, setResearch_sector] = useState("");

  const [isNextClicked, setIsNextClicked] = useState(false);

  const { setToken } = useToken();
  const navigate = useNavigate();

  const photoInputRef = useRef();
  const cvInputRef = useRef();
  const motivation_letterInputRef = useRef();

  const handleSubmitCandidate = async (event) => {
    const formData = new FormData();
    event.preventDefault();
    if (
      first_name &&
      last_name &&
      email &&
      password &&
      role &&
      birth_date &&
      phone &&
      profile_description &&
      adress &&
      profession &&
      researched_job &&
      job_search_location &&
      availability_date &&
      skills &&
      languages &&
      cv_url &&
      motivation_letter_url
    ) {
      const data = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        role,
        birth_date,
        phone,
        profile_description,
        adress,
        profession,
        researched_job,
        job_search_location,
        availability_date,
        skills,
        languages,
        cv_url,
        motivation_letter_url,
      });
      formData.append("data", data);
      formData.append("photo", photoInputRef.current.files[0]);
      formData.append("cv", cvInputRef.current.files[0]);
      formData.append(
        "motivation_letter",
        motivation_letterInputRef.current.files[0]
      );

      await ApiHelper("/login", "POST", null, data)
        .then((response) => response.json())
        .then((result) => {
          console.error(result.token);
          return setToken(result.token);
        })
        .then(() => navigate("/"));
    }
  };

  const handleSubmitHeadhunter = async (event) => {
    const formData = new FormData();
    event.preventDefault();
    if (
      first_name &&
      last_name &&
      email &&
      password &&
      role &&
      birth_date &&
      phone &&
      profile_description &&
      adress &&
      skills_area &&
      research_sector
    ) {
      const data = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        role,
        birth_date,
        phone,
        profile_description,
        adress,
        skills_area,
        research_sector,
      });
      formData.append("data", data);
      formData.append("photo", photoInputRef.current.files[0]);
      formData.append("cv", cvInputRef.current.files[0]);
      formData.append(
        "motivation_letter",
        motivation_letterInputRef.current.files[0]
      );
      await ApiHelper("/login", "POST", null, data)
        .then((response) => response.json())
        .then((result) => {
          console.error(result.token);
          return setToken(result.token);
        })
        .then(() => navigate("/"));
    }
  };
  const handlePreviousClick = () => {
    setIsNextClicked(!isNextClicked);
  };

  const renderSignUpComponent = () => {
    if (isNextClicked) {
      if (role === "ROLE_CANDIDATE") {
        return (
          <SignUpCandidate
            birth_date={birth_date}
            setBirth_date={setBirth_date}
            phone={phone}
            setPhone={setPhone}
            profile_description={profile_description}
            setProfile_description={setProfile_description}
            adress={adress}
            setAdress={setAdress}
            profession={profession}
            setProfession={setProfession}
            researched_job={researched_job}
            setResearched_job={setResearched_job}
            job_search_location={job_search_location}
            setJob_search_location={setJob_search_location}
            availability_date={availability_date}
            setAvailability_date={setAvailability_date}
            skills={skills}
            setSkills={setSkills}
            languages={languages}
            setLanguages={setLanguages}
            cv_url={cv_url}
            setCv_url={setCv_url}
            motivation_letter_url={motivation_letter_url}
            setMotivation_letter_url={setMotivation_letter_url}
            handleSubmitCandidate={handleSubmitCandidate}
            handlePreviousClick={handlePreviousClick}
            photoInputRef={photoInputRef}
            cvInputRef={cvInputRef}
            motivation_letterInputRef={motivation_letterInputRef}
          />
        );
      }
      if (role === "ROLE_HEADHUNTER") {
        return (
          <SignUpHeadhunter
            birth_date={birth_date}
            setBirth_date={setBirth_date}
            phone={phone}
            setPhone={setPhone}
            profile_description={profile_description}
            setProfile_description={setProfile_description}
            adress={adress}
            setAdress={setAdress}
            skills_area={skills_area}
            setSkills_area={setSkills_area}
            research_sector={research_sector}
            setResearch_sector={setResearch_sector}
            handleSubmitHeadhunter={handleSubmitHeadhunter}
            handlePreviousClick={handlePreviousClick}
            photoInputRef={photoInputRef}
          />
        );
      }
    }
    return null;
  };

  const handleNextClick = () => {
    setIsNextClicked(!isNextClicked);
  };

  return (
    <div className="login-container">
      {!isNextClicked && (
        <div className="login-card">
          <img src={logo} alt="Logo" className="logo" />
          <h2>S'enregistrer</h2>
          <form>
            <div className="firstGroup">
              <div className="form-group">
                <TextField
                  id="firstName"
                  label="Prénom"
                  variant="outlined"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="form-group">
                <TextField
                  id="lastName"
                  label="Nom"
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
              <div className="form-group">
                <TextField
                  id="password_confirmation"
                  label="Cofirmation mot de passe"
                  variant="outlined"
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  type="password"
                  fullWidth
                />
                {password !== password_confirmation && (
                  <p className="error-message">Mot de passe incorrect</p>
                )}
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
            <Button
              variant="contained"
              type="submit"
              disabled={
                !(
                  first_name &&
                  last_name &&
                  email &&
                  password &&
                  password_confirmation &&
                  role &&
                  password === password_confirmation
                )
              }
              onClick={handleNextClick}
              sx={{ backgroundColor: "#CA2061" }}
            >
              Suivant
            </Button>
          </form>
        </div>
      )}
      {renderSignUpComponent()}
    </div>
  );
}

export default SignUp;
