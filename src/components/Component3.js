import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getUsers, addUser } from "../api/users/users";
import {
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";

function UserModal({ handleClose }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleaddUser = () => {
    addUser({ username, password }).then((response) => {
      alert(response.data.message);
      handleClose();
    });
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          onChange={(e) => setPassword(e.target.value)}
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleaddUser}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Component3(props) {
  const [loading, setLoading] = React.useState(false);
  const [modal, setModal] = React.useState("close");

  // datagrid
  const [rows, setRows] = React.useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "First name",
      flex: 1,
    },
    {
      field: "title",
      headerName: "First name",
      flex: 1,
    },
    {
      field: "completed",
      headerName: "First name",
      flex: 1,
    },
  ];

  React.useEffect(() => {
    const handleGetUsers = () => {
      getUsers()
        .then((response) => {
          setRows(response.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    };

    handleGetUsers();
  }, []);

  const handleClose = () => {
    setModal("close");
  };

  return (
    <Box sx={{ width: "100%", height: "60vh" }}>
      <Box sx={{ width: "100%", height: 60 }}>
        <Button onClick={() => setModal("add")}>Ekle</Button>
      </Box>
      <DataGrid
        rows={rows}
        loading={loading}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      {modal != "close" ? <UserModal handleClose={handleClose} /> : null}
    </Box>
  );
}
