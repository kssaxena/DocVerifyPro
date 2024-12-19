import React from "react";
import Button from "./ButtonWrapper";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleUserProfile = () => {
    navigate("/user-profile");
  };
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-lg mb-1">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <span>DocVerifyPro</span>
      </div>

      {/* Button Section */}
      <div className="flex space-x-4">
        <Button
          label="Register"
          onClick={handleRegister}
          variant="outline"
          size="medium"
        />
        <Button
          label="Login"
          onClick={handleLogin}
          variant="outline"
          size="medium"
        />
        <Button
          label="Profile"
          onClick={handleUserProfile}
          variant="primary"
          size="medium"
        />
      </div>
    </header>
  );
};

export default Header;
