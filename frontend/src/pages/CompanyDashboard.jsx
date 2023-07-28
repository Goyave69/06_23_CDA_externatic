/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  const { token } = useToken();
  let role = "";
  let userId = "";

  if (token) {
    const decodedToken = jwt_decode(token);
    role = decodedToken.role;
    // eslint-disable-next-line no-unused-vars
    userId = decodedToken.userId;
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    if (role.includes("ROLE_ADMIN" || "ROLE_HEADHUNTER")) {
      axios
        .get("http://localhost:5550/company")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleEdit = (id) => {
    if (role.includes("ROLE_ADMIN" || "ROLE_HEADHUNTER")) {
      axios
        .put(`http://localhost:5555/company/${id}`)
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
        .delete(`http://localhost:5550/company/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Entreprise",
      width: 350,
    },
    {
      field: "industry_field",
      headerName: "Activité",
      width: 150,
    },
    {
      field: "adress",
      headerName: "Localité",
      width: 200,
    },
    {
      field: "email",
      headerName: "Contact",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        const { id } = params.row;

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
      <h2 style={{ textAlign: "center" }}>Les Entreprises Partenaires</h2>
      <Grid container spacing={2} alignItems="center" sx={{ mb: "15px" }}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#CA2061", width: "200px" }}
          >
            + Nouvelle Offre
          </Button>
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
