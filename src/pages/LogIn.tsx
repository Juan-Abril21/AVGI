import "../styles/LogIn/LogIn.css";
import { InputWithLabel } from "../components/InputWithLabel";
import { Link, useNavigate } from "react-router-dom";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const TEST_CREDENTIALS = {
    email: "test@test.com",
    password: "test123",
  };

  const handleBack = () => navigate("/");
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (e: { target: { id: string; value: string } }) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      formData.email === TEST_CREDENTIALS.email &&
      formData.password === TEST_CREDENTIALS.password
    ) {
      navigate("/courses");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="logIn">
      <button onClick={handleBack} className="back-button">
        <IoArrowBackOutline size={24} />
      </button>
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
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="password"
                  autoComplete="current-password"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="password-toggle"
                >
                  {showPassword ? (
                    <EyeClosedIcon
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                    />
                  ) : (
                    <EyeOpenIcon
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                    />
                  )}
                </span>
              </div>
            </div>

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
          <div className="subtitle-login">
            By continuing you accept that you agree to the{" "}
            <span className="subtitle-signup-bold">Terms and Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;