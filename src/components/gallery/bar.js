export const GalleryBar = ({ onChange, photos }) => (
  <ul id="thumbs">
    { photos.map((img, i) => (
      <li key={ i } onClick={ () => onChange(img.photo) }>
        <img src={ img.mini } alt="more owner photos"/>
      </li>
    )) }
  </ul>
);


