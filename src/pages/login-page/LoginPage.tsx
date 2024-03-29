import React, { useState } from "react";
import "./loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDocumentTitle } from "../../hooks";

export function LoginPage() {
  type UserData = {
    email: string,
    password: string,
  };
  const [type, setType] = useState("password");
  const [userData, setUserData] =
    useState<UserData>(
      {
        email: "",
        password: "",
      });
  let navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useAuth();
  const [error, setError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  setDocumentTitle("Memory Nomads | Login");

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
    if (!userData.password) {
      setPasswordError("Please enter password!");
      return false;
    } else {
      setPasswordError("");
    }
    return true;
  };

  const testLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    setUserData((prev) => ({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    }));
    const value = await axios.post("/api/auth/login", {
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
    setUser(value.data.foundUser);
    localStorage.setItem("token", value.data.encodedToken);
    setIsLoggedIn(true);
    setUserData({
      email: "",
      password: "",
    });
    navigate("/");
  };

  const onSubmitHandler = async (e: React.MouseEvent) => {
    try {
      if (doValidate()) {
        e.preventDefault();
        const value = await axios.post("/api/auth/login", userData);
        setUser(value.data.foundUser);
        if (value.status == 401) {
          const notify = () => toast("The credentials you entered are invalid");
          notify();
        } else if (value.status === 404) {
          const notify = () => toast("The email you entered is not Registered");
          notify();
        }
        localStorage.setItem("token", value.data.encodedToken);
        setUserData({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (e) {
      const notify = () => toast("Something went wrong");
      notify();
    }
  };

  return (
    <div className="login-page">
      <ToastContainer />
      <form>
        <div className="login">
          <h4 className="login-title">Login</h4>
          <div className="login-label">
            <label htmlFor="email" id="email">
              Email address
            </label>
          </div>
          <input
            type="text"
            className="login-input"
            value={userData.email}
            placeholder="xyz@gmail.com"
            required
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
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
              value={userData.password}
              placeholder="password"
              required
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
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
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <button
            type="submit"
            className="btn btn-login"
            onClick={(e: React.MouseEvent) => onSubmitHandler(e)}
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-login"
            onClick={(e: React.MouseEvent) => testLogin(e)}
          >
            Login with test credentials
          </button>
          <Link to="/signup" className="link-no-style signup-link">
            Create new account{" "}
            <i
              className="fa-solid fa-angle-right login-icon"
              onClick={() => setType("text")}
            ></i>
          </Link>
        </div>
      </form>
    </div>
  );
}
