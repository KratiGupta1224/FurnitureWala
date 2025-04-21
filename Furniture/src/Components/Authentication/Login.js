import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const tssurl = "http://localhost:5200/client"; 
  const tssurl2 = "http://localhost:5200/admin";

  // Email validation function
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // Handle forgot password request
  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${tssurl}/auth/forgot-password`, { email });
      toast.success(res.data.message);
      setForgetPasswordModal(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  // Handle login request
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      setLoading(true);
      const formData = { email, password };
      const response = await axios.post(`${tssurl}/auth/Login`, formData);
      const authToken = response?.data?.authToken;
      const mID = response?.data?.mid;

      if (response.status === 200 && authMode === "signin") {
        setEmail("");
        setPassword("");
        toast.success("Login Successful");
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("MID", mID);

        const lastApiCallLoginDate = localStorage.getItem("lastApiCallLoginDate");
        const today = new Date().toISOString().slice(0, 10);
        if (lastApiCallLoginDate !== today) {
          await axios.post(`${tssurl2}/user/chit`, { mid: mID });
          localStorage.setItem("lastApiCallLoginDate", today);
        }
        
        navigate("/");
        
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen m-14">
      <div className="w-auto max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          CUSTOMER LOGIN
        </h2>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full py-2 mb-6 bg-[#9999FF] text-white rounded-lg hover:bg-gray-200 flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        {/* Registered Customers Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 text-center mb-2">
            REGISTERED CUSTOMERS
          </h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            If you have an account, sign in with your email address.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password *
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Show Password Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="show-password" className="ml-2 text-sm text-gray-600">
                Show Password
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
            >
              {loading ? "Signing in..." : "SIGN IN"}
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <a
              href="#"
              onClick={() => setForgetPasswordModal(true)}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              FORGOT YOUR PASSWORD?
            </a>
          </div>
        </div>

        {/* New Customers Section */}
        <div className="mt-6 bg-gray-200 border-gray-300 pt-6">
          <h3 className="text-lg font-medium text-gray-600 text-center mb-2">
            NEW CUSTOMERS
          </h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders, and more.
          </p>
          <button
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
            type="button"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
