import photoA from "../styles/img/personal-photo1.jpg";
import photoB from "../styles/img/personal-photo1.jpg";
import photoC from "../styles/img/personal-photo2.jpg";
import photoD from "../styles/img/personal-photo3.jpg";
import photoE from "../styles/img/personal-photo1.jpg";
import photoF from "../styles/img/personal-photo3.jpg";
import mini1 from "../styles/img/mini1.jpg";
import mini2 from "../styles/img/mini2.jpg";
import mini3 from "../styles/img/mini3.jpg";
import { useState } from "react";
import { SmallImg } from "./smallImg";

const arrPhoto = [
  { photo: photoB, mini: mini1 },
  { photo: photoC, mini: mini2 },
  { photo: photoD, mini: mini3 },
  { photo: photoE, mini: mini1 },
  { photo: photoF, mini: mini3 },
];

const Gallery = () => {
  const [curPhoto, setCurPhoto] = useState(photoA);
  return (
    <section className="gallery">
      <p>
        <img id="largeImg" src={curPhoto} alt={curPhoto} />
      </p>
        <SmallImg setCurPhoto ={setCurPhoto} arrPhoto={arrPhoto}/>
    </section>
  );
};

export { Gallery };
