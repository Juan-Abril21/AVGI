import "../../styles/SignUp/SignUp.css";
import { InputWithLabel } from "../InputWithLabel";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signUp">
      <div className="content-wrapper">
        <div className="signUp-grid">
          <img src="Reduced Logo.png" className="signup-logo" alt="Logo"></img>
          <div className="forms-signUp">
            <h1 className="signup-title">Create an Acount</h1>
            <InputWithLabel label="Your name" type="name" hint="Name" id="name" />
            <InputWithLabel
              label="Your E-Mail"
              type="email"
              hint="Email"
              id="email"
            />
            <InputWithLabel
              label="Your Password"
              type="password"
              hint="Password"
              id="password"
            />
            <InputWithLabel label="Code" type="code" hint="Code" id="code" />
            <Link to="/login" className="btnCreateSignUp">
              Create
            </Link>
            <div className="subtitle-signup">
              Already have an account?{" "}
              <span className="subtitle-signup-bold"><Link to="/login">Log In</Link></span>
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

export default SignUp;