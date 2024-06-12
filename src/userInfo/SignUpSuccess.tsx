import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sign-up.css"; // Import the CSS file for styling

const SignUpSuccess = () => {
  // const navigate = useNavigate();

  // const handleDashboardClick = () => {
  //   navigate("/dashboard"); // Adjust the path as needed
  // };

  return (
    <div className="signup-form-container">
      <div className="signup-form-header">
        <h1 className="title">Welcome to Intracom!</h1>
        <p className="message">
          You're all set up and ready to go. We've sent you a confirmation
          email. Please click the link in the email to verify your account.
        </p>
        <button className="button">Proceed to Dashboard</button>
      </div>
    </div>
  );
};

export default SignUpSuccess;