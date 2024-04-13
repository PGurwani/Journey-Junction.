import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const buttonStyle = {
  width: "1px",
  height: "15px",
  color: "white",
  textTransform: "capitalize",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const [error] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_no: "",
    password: "",
  });

  const [message,setMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
        const loginResponse = await fetch("http://localhost:8081/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        });

        if (loginResponse.ok) {
          setMessage("Login successful. Redirecting...");
          setOpen(false);
          navigate("/best-places");
          const userData = await loginResponse.json();
          Cookies.set('userId', userData.id, { expires: 7 });
          console.log(userData)
          // You can also handle the logged-in state or user authentication as needed.
        } else {
          setMessage("Login failed. Please check your credentials.");
        }
    } catch (error) {
      setMessage("Error during registration/login. Please try again.");
      console.error("Error during registration/login:", error.message);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} style={buttonStyle}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-between mb-4">
            <Typography id="modal-modal-title" variant="h5" component="h5" style={{ fontWeight: 'bold', textAlign: 'center' }}>
              <h2>LOGIN</h2>
            </Typography>
            <IoCloseOutline className="text-2xl cursor-pointer" onClick={handleClose} />
          </div>

          {error && <div className="mb-4 text-red-500">{error}</div>}
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Username"
                  variant="outlined"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
