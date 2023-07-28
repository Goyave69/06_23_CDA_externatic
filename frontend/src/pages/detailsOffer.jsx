import "./detailsOffre.css";

export default function DetailsOffer({
  data,
  isFavorite,
  handleSelect,
  setPostuler,
}) {
  return (
    <div className="bordureOffres">
      <div style={{ height: "95vh", overflow: "auto", margin: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <b>
            <p style={{ fontSize: "2rem" }}>{data.name}</p>
          </b>{" "}
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

        <p style={{ fontSize: "1.5rem" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ea
          reprehenderit corporis, architecto sit sint molestias inventore
          expedita adipisci aperiam in rerum iusto obcaecati quos, aliquid
          tempora vitae est doloribus. Adipisci facilis totam consequatur nemo
          tenetur facere recusandae rem animi nam placeat, perferendis
          distinctio porro quia tempore, odit dolorum ipsam fuga temporibus eum
          delectus? Ratione quis veritatis incidunt libero doloribus! Possimus
          est sapiente magnam necessitatibus nulla quas repudiandae maxime
          dolore, vero, aut maiores odit a aspernatur sit vitae in cumque. Animi
          harum velit facere et praesentium fugit consequatur neque! Vitae?
          Nobis in aliquam nesciunt voluptates nostrum fuga maxime magnam
          eveniet, inventore ut placeat. Provident veritatis earum delectus
          harum sunt ipsam? Laudantium blanditiis perferendis at dolore
          repudiandae molestias, hic amet autem.
        </p>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button
            style={{ width: "50%", margin: "30px 20px", fontSize: "16px" }}
            type="button"
            onClick={() => setPostuler(true)}
          >
            POSTULER
          </button>
        </div>
      </div>
    </div>
  );
}
