import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../allCss/loginPage.css"; // Import the external CSS file


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // To redirect after login

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Dummy authentication (replace with API call)
    if (email === "test@example.com" && password === "password") {
      alert("Login Successful!");
      navigate("/landing"); // Redirect to LandingPage after login
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
