import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import zxcvbn from "zxcvbn";
import { toast } from "react-toastify";

const Register = () => {
  const tssurl = "http://localhost:5200/client";
  const [authMode] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordError(password !== value ? "Passwords do not match" : "");
  };

  const handlePasswordStrength = (e) => {
    const value = e.target.value;
    setPassword(value);
    const strengthScore = zxcvbn(value).score;
    setPasswordStrength(getPasswordStrengthLabel(strengthScore));
  };

  const getPasswordStrengthLabel = (score) => {
    switch (score) {
      case 0:
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "name") setName(value);
    if (name === "password") setPassword(value);
    if (name === "mobileNo") setMobileNo(value);
    if (name === "confirmPassword") handlePasswordChange(e);
  };

  const getStrengthClass = (strength) => {
    switch (strength) {
      case "Weak":
        return "text-red-500";
      case "Fair":
        return "text-yellow-500";
      case "Good":
        return "text-blue-500";
      case "Strong":
        return "text-green-500";
      default:
        return "";
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (authMode === "signup" && password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      const formData = { email, name, password, mobileNo };
      const url = `${tssurl}/auth/Signup`;

      const response = await axios.post(url, formData);
      if (response.status === 201) {
        setName("");
        setEmail("");
        setPassword("");
        setMobileNo("");
        setConfirmPassword("");
        toast.success("Email Verification Sent");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
        navigate("/login");
      } else {
        toast.error("Operation Unsuccessful");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Create an Account
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            New Customers
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders, and more.
          </p>
          {message && (
            <p
              className={`text-center text-sm mb-4 ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Mobile No *
              </label>
              <input
                type="text"
                name="mobileNo"
                value={mobileNo}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordStrength}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              <span className={`text-sm mt-1 ${getStrengthClass(passwordStrength)}`}>
                {passwordStrength}
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handlePasswordChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
            >
              Create an Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
