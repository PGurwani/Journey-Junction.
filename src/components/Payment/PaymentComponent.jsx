import React, { useState } from "react";

const PaymentComponent = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    paymentLinkId: "",
    paymentLinkUrl: "",
  });


  // Function to trigger payment
  const handlePayment = async () => {
    try {
      // Call your backend API to get payment details
      const response = await fetch("http://localhost:8081/api/payments");
      if (!response.ok) {
        throw new Error('Failed to fetch payment details');
      }
      if(response.ok){
        fetch("http://localhost:8081/api/groups")
      }
      const data = await response.json();

      // Set payment details in the state
      setPaymentDetails({
        paymentLinkId: data.paymentLinkId,
        paymentLinkUrl: data.paymentLinkUrl,
      });

      // Open Razorpay payment link
      openRazorpay();
    } catch (error) {
      console.error('Error handling payment:', error);
      // Add any error handling logic here, such as displaying an error message to the user
    }
  };

  // Function to open Razorpay payment link
  const openRazorpay = () => {
    // Ensure Razorpay SDK is loaded (you may load it as in your original code)

    // Use payment details from the state
    const options = {
      key: 'rzp_test_Zs6hweYvCXjAth', // Replace with your actual Razorpay key
      amount: 100 * 100, // Assuming amount is in paisa, adjust as needed
      currency: 'INR',
      name: 'Journey Junction',
      description: 'Payment for Your Service',
      order_id: paymentDetails.paymentLinkId, // Use paymentLinkId from the state
      handler: (response) => {
        // Handle the success callback
        console.log('Payment successful:', response);
        // Add any additional logic you need on payment success
      },
      prefill: {
        name: 'User Name',
        email: 'user@example.com',
        contact: '1234567890',
      },
      notes: {
        address: 'Your Company Address',
      },
      theme: {
        color: '#007bff',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on('payment.failed', (response) => {
      // Handle the failure callback
      console.error('Payment failed:', response.error.description);
      // Add any additional logic you need on payment failure
    });
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={handlePayment}>Book Now</button>
    </div>
  );
};

export default PaymentComponent;
