import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
      offerName: "Développeur Web Fullstack PHP VueJs",
      type: "CDI",
      localite: "Lyon",
      date_creation: "29/02/2023",
      nbre_candidats: "5",
    },
    {
      id: 2,
      offerName: "Développeur Web Front ReactJs",
      type: "CDD",
      localite: "Tassin",
      date_creation: "14/02/2023",
      nbre_candidats: "10",
    },
    {
      id: 3,
      offerName: "Développeur Web Fullstack ExpressJs ReactJs",
      type: "Alternance",
      localite: "Limonest",
      date_creation: "15/08/2023",
      nbre_candidats: "9",
    },
    {
      id: 4,
      offerName: "Développeur Web Fullstack",
      type: "Stage",
      localite: "Vaise",
      date_creation: "14/07/2023",
      nbre_candidats: "19",
    },
    {
      id: 5,
      offerName: "Développeur Web Fullstack",
      type: "CDD",
      localite: "Paris",
      date_creation: "12/01/2023",
      nbre_candidats: "9",
    },
    {
      id: 6,
      offerName: "Développeur Web Fullstack",
      type: "CDI",
      localite: "Lyon",
      date_creation: "01/01/2023",
      nbre_candidats: "567",
    },
    {
      id: 7,
      offerName: "Développeur Web Backend",
      type: "CDI",
      localite: "Rome",
      date_creation: "01/01/2023",
      nbre_candidats: "67",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "offerName",
      headerName: "Offre d'Emploi",
      width: 450,
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
    },
    {
      field: "localite",
      headerName: "Localité",
      width: 250,
    },
    {
      field: "date_creation",
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
