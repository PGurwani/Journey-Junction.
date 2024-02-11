import * as React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const buttonStyle = {
  width: "1px", // Adjust the width of the button
  height: "15px", // Adjust the height of the button
  // backgroundColor: '#3498db', // Change the background color of the button
  color: "white", // Change the text color of the button
  textTransform: "capitalize",
};
const buttonStyle1 = {
    // width: "1px", // Adjust the width of the button
    // height: "15px", // Adjust the height of the button
    backgroundColor: 'blue', // Change the background color of the button
    color: "white", // Change the text color of the button
    textTransform: "capitalize",
  };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height : 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h5" component="h5" style = {{fontWeight : 'bold', textAlign : 'center'}}>
            <h2>LOGIN</h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" >Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  style = {{marginTop : "5px"}}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" style = {{marginTop : "15px"}}>Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  style = {{marginTop : "5px"}}
                />
              </div>
              <Button variant="contained" style = {{marginTop : "20px"}}>Login In</Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
