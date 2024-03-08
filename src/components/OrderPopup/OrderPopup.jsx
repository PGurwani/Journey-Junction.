import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_no: "",
    password: "",
  });

  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful. Logging in...");

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
          setOrderPopup(false);
          navigate("/best-places");
          // You can also handle the logged-in state or user authentication as needed.
        } else {
          setMessage("Login failed. Please check your credentials.");
        }
      } else {
        setMessage("Registration failed. Please check your details.");
      }
    } catch (error) {
      setMessage("Error during registration/login. Please try again.");
      console.error("Error during registration/login:", error.message);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[500px] h-[600px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Sign Up</h2>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => {
                  setOrderPopup(false);
                  setMessage(null);
                }}
              />
            </div>

            {message && <div className="mb-4">{message}</div>}
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
                    label="Your Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    name="phone_no"
                    value={formData.phone_no}
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
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button variant="outlined" onClick={() => setOrderPopup(false)}>
                      Cancel
                    </Button>
                    <Button variant="contained" type="submit">
                      Sign Up
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;