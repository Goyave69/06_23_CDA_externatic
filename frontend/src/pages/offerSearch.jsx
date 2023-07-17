import { NavLink } from "react-router-dom";
import "./offerSearch.css";
import { useState } from "react";

export default function OfferSearch() {
  const [favorites, setFavorites] = useState([]);
  const offres = [
    {
      id: 1,
      nameOffre: "Alternance-Développeur Full Stack H/F",
      nameCompany: "Atos",
      codePostal: "69100",
      ville: "Villeurbanne",
      job_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
    },
    {
      id: 2,
      nameOffre: "Développeur H/F",
      nameCompany: "YESSS Electrique",
      codePostal: "69340",
      ville: "Francheville",
      job_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
    },
    {
      id: 3,
      nameOffre: "Développeur Full Stack (PHP Symfony) - H/F",
      nameCompany: "Seyos",
      codePostal: "69003",
      ville: "Lyon",
      salary_min: "32 000 €",
      salary_max: "50 000€",
      contract_type: "Temps plein,CDI",
      job_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
    },
    {
      id: 4,
      nameOffre: "Développeur back-end PHP/Laravel H/F",
      nameCompany: "HelloCSE",
      codePostal: "69007",
      ville: "Lyon",
      salary_min: "32 000 €",
      salary_max: "50 000€",
      contract_type: "Temps plein, CDI",
      job_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
    },
    {
      id: 5,
      nameOffre: "Alternance-Développeur Full Stack H/F",
      nameCompany: "Atos",
      codePostal: "69100",
      ville: "Villeurbanne",
      job_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
    },
    {
      id: 6,
      nameOffre: "Développeur H/F",
      nameCompany: "YESSS Electrique",
      codePostal: "69340",
      ville: "Francheville",
      job_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
    },
    {
      id: 7,
      nameOffre: "Développeur Full Stack (PHP Symfony) - H/F",
      nameCompany: "Seyos",
      codePostal: "69003",
      ville: "Lyon",
      salary_min: "32 000 €",
      salary_max: "50 000€",
      contract_type: "Temps plein,CDI",
      job_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
    },
    {
      id: 8,
      nameOffre: "Développeur back-end PHP/Laravel H/F",
      nameCompany: "HelloCSE",
      codePostal: "69007",
      ville: "Lyon",
      salary_min: "32 000 €",
      salary_max: "50 000€",
      contract_type: "Temps plein, CDI",
      job_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
    },
  ];

  const handleSelect = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorie) => favorie !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return (
    <div className="bordure">
      <div className="box">
        <div className="offer">
          {offres.map((offre) => (
            <div className="suboffer">
              <titre key={offre.id} className="offerTitle">
                <NavLink to="/detailsoffer">
                  <p>{offre.nameOffre}</p>
                  <strong>{offre.nameCompany}</strong> - {offre.codePostal}{" "}
                  {offre.ville}
                </NavLink>
              </titre>
              <button
                className="btnEtoile"
                type="button"
                onClick={() => handleSelect(offre.id)}
              >
                <img
                  src={`../src/assets/Ressources/Externatic/${
                    isFavorite(offre.id) ? "icon.svg" : "iconStar.svg"
                  }`}
                  alt="logo alt"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
