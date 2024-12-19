import "../styles/SignUp/SignUp.css";
import { InputWithLabel } from "../components/InputWithLabel";
import { SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { IoArrowBackOutline } from "react-icons/io5";

function Register() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleBack = () => navigate("/");
  return (
    <div className="signUp">
      <button onClick={handleBack} className="back-button">
        <IoArrowBackOutline size={24} />
      </button>
      <div className="content-wrapper">
        <div className="signUp-grid">
          <img src="Reduced Logo.png" className="signup-logo" alt="Logo"></img>
          <div className="forms-signUp">
            <h1 className="signup-title">Create an Acount</h1>
            <InputWithLabel
              label="Your name"
              type="name"
              hint="Name"
              id="name"
            />
            <InputWithLabel
              label="Your E-Mail"
              type="email"
              hint="Email"
              id="email"
            />
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  typeof="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
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
            <InputWithLabel label="Code" type="code" hint="Code" id="code" />
            <Link to="/login" className="btnCreateSignUp">
              Create
            </Link>
            <div className="subtitle-signup">
              Already have an account?{" "}
              <span className="subtitle-signup-bold">
                <Link to="/login">Log In</Link>
              </span>
            </div>
          </div>
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

export default Register;
