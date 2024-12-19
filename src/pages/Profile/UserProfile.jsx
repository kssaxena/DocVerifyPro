import React, { useState, useEffect } from "react";

// Simulating API call
const fetchUserProfile = async () => {
  // Replace with your API call
  return {
    fullName: "John Doe",
    userName: "johndoe123",
    email: "johndoe@example.com",
    resumeDetail: [
      { id: 1, title: "Resume 1" },
      { id: 2, title: "Resume 2" },
    ],
    webDetail: [{ id: 1, url: "https://johndoe.com" }],
  };
};

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Fetch the user profile when the component mounts
    const loadUserData = async () => {
      const data = await fetchUserProfile();
      setUserData(data);
      setFormData({
        fullName: data.fullName,
        email: data.email,
        password: "",
      });
    };
    loadUserData();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit (e.g., update profile)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call API to update profile (e.g., PATCH request)
    console.log("Updating profile with data:", formData);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" mx-auto bg-[#1F2937] p-6 px-40 py-24">
      <h2 className="text-2xl font-semibold  mb-6">Profile</h2>

      {/* Profile Info */}
      {!editable ? (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Full Name</h3>
            <p>{userData.fullName}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Username</h3>
            <p>{userData.userName}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Email</h3>
            <p>{userData.email}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Resumes</h3>
            <ul>
              {userData.resumeDetail.map((resume) => (
                <li key={resume.id} className="text-sm text-gray-600">
                  {resume.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Web Links</h3>
            <ul>
              {userData.webDetail.map((web) => (
                <li key={web.id} className="text-sm text-gray-600">
                  {web.url}
                </li>
              ))}
            </ul>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setEditable(true)}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium  mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium  mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium  mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
