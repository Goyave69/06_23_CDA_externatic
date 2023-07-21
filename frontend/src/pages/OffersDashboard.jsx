import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { Grid } from "@mui/material";

import axios from "axios";

// DataGrid :
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import jwt_decode from "jwt-decode";
import { useToken } from "../context/TokenContext";

export default function AdminDashboard() {
  const { token } = useToken();
  let role = "";
  let userId = "";

  if (token) {
    const decodedToken = jwt_decode(token);
    role = decodedToken.role;
    userId = decodedToken.userId;
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/job_offers")
      .then((response) => {
        setData(response.data); // Mettre à jour les données dans le state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (id) => {
    if (role.includes("ROLE_ADMIN" || "ROLE_HEADHUNTER")) {
      axios
        .put(`http://localhost:5000/job_offers/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleDelete = (id) => {
    if (role.includes("ROLE_ADMIN" || "ROLE_HEADHUNTER")) {
      axios
        .delete(`http://localhost:5000/job_offers/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // job_offers: id, name, location, job_description, status, contract_type, edition_date

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Offre d'Emploi",
      width: 350,
    },
    {
      field: "contract_type",
      headerName: "Type",
      width: 150,
    },
    {
      field: "location",
      headerName: "Localité",
      width: 200,
    },
    {
      field: "edition_date",
      headerName: "Date Création",
      type: "number",
      width: 150,
    },
    {
      field: "nbre_candidats",
      headerName: "Nbre Candidats",
      type: "number",
      align: "center",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        const { id } = params.row;
        console.warn(params.id);
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <IconButton aria-label="edit" onClick={() => handleEdit(id)}>
                <EditIcon />
              </IconButton>
            </Box>
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
      <h2 style={{ textAlign: "center" }}>Mes offres</h2>
      <Grid container spacing={2} alignItems="center" sx={{ mb: "15px" }}>
        <Grid item xs={3}>
          <TextField
            id="outlined-password-input"
            label="Offres, Type de contrat..."
            type="searchInput"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-where-input"
            label="Où ?..."
            type="searchInput"
            autoComplete="current-location"
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="filter">
            <FilterListRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#CA2061", width: "200px" }}
          >
            + Nouvelle Offre
          </Button>
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="setup">
            <SettingsRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
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
