import React, { useState } from "react";
import "./signup.css";
import "../login-page/loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDocumentTitle } from "../../hooks";

export function SignUpPage() {
  setDocumentTitle("Memory Nomads | Signup");
  type UserData = {
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
  };

  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState<string>("");
  const { setIsLoggedIn } = useAuth();
  let navigate = useNavigate();
  const [type, setType] = useState<string>("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState<string>("password");
  const [passwordError, setPasswordError] = useState<string>("");

  const doValidate = () => {
    if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
        userData.email
      )
    ) {
      setError("Please enter a valid email address");
      return false;
    } else {
      setError("");
    }
    if (userData.password !== userData.confirmPassword) {
      setPasswordError("Password does not match!");
      return false;
    } else {
      setPasswordError("");
    }
    return true;
  };

  const onHandleSubmit = async (e: React.MouseEvent) => {
    try {
      if (doValidate()) {
        e.preventDefault();
        const value = await axios.post("/api/auth/signup", userData);
        localStorage.setItem("token", value.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(userData));
        if (value.status === 422) {
          const notify = () => toast("Email already exist! Please do login");
          notify();
        }
        setIsLoggedIn(true);
        toast("Sucessfully made an accoun!");
        setUserData({
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
        });
        navigate("/");
      }
    } catch (e) {
      const notify = () => toast("Something went wrong");
      notify();
    }
  };

  return (
    <form>
      <ToastContainer />
      <div className="login-page m-10">
        <div className="signup">
          <h4 className="login-title">Signup</h4>
          <div className="login-label">
            <label htmlFor="name" id="firstname">
              First Name
            </label>
          </div>
          <input
            type="text"
            className="login-input"
            placeholder="Ishita"
            value={userData.firstName}
            required
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
          <div className="login-label">
            <label htmlFor="lastname" id="lastname">
              Last Name
            </label>
          </div>
          <input
            type="text"
            className="login-input"
            value={userData.lastName}
            placeholder="Keshawani"
            required
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />

          <div className="login-label">
            <label htmlFor="email" id="email">
              Email address
            </label>
          </div>
          <input
            type="text"
            className="login-input"
            placeholder="ishitakeshawani@gmail.com"
            value={userData.email}
            required
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <label htmlFor="password" className="login-label" id="password">
              Password
            </label>
          </div>
          <div className="login-password">
            <input
              type={type}
              className="login-password-input"
              placeholder="password"
              value={userData.password}
              required
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <button className="login-icon button-style-none">
              <i
                className="fa-regular fa-eye password-icon"
                onClick={(e) => {
                  e.preventDefault();
                  setType("text");
                }}
              ></i>
            </button>
          </div>

          <div>
            <label htmlFor="confirmpassword" className="login-label" id="confirmpassword">
              Confirm Password
            </label>
          </div>
          <div className="login-password">
            <input
              type={confirmPasswordType}
              className="login-password-input"
              placeholder="password"
              value={userData.confirmPassword}
              required
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
            <button className="login-icon button-style-none">
              <i
                className="fa-regular fa-eye password-icon"
                onClick={(e) => {
                  e.preventDefault();
                  setConfirmPasswordType("text");
                }}
              ></i>
            </button>
          </div>
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <button
            type="submit"
            className="btn btn-login"
            onClick={(e) => onHandleSubmit(e)}
          >
            Signup
          </button>
          <Link to="/login" className="link-no-style signup-link">
            Already have an account
            <i className="fa-solid fa-angle-right login-icon"></i>
          </Link>
        </div>
      </div>
    </form>
  );
}
