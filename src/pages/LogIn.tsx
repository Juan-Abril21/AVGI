import "../styles/LogIn/LogIn.css";
import { InputWithLabel } from "../components/InputWithLabel";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const TEST_CREDENTIALS = {
    email: "test@test.com",
    password: "test123",
  };

  const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (formData.email === TEST_CREDENTIALS.email && 
        formData.password === TEST_CREDENTIALS.password) {
      navigate('/courses');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="logIn">
      <div className="content-wrapper">
        <div className="signUp-grid">
          <img src="Reduced Logo.png" className="signup-logo" alt="Logo"></img>
          <form onSubmit={handleSubmit} className="forms-logIn">
            <p>Test credentials: email: test@test.com password: test123</p>
            <h1 className="signup-title">Log In</h1>
            <InputWithLabel
              label="Your E-Mail"
              type="email"
              hint="Email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputWithLabel
              label="Your Password"
              type="password"
              hint="Password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="submit" className="btnCreateLogIn">
              Lets Go
            </button>
            <div className="subtitle-signup">
              Don't have an account?{" "}
              <span className="subtitle-signup-bold">
                <Link to="/register">Sign Up</Link>
              </span>
            </div>
          </form>
        </div>
        <div className="terms-container">
          <div className="subtitle-signup">
            By continuing you accept that you agree to the{" "}
            <span className="subtitle-signup-bold">Terms and Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;