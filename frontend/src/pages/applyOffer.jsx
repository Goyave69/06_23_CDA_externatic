import { Link } from "react-router-dom";
import OfferSearch from "./offerSearch";
import "./applyOffer.css";

export default function ApplyOffer() {
  return (
    <div className="apply">
      <div>
        <OfferSearch />
      </div>
      <div className="boite">
        <div className="offerTitle" style={{ display: "flex" }}>
          <div className="describe">
            <div>
              <p>Alternance-Développeur Full Stack H/F</p>
            </div>
            <div>
              {" "}
              <strong>Atos</strong> - 69100 villeurbanne
            </div>
          </div>
          <div>
            <img
              style={{ width: "20px" }}
              src="./src/assets/Ressources/Externatic/icon.svg"
              alt="favorie"
            />
            <img
              style={{ width: "5px" }}
              src="./src/assets/Ressources/Externatic/iconpetitmenu.svg"
              alt="favorie"
            />
          </div>
        </div>

        <div className="btnContenu">
          <div
            style={{
              display: "flex",
              flexdirection: "row",
              aligncontent: "space-around",
              alignitems: "inherit",
            }}
          >
            <div>
              <div className="btnTelechargement_0">
                <buttun>
                  TÉLÉCHARGER LE CV{" "}
                  <img
                    src="./src/assets/Ressources/Externatic/icontelechargement.svg"
                    alt="téléchargement cv"
                  />
                </buttun>
              </div>
              <div className="btnTelechargement_1">
                {" "}
                <buttun>
                  TÉLÉCHARGER LA LETTRE DE MOTIVATION{" "}
                  <img
                    src="./src/assets/Ressources/Externatic/icontelechargement.svg"
                    alt="télécharger lettre de motivation"
                  />
                </buttun>
              </div>
            </div>
          </div>
          <div>
            <buttun className="btnDoc">
              CV_JHON_DOE.PDF{" "}
              <img
                style={{ width: "5px" }}
                src="./src/assets/Ressources/Externatic/iconpetitmenu.svg"
                alt="menu"
              />
            </buttun>
            <buttun className="btnDoc">
              <div>lM_JHON_DOE.PDF</div>
              <div>
                <img
                  style={{ width: "5px" }}
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
