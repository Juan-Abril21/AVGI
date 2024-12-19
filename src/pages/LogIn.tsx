import "../styles/LogIn/LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => navigate("/");
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!user.email || !user.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await login(user.email, user.password);
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      }
      navigate("/courses");
      setTimeout(() => {
        navigate("/courses");
      }, 50);
    } catch (error: any) {
      console.error("Login error:", error);
      setError(error.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResetPassword = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user.email) {
      setError("Please enter your email to reset password");
      return;
    }

    try {
      setLoading(true);
      await resetPassword(user.email);
      setError("Password reset email sent. Please check your inbox.");
    } catch (error: any) {
      setError(error.message || "Error sending reset email");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    }

    return () => {
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      }
    };
  }, []);

  return (
    <div className="logIn">
      <button onClick={handleBack} className="back-button">
        <IoArrowBackOutline size={24} />
      </button>
      <div className="content-wrapper">
        <div className="signUp-grid">
          <img src="Reduced Logo.png" className="signup-logo" alt="Logo"></img>
          <form onSubmit={handleSubmit} className="forms-logIn">
            <h1 className="signup-title">Log In</h1>

            {error && <div className="error-message">{error}</div>}

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="password-input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="youremail@company.tld"
                  className="password"
                  required
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
                  onChange={handleChange}
                  className="password"
                  autoComplete="current-password"
                  required
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

            <button type="submit" className="btnCreateLogIn" disabled={loading}>
              {loading ? "Loading..." : "Let's Go"}
            </button>

            <button
              onClick={handleResetPassword}
              className="reset-password-link"
            >
              Forgot Password?
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
