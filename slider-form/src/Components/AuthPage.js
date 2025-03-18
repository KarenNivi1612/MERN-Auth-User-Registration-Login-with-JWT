import React, { useState } from "react";
import "./AuthPage.css";
import axios from "axios";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setMessage("");
    setFormData({ name: "", email: "", password: "" }); // Clear form when switching
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignUp
        ? "http://localhost:6500/api/auth/register"
        : "http://localhost:6500/api/auth/login";
      const response = await axios.post(url, formData);
      setMessage(response.data.message);

      if (isSignUp) {
        alert("Registration successful! Please sign in.");
        setTimeout(() => {
          setFormData({ name: "", email: "", password: "" }); // Clear form
          setIsSignUp(false); // Switch to Sign-In
        }, 1000);
      } else {
        alert("Login successful!");
        setFormData({ email: "", password: "" }); // Clear form after login
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Sign Up</button>
          {message && <p>{message}</p>}
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Sign In</button>
          {message && <p>{message}</p>}
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={handleToggle}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={handleToggle}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
