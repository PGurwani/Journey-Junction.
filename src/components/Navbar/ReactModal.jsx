import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // Reset form data and errors when closing the modal
    setFormData({
      email: "",
      password: "",
    });
    setErrors({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!isEmailValid(formData.email)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address.",
      });
      return;
    }

    // Validate password
    if (!isPasswordValid(formData.password)) {
      setErrors({
        ...errors,
        password:
          "Password must contain at least 1 capital letter, 1 number, and 1 special character.",
      });
      return;
    }

    // Continue with the login process if validations pass
    // Add your login logic here

    // Reset errors when successful
    setErrors({
      email: "",
      password: "",
    });

    // Close the modal
    setOpen(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h5"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            <h2>LOGIN</h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className={`form-control ${errors.email && "is-invalid"}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  style={{ marginTop: "5px" }}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  style={{ marginTop: "15px" }}
                >
                  Password
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${
                      errors.password && "is-invalid"
                    }`}
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{ marginTop: "5px", flex: 1 }}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <IconButton
                    variant="contained"
                    style={{ marginTop: "20px", marginLeft: "10px" }}
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </div>
                {errors.password && (
                  <Typography
                    variant="body2"
                    color="error"
                    style={{ marginTop: "8px" }}
                  >
                    {errors.password}
                  </Typography>
                )}
              </div>

              <Button
                variant="contained"
                style={{ marginTop: "20px" }}
                type="submit"
              >
                Login
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}