import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SharpRegisterDesign() {
  // Create individual state variables for each input field (PAYLOAD)
  // individual state for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  // message state for success or error messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // loading state for form submission
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // handle form submission
  const handleLoginSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      // clear previous messages
      setMessage("");
      setError("");
      // validate input fields
      if (!firstName.trim()) {
        setError("First name is required.");
        return;
      }
      if (!lastName.trim()) {
        setError("Last name is required.");
        return;
      }
      if (!email.trim()) {
        setError("Email is required.");
        return;
      }
      if (!password.trim()) {
        setError("Password is required.");
        return;
      }
      if (!phoneNumber.trim()) {
        setError("Phone number is required.");
        return;
      }
      if (!address.trim()) {
        setError("Address is required.");
        return;
      }
      // payload from the API
      const payload = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        address,
      };

      // send the API request to the backend
      const response = await axios.post(
        "https://students-learning-api.onrender.com/api/auth",
        payload,
      );
      setLoading(false);
      // success message
      setMessage("Registration successful!");
      navigate("/");
      console.log(response);
    } catch (error) {
      setError("Registration failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
      <CssBaseline />

      {/* LEFT SIDE */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#111",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 6,
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.05em",
            mb: 1,
          }}
        >
          THE ARCHITECT.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 INTERNAL NETWORK SYSTEM.
        </Typography>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 10 },
          py: 5,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ maxWidth: 400, width: "100%", mx: "auto" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 1,
              letterSpacing: "-0.03em",
            }}
          >
            CREATE ACCOUNT
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Register to access your student account.
          </Typography>
          {message && (
            <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
              {message}
            </Typography>
          )}
          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Box component="form" onSubmit={handleLoginSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="FIRST NAME"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="LAST NAME"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="EMAIL ADDRESS"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              label="PASSWORD"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="PHONE NUMBER"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="ADDRESS"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 3,
                py: 1.5,
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 0,
                fontWeight: 700,
                letterSpacing: "0.1em",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#222",
                  boxShadow: "none",
                },
              }}
            >
              CREATE ACCOUNT
            </Button>

            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{ fontSize: "0.75rem" }}
            >
              ALREADY HAVE AN ACCOUNT?{" "}
              <Link href="/login" color="inherit" sx={{ fontWeight: 700 }}>
                SIGN IN
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}