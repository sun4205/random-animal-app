import React from "react";

interface ImageCardProps {
  url: string;
  alt?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, alt }) => {
  return (
    <div>
      <img
        src={url}
        alt={alt || "Random Animal"}
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default ImageCard;
