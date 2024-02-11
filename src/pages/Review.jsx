import React, { useState } from "react";
import { Typography, Container, Grid, Paper, TextField, Button } from "@mui/material";
import { useSpring, animated } from "react-spring";

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // You can add your logic for submitting the review here
    setIsSubmitted(true);
  };

  return (
    <div
    style={{
      backgroundImage: "url('https://hougumlaw.com/wp-content/uploads/2016/05/light-website-backgrounds-light-color-background-images-light-color-background-images-for-website-1024x640.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
                backgroundImage: "url('https://media.istockphoto.com/id/1333063467/photo/minimal-abstract-background-for-product-presentation-leaf-shadow-on-yellow-plaster-wall.webp?b=1&s=170667a&w=0&k=20&c=NDbtwZQ0wRUwJ9y47SMZ6KpevIuFVvfE1VGLTMG44AQ=')", // Replace with the path to your background image
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
                    value={description}
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
