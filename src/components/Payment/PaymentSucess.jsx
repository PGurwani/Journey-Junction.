import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [paymentID, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  // Simulate a successful payment
  useEffect(() => {
    // Assuming you have a function to process payment and it returns payment details upon success
    const processPayment = async () => {
      try {
        // Call your backend API to process payment and get payment details
        const response = await fetch("http://localhost:8081/api/processPayment", {
          method: "POST",
          // Add any necessary headers and body data
        });

        if (response.ok) {
          // Parse the response and set payment details in the state
          const data = await response.json();
          setPaymentId(data.paymentID);
          setReferenceId(data.referenceId);
          setPaymentStatus("Success"); 
        } else {
          // Handle unsuccessful payment
          setPaymentStatus("Failed");
        }
      } catch (error) {
        // Handle error
        console.error("Error processing payment:", error);
        setPaymentStatus("Failed");
      }
    };

    // Call the processPayment function to simulate payment success
    processPayment();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Payment Successful!</h2>
        <p>Thank you for your payment.</p>
        <p>Payment ID: {paymentID}</p>
        <p>Reference ID: {referenceId}</p>
        <p>Status: {paymentStatus}</p>
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
