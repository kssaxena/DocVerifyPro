import React, { useState } from "react";
import Button from "../../components/ButtonWrapper";
import Input from "../../components/InputWrapper";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Basic validation
    if (
      !formData.fullName ||
      !formData.userName ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    // API call to register the user
    try {
      // Example API call (replace with actual API endpoint)
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Registration successful! Please log in.");
        setFormData({
          fullName: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setError(result.message || "Something went wrong!");
      }
    } catch (error) {
      setError("Network error: Could not reach the server.");
    }
  };

  return (
    <div className="w-full py-10 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-6">Register</h2>

      {/* Success or error messages */}
      {successMessage && (
        <div className="mb-4 text-green-600">{successMessage}</div>
      )}
      {error && <div className="mb-4 text-red-600">{error}</div>}

      {/* Register form */}
      <form className="flex w-full flex-col justify-center items-center " onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          label="Full Name"
          onChange={handleInputChange}
          type="text"
          required
        />

        {/* Username Input */}
        <Input
          id="userName"
          name="userName"
          value={formData.userName}
          label="Username"
          onChange={handleInputChange}
          type="text"
          required
        />

        {/* Email Input */}
        <Input
          id="email"
          name="email"
          value={formData.email}
          label="Email"
          onChange={handleInputChange}
          type="email"
          required
        />

        {/* Password Input */}
        <Input
          id="password"
          name="password"
          value={formData.password}
          label="Password"
          onChange={handleInputChange}
          type="password"
          required
        />

        {/* Confirm Password Input */}
        <Input
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          label="Confirm Password"
          onChange={handleInputChange}
          type="password"
          required
        />

        {/* Submit Button */}
        <Button
          type="submit"
          label="Register"
          className="w-96 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 my-10"
        />
      </form>
    </div>
  );
};

export default Register;
