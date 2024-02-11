// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Login = ({ loginPopup, setLoginPopup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          // Replace 'http://localhost:8081/api/login' with your actual login API endpoint
          const response = await axios.post('http://localhost:8081/api/login', {
            username,
            password,
          });
    
          // Assuming the API returns user data upon successful login
          const user = response.data;
    
          // Update parent component with user data
          loginPopup(user);
    
          // Close the login pop-up
          setLoginPopup(false);
        } catch (error) {
          // Handle login error
          setError('Invalid credentials. Please try again.');
          console.log(error.message)
        }
      };

    return (
        (loginPopup && (<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[400px] h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Login</h2>
            <IoCloseOutline
              className="text-2xl cursor-pointer"
              onClick={() => setLoginPopup(false)}
            />
          </div>
    
          {loginPopup && <div className="mb-4 text-red-500">{error}</div>}
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
        </div>
      )));


   
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Replace 'http://localhost:8081/api/login' with your actual login API endpoint
//       const response = await axios.post('http://localhost:8081/api/login', {
//         username,
//         password,
//       });

//       // Assuming the API returns user data upon successful login
//       const user = response.data;

//       // Update parent component with user data
//       onLogin(user);

//       // Close the login pop-up
//       setLoginPopup(false);
//     } catch (error) {
//       // Handle login error
//       setError('Invalid credentials. Please try again.');
//       console.log(error.message)
//     }
//   };

//   return (
//     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[400px] h-[400px]">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-bold">Login</h2>
//         <IoCloseOutline
//           className="text-2xl cursor-pointer"
//           onClick={() => setLoginPopup(false)}
//         />
//       </div>

//       {error && <div className="mb-4 text-red-500">{error}</div>}
//       <form onSubmit={handleLogin}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Your Username"
//               variant="outlined"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Password"
//               variant="outlined"
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               fullWidth
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
};

export default Login;
