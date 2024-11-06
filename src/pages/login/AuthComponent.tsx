import React, { useState } from "react";
import { Login, Register } from "../../services/ApiService";
import { ToastContainer, toast } from "react-toastify";
import { cacheSessionId, cacheUserData } from "../../util/utility";

interface Props {
  setUserSession: Function;
}

const AuthComponent: React.FC<Props> = ({ setUserSession }) => {
  // State to track if we're showing the login or register form
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const onChangeHandler = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    Login(user).then((response) => {
      if (response.status === "success") {
        cacheSessionId(response.data.data.session.id);
        cacheUserData(JSON.stringify(user));
        toast.success(response.data.message, {
          position: "top-right",
        });
      } else {
        toast.error(response.data.message, {
          position: "top-right",
        });
      }
    });
  };

  const handleRegister = () => {
    Register(user).then((response) => {
      if (response.status === "success") {
        toast.success(response.data.message, {
          position: "top-right",
        });
      } else {
        toast.error(response.data.message, {
          position: "top-right",
        });
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      if (user.password === user.password2) {
        handleRegister();
      }
      toast.error("Passwords do not match");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form className="w-full">
          {!isLogin && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Username
              </label>
              <input
                onChange={onChangeHandler}
                type="text"
                name="name"
                id="username"
                value={user.name}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={onChangeHandler}
              type="email"
              name="email"
              id="email"
              value={user.email}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={onChangeHandler}
              type="password"
              name="password"
              id="password"
              value={user.password}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                onChange={onChangeHandler}
                type="password2"
                name="password2"
                value={user.password2}
                id="confirmPassword"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg mt-4"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-6 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleAuthMode}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
      <ToastContainer />
    </>
  );
};

export default AuthComponent;
