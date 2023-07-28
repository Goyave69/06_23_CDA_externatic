import React, { useEffect, useState } from "react";
import axios from "axios";
import OfferSearch from "./offerSearch";
import DetailsOffer from "./detailsOffer";
import ApplyOffer from "./ApplyOffer";

function Pageoffer() {
  const [selectedOffer, setselectedOffer] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [datas, setdatas] = useState([]);
  const [postuler, setPostuler] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5555/job_offers")
      .then((response) => {
        setdatas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/job_offers");
  //       setdatas(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //----------------------------------------------------
  // Pour attendre le chargement de données.
  console.warn(datas);
  if (datas.length === 0) {
    return <div>Chargement en cours...</div>;
  }
  //----------------------------------------------------
  const handleSelect = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorie) => favorie !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  const isFavorite = (idFav) => {
    return favorites.includes(idFav);
  };

  // const offres = [
  //   {
  //     id: 1,
  //     namedata: "Alternance-Développeur Full Stack H/F",
  //     nameCompany: "Atos",
  //     codePostal: "69100",
  //     ville: "Villeurbanne",
  //     job_description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae minima hic inventore eum asperiores sequi, aliquam eius incidunt tempora eveniet fugiat adipisci. Cupiditate maiores rem corporis ex, neque possimus.",
  //   },
  // ];
  const getselectedOffer = () => {
    return datas.filter((data) => {
      return data.id === selectedOffer;
    })[0];
  };
  return (
    <div style={{ display: "flex", padding: "10px ", gap: "3%" }}>
      <div style={{ width: "80%" }}>
        <OfferSearch
          datas={datas}
          setselectedOffer={setselectedOffer}
          handleSelect={handleSelect}
          isFavorite={isFavorite}
        />
      </div>
      <div style={{ width: "80%" }}>
        {postuler ? (
          <ApplyOffer
            data={selectedOffer !== 0 ? getselectedOffer() : datas[0]}
            handleSelect={handleSelect}
            isFavorite={isFavorite}
          />
        ) : (
          <DetailsOffer
            data={selectedOffer !== 0 ? getselectedOffer() : datas[0]}
            handleSelect={handleSelect}
            isFavorite={isFavorite}
            setPostuler={setPostuler}
          />
        )}
      </div>
    </div>
  );
}

export default Pageoffer;
