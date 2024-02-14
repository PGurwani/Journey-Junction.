import { useState } from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [paymentID, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
// const [groupId]=useParams();
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8081/api/user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setMessage("Registration successful. Logging in...");

//         const loginResponse = await fetch("http://localhost:8081/api/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: formData.username,
//             password: formData.password,
//           }),
//         });

//         if (loginResponse.ok) {
//           setMessage("Login successful. Redirecting...");
//           setOrderPopup(false);
//           navigate("/best-places");
//           // You can also handle the logged-in state or user authentication as needed.
//         } else {
//           setMessage("Login failed. Please check your credentials.");
//         }
//       } else {
//         setMessage("Registration failed. Please check your details.");
//       }
//     } catch (error) {
//       setMessage("Error during registration/login. Please try again.");
//       console.error("Error during registration/login:", error.message);
//     }
//   };
  return (
    <div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Payment Successful!</h2>
      <p>Thank you for your payment.</p>
      {/* You can display additional information like payment ID, reference ID, etc. */}
      {/* Replace 'paymentID', 'referenceId', and 'paymentStatus' with your actual state values */}
      <p>Payment ID: {paymentID}</p>
      <p>Reference ID: {referenceId}</p>
      <p>Status: {paymentStatus}</p>

      {/* Add a button to navigate to another page if needed */}
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={() => {
           navigate("/best-places");
        }}
      >
        Continue
      </button>
    </div>
    </div>
  );
};

export default PaymentSuccess;