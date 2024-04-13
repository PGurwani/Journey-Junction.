import React, { useState,useEffect } from "react";
import { Typography, Container, Grid, Paper, TextField, Button, Select, MenuItem } from "@mui/material";
import { useSpring, animated } from "react-spring";
import Cookies from "js-cookie";
import axios from 'axios';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(""); // New state for the selected place
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userId, setUserId] = useState(null);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const starSpring = useSpring({
    config: { duration: 300 },
    opacity: isSubmitted ? 0 : 1,
    transform: `scale(${isSubmitted ? 0.5 : 1})`,
  });

  const formSpring = useSpring({
    config: { duration: 500 },
    opacity: isSubmitted ? 0 : 1,
    transform: `translateY(${isSubmitted ? 20 : 0}px)`,
  });

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleDescriptionChange = (event) => {
    setContent(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };



  useEffect(() => {
    // Retrieve user ID from cookie when component mounts
    const userIdFromCookie = Cookies.get("userId");
    console.log(userIdFromCookie)
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
    }
  }, []);

  
const handleSubmit = async () => {
  // Check if the place is selected before submitting the review
  if (selectedPlace && rating && content && userId) {
    try {
      // Send a POST request to the API endpoint
      const response = await axios.post(`http://localhost:8081/api/review/${userId}`, {
        place: selectedPlace,
        rating,
        content,
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        console.log("successfully addedd")
        // Optionally, you can handle success feedback here
      } else {
        // Optionally, you can handle other response statuses here
        alert('Failed to submit review. Please try again later.');
      }
    } catch (error) {
      // Handle any errors
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again later.');
    }
  } else {
    alert('Please select a place, provide a rating, and write a review before submitting.');
  }
};

  return (
    <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: '../src/assets/leaves.jpg', // Replace with your background image
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
          <Grid item xs={12} md={6}>
            <animated.div style={{ ...fadeIn, textAlign: "center" }}>
              <Paper
                elevation={3}
                style={{
                  padding: 20,
                  backgroundImage: "url('your_paper_background_image_url')", // Replace with your background image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Leave a Review
                </Typography>
                {isSubmitted ? (
                  <animated.div style={formSpring}>
                    <Typography variant="h6" color="primary">
                      Thank you for your review!
                    </Typography>
                  </animated.div>
                ) : (
                  <animated.div style={formSpring}>
                    <Typography variant="h6">Select a place:</Typography>
                    <Select
                      label="Select a place"
                      value={selectedPlace}
                      onChange={handlePlaceChange}
                      fullWidth
                      margin="normal"
                    >
                      <MenuItem value="Pawna">Pawna</MenuItem>
                      <MenuItem value="Matheran">Matheran</MenuItem>
                      <MenuItem value="Kalsubai">Kalsubai Peak</MenuItem>
                      <MenuItem value="Alibaug">Alibaug Beach</MenuItem>
                      {/* Add more places as needed */}
                    </Select>
                    <Typography variant="h6">Rate your experience:</Typography>
                    <animated.div style={{ ...starSpring, display: "inline-block" }}>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <animated.span
                          key={value}
                          onClick={() => handleRatingChange(null, value)}
                          style={{
                            fontSize: 36,
                            cursor: "pointer",
                            marginRight: 5,
                            color: value <= rating ? "gold" : "grey",
                          }}
                        >
                          ★
                        </animated.span>
                      ))}
                    </animated.div>
                    <TextField
                      label="Your review"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={content}
                      onChange={handleDescriptionChange}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                      Submit Review
                    </Button>
                  </animated.div>
                )}
              </Paper>
            </animated.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ReviewPage;