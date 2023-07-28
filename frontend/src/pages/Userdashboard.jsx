/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";

import axios from "axios";

// DataGrid :
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import jwt_decode from "jwt-decode";
import { useToken } from "../context/TokenContext";

export default function AdminDashboard() {
  const { VITE_BACKEND_URL } = import.meta.env;
  const { token } = useToken();
  let role = "";
  let userId = "";

  // const [search, setSearch] = useState("");
  // console.warn(search); // FIXME:

  if (token) {
    const decodedToken = jwt_decode(token);
    role = decodedToken.role;
    userId = decodedToken.userId;
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${VITE_BACKEND_URL}/candidateDashboard/`)
      .then((response) => {
        setData(response.data); // Mettre à jour les données dans le state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // FIXME: Delete en "cascade" car user lié à HeadHunter par ID => Delete enfant ou parent en premier ?
  const handleDelete = (id) => {
    if (role.includes("ROLE_ADMIN") || role.includes("ROLE_HEADHUNTER")) {
      axios
        .delete(`http://localhost:5550/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "last_name",
      headerName: "Nom",
      width: 150,
    },
    {
      field: "first_name",
      headerName: "Prénom",
      width: 100,
    },
    {
      field: "researched_job",
      headerName: "Recherche",
      width: 250,
    },
    {
      field: "profession",
      headerName: "Profession",
      width: 200,
    },
    {
      field: "availability_date",
      headerName: "Date disponibilité",
      type: "number",
      width: 190,
    },
    {
      field: "job_search_location",
      headerName: "Recherche géographique",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        const { id } = params.row;
        // console.warn(params.id);
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {/* <Box>
              <IconButton aria-label="edit" onClick={() => handleEdit(id)}>
                <EditIcon />
              </IconButton>
            </Box> */}
            <Box>
              <IconButton aria-label="delete" onClick={() => handleDelete(id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        p: 0.5,
        border: "1.5px solid black",
        borderRadius: 2.5,
        width: "85%",
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Liste des candidats</h2>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
