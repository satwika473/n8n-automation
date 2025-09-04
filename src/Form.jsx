import React, { useState } from "react";

function CloudinaryUploadForm() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }; //added comments

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "demo_cloudinary"); // Replace with your preset

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmq3xjiwk/image/upload", // Replace with your cloud name
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
  setImageUrl(file.secure_url);
  alert("Image uploaded successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload</button>
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" width="200" />
        </div>
      )}
    </form>
  );
}

export default CloudinaryUploadForm;
