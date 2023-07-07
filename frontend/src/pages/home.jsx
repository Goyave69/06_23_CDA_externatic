import React from "react";
import Box from "@mui/material/Box";
import logo from "../assets/Ressources/logo-externatic.png";
import image1 from "../assets/Ressources/image1.svg";
import image3 from "../assets/Ressources/image3.avif";
import image4 from "../assets/Ressources/image4.avif";

function Home() {
  return (
    <Box
      sx={{
        p: 0.5,
        border: "1.5px solid black",
        borderRadius: 16,
        width: "85%",
        margin: "auto",
        padding: "0 3rem 3rem 3rem",
        textAlign: "justify",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="logo entreprise externatic"
          style={{ transform: "scale(0.5)", margin: "0" }}
        />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "10%",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                margin: "0",
                paddingBottom: "1.5rem",
              }}
            >
              Notre proximité
            </h2>
            <div style={{ fontSize: "1.5rem" }}>
              L’expérience professionnelle est une chose. L’expérience de vie en
              est une autre. Alors nos consultants prennent le temps de faire
              connaissance avec chaque personne, pour comprendre le contexte, le
              parcours, les envies et les projets.
              <p /> Notre expertise en placements de profils IT et notre
              connaissance du marché nous permettent de vous accompagner sur
              tous vos besoins en recrutements et de vous aiguiller de A à Z
              dans votre recherche. Faites confiance à Externatic pour dénicher
              votre prochain talent !
            </div>
          </div>
          <div style={{ height: "100%", width: "50%" }}>
            <img
              src={image1}
              alt="people home page 1"
              style={{ height: "100%", width: "100%", marginTop: "25%" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "10%", marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                margin: "0",
                paddingBottom: "1.5rem",
              }}
            >
              Notre performance
            </h2>
            <div style={{ fontSize: "1.5rem" }}>
              Notre réseau est une force et nous y travaillons sans relâche.
              Notre expérience nous permet d’identifier les vrais besoins d’une
              entreprise et de ceux qui la rejoignent.
              <p />
              Nos consultants sont à votre écoute quel que soit votre secteur
              d’activité. En tant que cabinet de recrutement, notre rôle est de
              créer une rencontre fructueuse entre candidat et recruteur, au
              service des projets et des ambitions de votre entreprise. Notre
              challenge est de trouver l’équipe qui fonctionnera ensemble de
              manière professionnelle et personnelle, pour aller jusqu’au bout
              d’un projet commun.
            </div>
          </div>
          <div style={{ height: "100%", width: "50%" }}>
            <img
              src={image3}
              alt="people home page 3"
              style={{ height: "100%", width: "100%", marginTop: "15%" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "10%",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                margin: "0",
                paddingBottom: "1.5rem",
              }}
            >
              Notre durabilité
            </h2>
            <div style={{ fontSize: "1.5rem" }}>
              Experts en placement de profils IT, notre mission est de trouver
              le talent en adéquation à la fois avec le poste, mais également
              avec votre entreprise ! Pour cela, notre équipe de consultants
              déploie différentes stratégies de recherche afin de trouver le
              meilleur profil pour le poste : diffusion de votre annonce sur
              plus de 20 plateformes, approche directe sur LinkedIn ou encore
              recherche dans notre vivier de candidats qualifiés.
              <p /> Notre responsabilité vis-à-vis des impacts de nos décisions
              et nos actions sur le long-terme correspondent également à notre
              politique RSE.
            </div>
          </div>
          <div style={{ height: "100%", width: "50%" }}>
            <img
              src={image4}
              alt="people home page 4"
              style={{ height: "100%", width: "100%", marginTop: "15%" }}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
export default Home;
