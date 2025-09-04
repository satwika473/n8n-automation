import React, { useEffect, useState } from "react";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/images")
      .then(res => res.json())
      .then(setImages);
  }, []);

  return (
    <div>
      {images.map(url => (
        <img src={url} alt="cloudinary" key={url} width={200} />
      ))}
    </div>
  );
}

export default Gallery;