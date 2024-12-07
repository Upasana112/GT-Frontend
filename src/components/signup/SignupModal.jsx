import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const SignupModal = ({ isOpen, onClose, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [PIN, setPIN] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");

  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Invalid email address");
      return;
    }

    try {
      await onSubmit({ username, PIN, email, balance: parseFloat(balance) });
      setUsername("");
      setPIN("");
      setEmail("");
      setBalance("");
      onClose();
    } catch (error) {
      setError(`Signup failed. ${error.message}`);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div
          ref={modalRef}
          className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none"
            aria-label="Close Modal"
          >
            <IoClose size={24} />
          </button>
          <h2 className="text-xl font-semibold mb-4 text-center">
            New Customer Signup
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">PIN</label>
              <input
                type="password"
                value={PIN}
                onChange={(e) => setPIN(e.target.value)}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Balance</label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default SignupModal;
