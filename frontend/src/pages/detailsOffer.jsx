import { Link } from "react-router-dom";
import OfferSearch from "./offerSearch";
import "./detailsOffre.css";

export default function DetailsOffer() {
  return (
    <div className="presentationoffre">
      <div className="composant">
        <OfferSearch />
      </div>

      <div className="detailsoffre">
        <div className="offertitle">
          <p>Alternance-Développeur Full Stack H/F</p>
          <img
            src="./src/assets/Ressources/Externatic/icon.svg"
            alt="favorie"
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ea
            reprehenderit corporis, architecto sit sint molestias inventore
            expedita adipisci aperiam in rerum iusto obcaecati quos, aliquid
            tempora vitae est doloribus. Adipisci facilis totam consequatur nemo
            tenetur facere recusandae rem animi nam placeat, perferendis
            distinctio porro quia tempore, odit dolorum ipsam fuga temporibus
            eum delectus? Ratione quis veritatis incidunt libero doloribus!
            Possimus est sapiente magnam necessitatibus nulla quas repudiandae
            maxime dolore, vero, aut maiores odit a aspernatur sit vitae in
            cumque. Animi harum velit facere et praesentium fugit consequatur
            neque! Vitae? Nobis in aliquam nesciunt voluptates nostrum fuga
            maxime magnam eveniet, inventore ut placeat. Provident veritatis
            earum delectus harum sunt ipsam? Laudantium blanditiis perferendis
            at dolore repudiandae molestias, hic amet autem.
          </p>
          <Link to="/ApplyOffer">
            <button className="btn" type="button">
              POSTULER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
