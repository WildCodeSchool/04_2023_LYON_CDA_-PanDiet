import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCurrentUserContext } from "../Context/userContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken } = useCurrentUserContext();

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      fetch("http://localhost:5000/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          toast.success(`Bienvenue ${result.user.firstname} 👋`);
        })
        .then(() => {
          setTimeout(() => {
            navigate("/my-recipes");
          }, 1000);
        })
        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className="flex  justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <div>
          <h2 className="mt-6 text-4xl font-extrabold text-center text-gray-900">
            Log in
          </h2>
        </div>
        <div className="mt-8 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="mt-1 p-3 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 p-3 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {errorMessage && (
                <div className="col-span-6">
                  <p className="text-base text-red-600">{errorMessage}</p>
                </div>
              )}

              <div className="col-span-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#E58A2F] hover:bg-orange-500"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
