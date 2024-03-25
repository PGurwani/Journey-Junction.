import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { IoCloseOutline } from 'react-icons/io5';

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

const LoginModal = ({ onLogin, setLoginPopup }) => {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setLoginPopup(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/login', {
        username,
        password,
      });

      const user = response.data;
      onLogin(user);

      handleClose();
    } catch (error) {
      setError('Invalid credentials. Please try again.');
      console.log(error.message)
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
          <form onSubmit={handleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Username"
                  variant="outlined"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

export default LoginModal;
