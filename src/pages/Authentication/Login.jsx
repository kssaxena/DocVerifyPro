import React, { useState } from "react";
import Input from "../../components/InputWrapper";
import Button from "../../components/ButtonWrapper";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (!formData.email || !formData.password) {
      setError("Please fill in both email and password.");
      return;
    }

    // API call to login the user
    try {
      // Example API call (replace with actual API endpoint)
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Login successful!");
        setFormData({
          email: "",
          password: "",
        });
      } else {
        setError(result.message || "Something went wrong!");
      }
    } catch (error) {
      setError("Network error: Could not reach the server.");
    }
  };

  return (
    <div className="h-screen p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold  mb-6">Login</h2>

      {/* Success or error messages */}
      {successMessage && (
        <div className="mb-4 text-green-600">{successMessage}</div>
      )}
      {error && <div className="mb-4 text-red-600">{error}</div>}

      {/* Login form */}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
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

        {/* Submit Button */}
        <Button
          type="submit"
          label="Login"
          className="w-96 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        />
      </form>
    </div>
  );
};

export default Login;
