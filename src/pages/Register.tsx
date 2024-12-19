import "../styles/SignUp/SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { IoArrowBackOutline } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";

function Register() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    code: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/login");
    } catch (error) {
      setError((error as any).message);
    }
  };

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
            <form onSubmit={handleSubmit} className="form-signUp">
            <h1 className="signup-title">Create an Account</h1>
              {/* <InputWithLabel
                label="Your name"
                type="text"
                hint="Name"
                id="name"
                value={user.name}
                onChange={handleInputChange}
              /> */}

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <div className="password-input">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="password"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInputChange}
                    className="password"
                    autoComplete="new-password"
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

              {/* <InputWithLabel 
                label="Code" 
                type="text" 
                hint="Code" 
                id="code"
                value={user.code}
                onChange={handleInputChange}
              /> */}

              <button type="submit" className="btnCreateSignUp">
                Create
              </button>
              <div className="subtitle-signup">
              Already have an account?{" "}
              <span className="subtitle-signup-bold">
                <Link to="/login">Log In</Link>
              </span>
            </div>
            </form>

            {error && <p className="error-message">{error}</p>}
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
