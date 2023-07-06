import { Link } from "react-router-dom";
import OfferSearch from "./offerSearch";
import "./applyOffer.css";

export default function ApplyOffer() {
  return (
    <div className="apply">
      <div>
        <OfferSearch />
      </div>
      <div className="box">
        <div className="offerTitle">
          <p>Alternance-Développeur Full Stack H/F</p>
          <div>
            <img
              src="./src/assets/Ressources/Externatic/icon.svg"
              alt="favorie"
            />
            <img
              src="./src/assets/Ressources/Externatic/iconpetitmenu.svg"
              alt="favorie"
            />
          </div>
        </div>

        <div className="describe">
          <strong>Atos</strong> - 69100 villeurbanne
        </div>
        <div className="btnContenu">
          <div>
            {" "}
            <buttun className="btnTelechargement">
              TÉLÉCHARGER LE CV{" "}
              <img
                src="./src/assets/Ressources/Externatic/icontelechargement.svg"
                alt="téléchargement cv"
              />
            </buttun>
            <buttun className="btnTelechargement">
              TÉLÉCHARGER LA LETTRE DE MOTIVATION{" "}
              <img
                src="./src/assets/Ressources/Externatic/icontelechargement.svg"
                alt="télécharger lettre de motivation"
              />
            </buttun>
          </div>
          <div>
            <buttun className="btnDoc">
              CV_JHON_DOE.PDF{" "}
              <img
                src="./src/assets/Ressources/Externatic/iconpetitmenu.svg"
                alt="menu"
              />
            </buttun>
            <buttun className="btnDoc">
              <div>lM_JHON_DOE.PDF</div>
              <div>
                <img
                  src="./src/assets/Ressources/Externatic/iconpetitmenu.svg"
                  alt="menu"
                />
              </div>
            </buttun>
          </div>
        </div>
        <div>
          <Link to="/">
            <button className="btn" type="button">
              POSTULER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
