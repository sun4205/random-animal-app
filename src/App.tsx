import React, { useState } from "react";
import { fetchCatImage, fetchDogImage } from "./api/fetchImage";
import ImageCard from "./components/ImageCard";
import "./App.css";

const App: React.FC = () => {
  const [imagUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async (type: "dog" | "cat") => {
    setLoading(true);
    const url = type === "dog" ? await fetchDogImage() : await fetchCatImage();
    setImageUrl(url);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Random dog & cat image</h1>
      <button onClick={() => handleFetch("dog")}>🐶 Dog</button>
      <button onClick={() => handleFetch("cat")}>🐱 Cat</button>
      {loading ? <p>Loading...</p> : imagUrl && <ImageCard url={imagUrl} />}
    </div>
  );
};

export default App;
