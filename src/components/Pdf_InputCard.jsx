import React, { useState } from "react";

const Pdf_InputCard = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const validFiles = [];
    let errorMessage = "";

    // Validate files - Only accept PDFs
    for (let file of selectedFiles) {
      if (file.type === "application/pdf") {
        validFiles.push(file);
      } else {
        errorMessage = "Only PDF files are allowed!";
      }
    }

    setFiles(validFiles);
    setError(errorMessage);
  };

  // Handle send button click
  const handleSend = () => {
    if (files.length === 0) {
      setError("Please select PDF files to send!");
      return;
    }

    // Logic to handle file send (e.g., uploading to a server)
    console.log("Sending files:", files);

    // Reset after sending
    setFiles([]);
    setError("");
  };

  return (
    <div className="w-96 bg-[#1F2937] p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-xl font-semibold  mb-4">Upload PDFs</h2>

      {/* File Input */}
      <div>
        <label
          htmlFor="pdf-upload"
          className="block text-sm font-medium  mb-2"
        >
          Choose PDF Files
        </label>
        <input
          id="pdf-upload"
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileChange}
          className="w-full text-sm  file:bg-gray-100 file:border file:border-gray-300 file:rounded file:px-3 file:py-2 file: file:focus:outline-none file:focus:ring-2 file:focus:ring-blue-500 mb-4"
        />
      </div>

      {/* Display selected files */}
      <div className="mb-4">
        {files.length > 0 ? (
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-600">
                {file.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No files selected</p>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      {/* Send Button */}
      <button
        onClick={handleSend}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  );
};

export default Pdf_InputCard;
