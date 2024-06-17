import { useMemo } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
} from "../assets/index";

const imageMap: { [key: string]: string } = {
  image1: image1,
  image2: image2,
  image3: image3,
  image4: image4,
  image5: image5,
  image6: image6,
  image7: image7,
  image8: image8,
  image9: image9,
  image10: image10,
};

const useImageReplace = (coverPhotoURL: string): string => {
  return useMemo(() => {
    const key = Object.keys(imageMap).find((key) =>
      coverPhotoURL.includes(key)
    );
    return key ? imageMap[key] : image10;
  }, [coverPhotoURL]);
};

export default useImageReplace;
