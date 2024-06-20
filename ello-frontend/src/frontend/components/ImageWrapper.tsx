import { useState } from "react";

type Props = {
  image_url: string;
};
const ImageWrapper = ({ image_url }: Props) => {
  const [loading, setLoading] = useState(true);



  return (
    <img
      className={` h-full w-full object-cover duration-700 ease-in-out group-hover:opacity-75 ${
        loading ? "scale-110  grayscale blur" : "scale-100 blur-0 grayscale-0"
      }`}
        src={image_url}
      loading="lazy"
      alt="movie banner"
      onLoad={() => setLoading(false)}
    />
  );
};

export default ImageWrapper;
