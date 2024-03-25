// RegisterForm.js
import { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhoneNo] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/register', {
        username,
        password,
      });

      onRegister(response.data);
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
      Phone Number:
      <input
        type="text"
        value={phone_no}
        onChange={(e) => setPhoneNo(e.target.value)}
        required
      />
    </label>
      {/* Additional fields for registration, if needed */}
      {/* Example: */}
      {/* <label>
        Email:
        <input type="email" />
      </label> */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;