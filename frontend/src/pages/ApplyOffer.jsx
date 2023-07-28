import { Link } from "react-router-dom";
import { useState } from "react";
import FileUpload from "./FileUpload";
import "./applyOffer.css";

function ApplyOffer({ data, handleSelect, isFavorite }) {
  const [files, setFiles] = useState([
    {
      name: "myFile.pdf",
    },
  ]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };
  console.warn(files);
  return (
    <div className="apply">
      <div className="bordureOffres">
        <div style={{ height: "100vh", overflow: "auto" }}>
          <div
            className="offerTitle"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div>
              <div>
                <p>
                  {" "}
                  <h3 style={{ fontSize: "2rem" }}>{data.name}</h3>
                </p>
              </div>
              <div>
                <strong style={{ fontSize: "1.5rem" }}>{data.name}</strong>{" "}
                <em style={{ fontSize: "1rem" }}>- {data.location}</em>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "4vw",
                gap: "10%",
                cursor: "pointer",
              }}
            >
              <button
                style={{ backgroundColor: "transparent", width: "4vw" }}
                type="button"
                onClick={() => handleSelect(data.id)}
              >
                {" "}
                <img
                  style={{ backgroundColor: "transparent" }}
                  src={`../src/assets/Ressources/Externatic/${
                    isFavorite(data.id) ? "icon.svg" : "iconStar.svg"
                  }`}
                  alt="favorie"
                />
              </button>

              <img
                style={{ backgroundColor: "transparent" }}
                src="./src/assets/Ressources/Externatic/iconpetitmenu.svg"
                alt="favorie"
              />
            </div>
          </div>

          {/* Premier upload. */}

          <div className="App">
            <p className="title">Upload file</p>
            <FileUpload
              files={files}
              setFiles={setFiles}
              removeFile={removeFile}
            />
          </div>

          <div
            className="btnContenu"
            style={{
              margin: "20% 0",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <button
                type="button"
                style={{
                  flexDirection: "row",
                  display: "flex",
                  width: "70%",
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <div>
                  {" "}
                  <p>TÉLÉCHARGER LE CV</p>
                </div>
                <div>
                  {" "}
                  <img
                    src="./src/assets/Ressources/Externatic/icontelechargement.svg"
                    alt="téléchargement cv"
                  />
                </div>
              </button>
              <button
                type="button"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "105%",
                  margin: "10px",
                }}
              >
                <div>
                  <p>TÉLÉCHARGER LA LETTRE DE MOTIVATION</p>
                </div>
                <div>
                  {" "}
                  <img
                    src="./src/assets/Ressources/Externatic/icontelechargement.svg"
                    alt="télécharger lettre de motivation"
                  />
                </div>
              </button>
            </div>

            <div style={{ width: "30%" }}>
              <button
                type="button"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bolder",
                  border: "solid black 2px",
                  margin: "5px",
                }}
              >
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    {" "}
                    <div>
                      <p>CV_JHON_DOE.PDF</p>
                    </div>
                    <div>
                      <img
                        src="./src/assets/Ressources/Externatic/iconpetitmenu.svg"
                        alt="menu"
                      />
                    </div>
                  </div>
                </div>
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bolder",
                  border: "solid black 2px",
                  margin: "5px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <p>LM_JHON_DOE.PDF</p>
                  </div>
                  <div>
                    <img
                      style={{
                        cursor: "pointer",
                      }}
                      src="./src/assets/Ressources/Externatic/iconpetitmenu.svg"
                      alt="menu"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              {" "}
              <Link to="/">
                <button
                  type="button"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bolder",
                    border: "solid black 2px",
                    width: "350px",
                    fontSize: "1.2rem",
                  }}
                >
                  POSTULER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApplyOffer;
