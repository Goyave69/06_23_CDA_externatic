/* eslint-disable no-unused-vars */
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./applyOffer.css";

function FileUpload({ files, setFiles, removeFile }) {
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);
  };

  // // Télécharger le fichier
  // const formData = new FormData();
  // formData.append(file.name, file, file.name);
  // axios
  //   .post("http://localhost:5000/upload", formData)
  //   .then((res) => {
  //     file.isUploading = false;
  //     setFiles([...files, file]);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     removeFile(files.name);
  //   });

  return (
    <div>
      <div className="file-card">
        <div className="file-inputs">
          <input
            type="file"
            onChange={uploadHandler}
            style={{
              position: "relative",
              margin: 0,
              maxWidth: "200px",
              height: "46px",
              zIndex: "2",
              cursor: "pointer",
              opacity: 0,
            }}
          />
          <button
            type="button"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: " 100%",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: " #fff",
              backgroundColor: "#CA2061",
              fontSize: "1.1rem",
              cursor: "pointer",
              borderRadius: "4px",
              border: "none",
              outline: "none",
              transition: "background-color 0.4s",
              boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.5",
            }}
          >
            <i>
              <AddCircleIcon />
            </i>
            Upload
          </button>
        </div>
        <p className="main">support files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </div>
  );
}

export default FileUpload;
