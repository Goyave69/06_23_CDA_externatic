import "./offerSearch.css";

export default function OfferSearch({
  datas,
  setselectedOffer,
  handleSelect,
  isFavorite,
}) {
  return (
    <div className="bordureOffres">
      <div style={{ height: "95vh", overflow: "auto", margin: "10px" }}>
        {datas.map((data) => (
          <div className="offres" key={data.id}>
            <button
              type="button"
              style={{ color: "black", backgroundColor: "transparent" }}
              onClick={() => setselectedOffer(data.id)}
            >
              <h3 style={{ fontSize: "2rem" }}>{data.name}</h3>
              <p>
                <strong style={{ fontSize: "1.5rem" }}>{data.name}</strong> -{" "}
                {data.location}
              </p>
            </button>

            <button
              style={{ backgroundColor: "transparent", width: "20%" }}
              type="button"
              onClick={() => handleSelect(data.id)}
            >
              <img
                src={`../src/assets/Ressources/Externatic/${
                  isFavorite(data.id) ? "icon.svg" : "iconStar.svg"
                }`}
                alt="logo alt"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
