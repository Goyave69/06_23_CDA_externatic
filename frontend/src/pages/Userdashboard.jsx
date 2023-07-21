import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { Grid } from "@mui/material";

// DataGrid :
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

export default function AdminDashboard() {
  const rows = [
    {
      id: 1,
      userName: "Dark Vador",
      type: "Candidat",
      profession: "Développeur Web Fullstask",
      date_creation: "29/02/2023",
      status: "inscrit",
    },
    {
      id: 2,
      userName: "Emile Louis",
      type: "Recruteur",
      profession: "Ressources Humaines",
      date_creation: "14/02/2023",
      status: "inscrit",
    },
    {
      id: 3,
      userName: "Bilbon Saquet",
      type: "Candidat",
      profession: "Développeur Frontend",
      date_creation: "15/08/2023",
      status: "Attente de validation",
    },
    {
      id: 4,
      userName: "Jeffrey Dahmer",
      type: "Recruteur",
      profession: "Ressources Humaines",
      date_creation: "14/07/2023",
      status: "inscrit",
    },
    {
      id: 5,
      userName: "Catherine Nay",
      type: "Candidat",
      profession: "Développeuse Web Fullstack",
      date_creation: "12/01/2023",
      status: "inscrit",
    },
    {
      id: 6,
      userName: "Charles Manson",
      type: "Recruteur",
      profession: "Ressources Humaines",
      date_creation: "01/01/2023",
      status: "inscrit",
    },
    {
      id: 7,
      userName: "Anne Rice",
      type: "Candidat",
      profession: "Développeuse Backend",
      date_creation: "01/01/2023",
      status: "Attente de validation",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "userName",
      headerName: "Nom & Prénom",
      width: 350,
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
    },
    {
      field: "profession",
      headerName: "Profession",
      width: 250,
    },
    {
      field: "date_creation",
      headerName: "Date Inscription",
      type: "number",
      width: 190,
    },
    {
      field: "status",
      headerName: "Status",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      type: "actions",
      width: 200,
      renderCell: (params) => {
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
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton aria-label="delete">
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
          <IconButton aria-label="setup">
            <SettingsRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
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
