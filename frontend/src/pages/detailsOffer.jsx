export default function DetailsOffer() {
  return (
    <div className="box">
      <div className="offer">
        {offres.map((offre) => (
          <div>
            <div key={offre.id} className="offerTitle">
              <p>{offre.nameOffre}</p>

              <button
                type="button"
                onClick={() => handleSelect(offre.id)}
                className="icon"
              >
                <img
                  src={`../src/assets/Ressources/Externatic/${
                    isFavorite(offre.id) ? "icon.svg" : "iconStar.svg"
                  }`}
                  alt="logo alt"
                />
              </button>
            </div>

            <div className="describe">
              <Link to="/detailsoffer">
                <strong>{offre.nameCompany}</strong> - {offre.codePostal}{" "}
                {offre.ville}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
