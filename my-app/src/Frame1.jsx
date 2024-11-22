import React, { useState } from "react";
import "./Frame1.css";
import cfglogo from "./images/cfglogo_transparent.png";
import home_button from "./images/home_button.png";
import axios from "axios";
/*import { useNavigate } from "react-router-dom"; */

function Frame1() {
  const [file, setFile] = useState(null); // State to store the selected file

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Capture the file selected by the user
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Add the file to the form data

    try {
      // Send the file to the backend
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(`File uploaded successfully: ${response.data.filename}`);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed. Please try again.");
    }
  };
  /*const Frame1 = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
  
    const handleFileUpload = (event) => {
      const uploadedFile = event.target.files[0];
      if (uploadedFile) {
        setFile(uploadedFile);
        // Redirect to Frame2 after upload
        navigate("my-app/src/Frame2.jsx");
      }
    }; */
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a href="index">
            <img className="ps-2 pe-4" height="60" src={cfglogo} alt="Code For Good" />
          </a>
          <a href="./frame1.html" className="home-button">
            <img src={home_button} alt="Button Image" />
          </a>
        </div>
      </nav>

      <div className="text">Code For Good Application Reader</div>

      <form onSubmit={handleSubmit}>
        <div className="input_file">
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="upload">
        <button type="submit">Upload</button>
        </div>
      </form>
    </>
  );
}





export default Frame1;