import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../api/axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      console.log(formData);

      await API.post("/register", formData)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            toast.error("User already registed. Please try again.");
            console.log(response.data);
            return;
          }
          toast.success("Registration successful. Please log in.");
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.log(error);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="h-screen md:flex">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden md:block order-2 md:order-1 "
      >
        <div className="h-screen flex flex-col justify-center items-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white font-bold text-4xl font-sans"
          >
            Placement Portal
          </motion.h1>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white mt-1"
          >
            Connect with top companies and launch your career.
          </motion.p>

          <motion.button
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Learn More
          </motion.button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex md:w-1/2 justify-center py-10 items-center bg-white order-1 md:order-2"
      >
        <form className="bg-white w-full md:w-3/4" onSubmit={handleSubmit}>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-800 font-bold text-2xl mb-1"
          >
            Sign Up for Placements
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-normal text-gray-600 mb-7"
          >
            Create your profile and explore opportunities.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <InputWithIcon
              iconName="user"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputWithIcon
              iconName="user"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputWithIcon
              iconName="mail"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputWithIcon
              iconName="lock"
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <InputWithIcon
              iconName="lock"
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Register for Placements
          </motion.button>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-center text-gray-600"
          >
            Already registered?{" "}
            <Link to={"/home/"}>
              <span className="text-blue-500 cursor-pointer">Login</span>
            </Link>
          </motion.p>
        </form>
      </motion.div>
    </div>
  );
};

const InputWithIcon = ({
  iconName,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
}) => {
  const getIcon = () => {
    switch (iconName) {
      case "user":
        return (
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        );
      case "mail":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        );
      case "lock":
        return (
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {getIcon()}
      </svg>
      <input
        className="pl-2 outline-none border-none w-full"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />{" "}
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
